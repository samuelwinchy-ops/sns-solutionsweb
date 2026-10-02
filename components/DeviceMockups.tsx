import Image from 'next/image'

/**
 * Device frames for showing a product's real UI: a current MacBook Pro
 * (thin bezel, camera notch, aluminium base with the opening lip) and a
 * current iPhone Pro (thin black bezel inside a titanium edge, Dynamic
 * Island). Drawn in CSS rather than taken from Apple's marketing renders, so
 * there is no Apple artwork or logo here to license — only the shape of a
 * laptop and a phone.
 *
 * Every measurement inside a frame is in `cqw` (container-query width units),
 * so the browser bar, the status bar and the island keep their proportions at
 * any size instead of a fixed 11px clock that clips on a phone.
 *
 * The screens are fed real captures of the product (public/products/…), never
 * mock UI: the point of the frame is to say "this is what you will use".
 */

export function MacBook({
  src,
  alt,
  url,
  width,
  height,
  className = '',
}: {
  src: string
  alt: string
  /** Shown in the browser bar, so it reads as a web app. */
  url: string
  /** Intrinsic size of the capture. */
  width: number
  height: number
  className?: string
}) {
  return (
    <div className={`[container-type:inline-size] ${className}`}>
      {/* Lid: near-black bezel around the display, the notch on its top edge. */}
      <div className="relative rounded-t-[2.2cqw] bg-[#0d0d0f] p-[1.5cqw] pb-[1.2cqw] shadow-[0_40px_80px_-40px_rgba(16,24,20,0.55)] ring-1 ring-black/40">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 z-10 h-[1.6cqw] w-[12cqw] -translate-x-1/2 rounded-b-[0.8cqw] bg-[#0d0d0f]"
        />
        <div className="overflow-hidden rounded-[0.6cqw] bg-white">
          {/* A browser bar: traffic lights and the address, so the capture
              reads as the web app it is. */}
          <div className="flex items-center gap-[1.2cqw] border-b border-black/[0.08] bg-[#f3f2ee] px-[1.4cqw] py-[0.8cqw]">
            <span aria-hidden="true" className="flex gap-[0.5cqw]">
              <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[#ff5f57]" />
              <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[#febc2e]" />
              <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[#28c840]" />
            </span>
            <span className="mx-auto min-w-0 truncate rounded-[0.5cqw] bg-white px-[1.4cqw] py-[0.3cqw] text-center font-inter text-[1.15cqw] text-[#5c6b61]">
              {url}
            </span>
            <span aria-hidden="true" className="w-[3.2cqw]" />
          </div>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 860px, 92vw"
            className="block h-auto w-full"
          />
        </div>
      </div>
      {/* Base: a thin slab wider than the lid, with the opening lip. */}
      <div
        aria-hidden="true"
        className="relative -mx-[6%] h-[1.4cqw] min-h-[6px] rounded-b-[1.4cqw] bg-gradient-to-b from-[#dcdde0] to-[#a9abaf] shadow-[0_18px_30px_-16px_rgba(16,24,20,0.6)]"
      >
        <div className="absolute left-1/2 top-0 h-[0.6cqw] w-[14%] -translate-x-1/2 rounded-b-[0.8cqw] bg-[#c3c5c8]" />
      </div>
    </div>
  )
}

export function IPhone({
  src,
  alt,
  width,
  height,
  className = '',
}: {
  src: string
  alt: string
  width: number
  height: number
  /** Pass positioning here; without `absolute`/`fixed` it stays in flow. */
  className?: string
}) {
  return (
    <div className={`[container-type:inline-size] ${className}`}>
      {/* Titanium edge, then a thin black bezel, then the screen. */}
      <div className="rounded-[16cqw] bg-gradient-to-b from-[#c8c9cc] to-[#8e9094] p-[1.1cqw] shadow-[0_30px_60px_-24px_rgba(16,24,20,0.6)]">
        <div className="rounded-[15cqw] bg-black p-[2.6cqw]">
          <div className="relative overflow-hidden rounded-[12.6cqw] bg-[#f4f3ee]">
            {/* Status bar: the time left of the island, the indicators right. */}
            <div className="relative flex h-[12cqw] items-center justify-between px-[8cqw] font-inter text-[4.2cqw] font-semibold text-[#16352a]">
              <span>9:41</span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[2.8cqw] h-[7.6cqw] w-[28cqw] -translate-x-1/2 rounded-full bg-black"
              />
              <span aria-hidden="true" className="flex items-center gap-[1.2cqw]">
                <svg viewBox="0 0 16 10" fill="currentColor" className="h-[2.6cqw] w-auto">
                  <rect x="0" y="6" width="3" height="4" rx="1" />
                  <rect x="4.3" y="4" width="3" height="6" rx="1" />
                  <rect x="8.6" y="2" width="3" height="8" rx="1" />
                  <rect x="12.9" y="0" width="3" height="10" rx="1" />
                </svg>
                <svg viewBox="0 0 22 11" fill="none" className="h-[2.8cqw] w-auto">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="18"
                    height="10"
                    rx="3"
                    stroke="currentColor"
                    opacity="0.4"
                  />
                  <rect x="2" y="2" width="14" height="7" rx="1.6" fill="currentColor" />
                  <rect
                    x="19.6"
                    y="3.5"
                    width="1.6"
                    height="4"
                    rx="0.8"
                    fill="currentColor"
                    opacity="0.4"
                  />
                </svg>
              </span>
            </div>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(min-width: 1024px) 260px, 40vw"
              className="block h-auto w-full"
            />
            {/* Home indicator */}
            <span
              aria-hidden="true"
              className="absolute bottom-[2cqw] left-1/2 h-[1.4cqw] w-[34cqw] -translate-x-1/2 rounded-full bg-black/70"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
