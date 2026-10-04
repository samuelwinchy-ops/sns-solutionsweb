/**
 * Every sample photo on the immvela.com pages, by role. Swapping a photo is one line here: replace
 * `src` and its pixel size. Sections read only from this file, never a path of their own.
 *
 * Photos: Unsplash License, credited in public/immvela/redesign/photos/CREDITS.md.
 */
export type Photo = { src: string; width: number; height: number }

const P = (src: string, width: number, height: number): Photo => ({
  src: `/immvela/redesign/${src}`,
  width,
  height,
})

export const PHOTOS: {
  /** The main listing's cover: the Exposé in "Documents in", the listing avatar in the phone. */
  coverMain: Photo
  /** The main listing's kitchen: the Instagram post, an input thumbnail. */
  interior2: Photo
  /** The main listing's bedroom: an input thumbnail, the LinkedIn post in the phone. */
  interior3: Photo
  /** An empty room before staging: the third input thumbnail. */
  emptyRoom: Photo | null
  /** The virtually staged result, always shown with its "Virtually staged" label. */
  stagedRoom: Photo
  /** The building from outside (Vienna, Gründerzeit): the brochure page. */
  exterior: Photo | null
  /** The second example listing (Praterstraße 31) in the trace section. */
  secondListing: { living: Photo; dining: Photo }
} = {
  coverMain: P('photos/coverMain.jpg', 2400, 1600),
  interior2: P('photos/interior2.jpg', 2400, 1600),
  interior3: P('photos/interior3.jpg', 2400, 1600),
  emptyRoom: P('photos/emptyRoom.jpg', 2400, 1600),
  stagedRoom: P('sample-living.jpg', 1600, 1142),
  exterior: P('photos/exterior.jpg', 2400, 1600),
  secondListing: {
    living: P('photos/second-living.jpg', 2400, 1600),
    dining: P('photos/second-dining.jpg', 2400, 1600),
  },
}

/** The image props for next/image. */
export const img = (p: Photo) => ({ src: p.src, width: p.width, height: p.height })
