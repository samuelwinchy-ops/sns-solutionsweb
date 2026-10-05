#!/usr/bin/env node
// Lists every t('…') string under components/immvela/ that has no German entry in
// i18n/immvela.ts and is not one of the strings that stay as written in both languages.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('../../../', import.meta.url).pathname
const src = readFileSync(join(root, 'i18n/immvela.ts'), 'utf8')
const literal = src.match(/const DE: Record<string, string> = (\{[\s\S]*?\n\})/)[1]
const DE = new Function(`return ${literal}`)()

// Domain terms, the sample listing, names, numbers and brand words: the same in both languages.
const KEEP = /^(Immvela\.?|PDF|Instagram|HWB|fGEE|Live|Auto|Staging|Team|Franchise|Name|\(optional\)|office@sns-austria\.com|Exposé, Gentzgasse 14|76 m², HWB 48|1020 Wien|1180 Wien|Gentzgasse 14|[A-Z]\. \w+|.*(straße|gasse|Straße) \d+.*|.*Wien.*|Energieausweis|Grundriss|Wohnfläche:?|Wohnfläche gesamt:|Zimmer:?|Baujahr:?|Objektbeschreibung|Seite 1|Wohnzimmer.*|Schlafzimmer|Vorraum|Küche|Bad( und WC)?|Flächenaufstellung|Heizwärmebedarf HWB:|Gesamtenergieeffizienz-Faktor fGEE:|48 kWh\/m²a|“.*”|Helle 3-Zimmer-Wohnung mit Balkon in Währing|Altbau.*|Die Wohnung liegt.*|Top 7.*)$/

const files = []
const walk = (d) => readdirSync(d).forEach((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : f.endsWith('.tsx') && files.push(join(d, f))))
walk(join(root, 'components/immvela'))

const missing = new Set()
const used = new Set()
for (const f of files) {
  const text = readFileSync(f, 'utf8')
  for (const m of text.matchAll(/\bt\(\s*'((?:[^'\\]|\\.)*)'\s*\)/g)) {
    const s = m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\').replace(/\u00a0/g, ' ')
    used.add(s)
    if (!(s in DE) && !(KEEP.test(s) && s.length < 60)) missing.add(`${s}    (${f.replace(root, '')})`)
  }
}
const unused = Object.keys(DE).filter((k) => !used.has(k))
if (missing.size) console.log('No German entry:\n  ' + [...missing].join('\n  '))
console.log(`${used.size} strings used, ${missing.size} missing, ${unused.length} German entries not referenced by a literal t() call`)
if (unused.length) console.log('Unreferenced (fine if built at runtime):\n  ' + unused.join('\n  '))
process.exit(missing.size ? 1 : 0)
