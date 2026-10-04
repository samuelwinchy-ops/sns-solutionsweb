/**
 * Every sample photo on the immvela.com pages, by role. Swapping a photo is one line here: replace
 * `src` and its pixel size. Sections read only from this file, never a path of their own.
 *
 * A role with no photo yet is `null`; the sections fall back as noted, so a new file can arrive
 * later without touching them.
 */
export type Photo = { src: string; width: number; height: number }

const P = (src: string, width: number, height: number): Photo => ({ src: `/immvela/redesign/${src}`, width, height })

export const PHOTOS: {
  /** The main listing's cover: the Exposé in "Documents in", the listing avatar in the phone. */
  coverMain: Photo
  /** A second room of the main listing: the Instagram post, the first input thumbnail. */
  interior2: Photo
  /** The second example listing (Praterstraße 31) in the trace section. */
  interior3: Photo
  /** An empty room before staging. None yet: the inputs fall back to `interior2`, the staging section draws its room. */
  emptyRoom: Photo | null
  /** The virtually staged result, always shown with its "Virtually staged" label. */
  stagedRoom: Photo
  /** The building from outside: the brochure page. None yet: falls back to `coverMain`. */
  exterior: Photo | null
} = {
  coverMain: P('sample-cover.jpg', 1300, 1107),
  interior2: P('sample-lounge.jpg', 960, 637),
  interior3: P('sample-study.jpg', 1600, 1068),
  emptyRoom: null,
  stagedRoom: P('sample-living.jpg', 1600, 1142),
  exterior: null,
}

/** The image props for next/image. */
export const img = (p: Photo) => ({ src: p.src, width: p.width, height: p.height })
