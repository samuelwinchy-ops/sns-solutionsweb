import type { Locale } from './config'
import { en, type Dictionary } from './dictionaries/en'
import { de } from './dictionaries/de'

export type { Dictionary, Segment, ConsentSegment } from './dictionaries/en'

const dictionaries: Record<Locale, Dictionary> = { en, de }

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale]
}
