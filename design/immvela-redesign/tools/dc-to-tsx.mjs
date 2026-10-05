#!/usr/bin/env node
/**
 * One-time converter: a fragment of a `.dc.html` design file → a React (TSX) fragment.
 *
 * The section components under components/immvela/ were first produced with this and are
 * maintained by hand since, so re-running it would discard those edits. It is kept as the
 * record of how the markup was carried over from the design without retyping it.
 *
 *   node design/immvela-redesign/tools/dc-to-tsx.mjs <file.dc.html> <css selector> [--strings]
 *
 * What it does: class → className, inline style strings → style objects, `{{name}}` bindings →
 * `v.name`, `/_blob/<id>` images → next/image with the real asset, and every visible string →
 * `t('…')` so the German copy can be supplied by i18n/immvela.ts.
 */
import { createRequire } from 'node:module'
import { readFileSync } from 'node:fs'

const require = createRequire(import.meta.url)
const { parse } = require('next/dist/compiled/node-html-parser')

const BLOBS = {
  '75f99c1e1542e7819fc1196d8df8f89b': { file: 'grain.svg', w: 180, h: 180 },
  '56a98e7e934950f3a0e9e16206cf637e': { file: 'helix-light.svg', w: 200, h: 200 },
  '9fc80a4b6bfd62ebb10883374144ccfb': { file: 'sample-cover.jpg' },
  b4dd5eae354b5250c168b8ed89537a28: { file: 'sample-living.jpg' },
  b65e1092c2fc4f4d44ea8d3aa50f42b7: { file: 'sample-lounge.jpg' },
  '4ced161614b4c37b6a2daca57a98edf1': { file: 'sample-study.jpg' },
}
export const ASSET_BASE = '/immvela/redesign/'

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }
const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/g, (m, n) => ENT[n] ?? m)

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
const fonts = (v) =>
  v
    .replace(/'Bricolage Grotesque'/g, 'var(--font-bricolage)')
    .replace(/'Geist'/g, 'var(--font-geist-sans)')

function splitDecls(style) {
  const out = []
  let depth = 0
  let cur = ''
  for (const ch of style) {
    if (ch === '(') depth++
    if (ch === ')') depth--
    if (ch === ';' && depth === 0) {
      out.push(cur)
      cur = ''
    } else cur += ch
  }
  if (cur.trim()) out.push(cur)
  return out
}

const str = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
const bind = (s) =>
  /^\{\{\s*(\w+)\s*\}\}$/.test(s)
    ? `v.${s.match(/\w+/)[0]}`
    : '`' + s.replace(/`/g, '\\`').replace(/\{\{\s*(\w+)\s*\}\}/g, '${v.$1}') + '`'

function styleObj(style) {
  let custom = false
  const parts = splitDecls(style).map((d) => {
    const i = d.indexOf(':')
    let k = d.slice(0, i).trim()
    const val = fonts(d.slice(i + 1).trim())
    if (k.startsWith('--')) {
      custom = true
      k = `'${k}'`
    } else if (k.startsWith('-webkit-')) k = 'Webkit' + camel(k.slice(7))
    else k = camel(k)
    return `${k}: ${val.includes('{{') ? bind(val) : str(val)}`
  })
  return `{{ ${parts.join(', ')} }${custom ? ' as CSSProperties' : ''}}`
}

const KEEP = /^(aria-|data-)/
const RENAME = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', autocomplete: 'autoComplete', novalidate: 'noValidate', maxlength: 'maxLength', readonly: 'readOnly' }
const TEXT_ATTR = new Set(['aria-label', 'alt', 'placeholder', 'title', 'aria-valuetext'])
const hasWords = (s) => /[A-Za-zÀ-ÿ]{2,}/.test(s)

export const strings = new Set()
const t = (s) => {
  strings.add(s)
  return `t(${str(s)})`
}

function attrs(node, sizes) {
  const raw = node.rawAttributes ?? node.attributes
  const out = []
  const tag = node.rawTagName
  let img = null
  for (let [k, val] of Object.entries(raw)) {
    val = decode(val)
    if (tag === 'img' && k === 'src') {
      const id = val.replace('/_blob/', '')
      img = BLOBS[id]
      if (!img) throw new Error('unknown blob ' + id)
      out.push(`src="${ASSET_BASE}${img.file}"`)
      continue
    }
    if (k === 'style') {
      out.push(`style=${styleObj(val)}`)
      continue
    }
    const name = RENAME[k] ?? (KEEP.test(k) ? k : camel(k))
    if (val.includes('{{')) out.push(`${name}={${bind(val)}}`)
    else if (val === '' && !KEEP.test(k) && k !== 'alt' && k !== 'value') out.push(name)
    else if (TEXT_ATTR.has(k) && hasWords(val)) out.push(`${name}={${t(val)}}`)
    else out.push(`${name}="${val.replace(/"/g, '&quot;')}"`)
  }
  if (img) {
    out.push(`width={${img.w ?? 'W'}}`, `height={${img.h ?? 'H'}}`)
    out.push(img.file.endsWith('.svg') ? 'unoptimized' : `sizes="${sizes}"`)
  }
  return out.length ? ' ' + out.join(' ') : ''
}

export function toJsx(node, sizes = '600px') {
  if (node.nodeType === 8) return ''
  if (node.nodeType === 3) {
    const raw = node.rawText
    if (!raw.trim()) return /\n/.test(raw) || !raw ? '' : "{' '}"
    const lead = /^\s+\S/.test(raw) ? "{' '}" : ''
    const trail = /\S\s+$/.test(raw) ? "{' '}" : ''
    const text = decode(raw.trim().replace(/\s+/g, ' '))
    const body = text.includes('{{') ? `{${bind(text)}}` : hasWords(text) ? `{${t(text)}}` : `{${str(text)}}`
    return lead + body + trail
  }
  let tag = node.rawTagName
  if (tag === 'img') tag = 'Image'
  const kids = node.childNodes.map((n) => toJsx(n, sizes)).join('')
  const a = attrs(node, sizes)
  return kids ? `<${tag}${a}>${kids}</${tag}>` : `<${tag}${a} />`
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const [file, selector, flag] = process.argv.slice(2)
  const html = readFileSync(file, 'utf8')
  const root = parse(html, { comment: true })
  const nodes = root.querySelectorAll(selector)
  if (!nodes.length) throw new Error('nothing matches ' + selector)
  const jsx = nodes.map((n) => toJsx(n)).join('\n')
  if (flag === '--strings') console.log([...strings].join('\n'))
  else console.log(jsx)
}
