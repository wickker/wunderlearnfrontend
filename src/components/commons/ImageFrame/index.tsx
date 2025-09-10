import type { ReactNode } from 'react'
import { cn } from '@/utils/functions'

type ImageFrameProps = {
  imageUrl: string
  imageAlt: string
  rightNode: ReactNode
  leftNode: ReactNode
  translateRight: string
  translateLeft: string
}

const ImageFrame = ({
  imageUrl,
  imageAlt,
  rightNode,
  leftNode,
  translateRight,
  translateLeft,
}: ImageFrameProps) => {
  return (
    <div className='group relative isolate'>
      <img
        src={imageUrl}
        alt={imageAlt}
        className='relative rounded-xl object-contain 2xl:z-10'
      />

      <div
        className={cn(
          `-top-3 -right-3 absolute hidden w-[26%] justify-end rounded-xl bg-navy-dark p-4 text-right text-white transition-transform duration-300 sm:flex ${translateRight}`,
        )}
      >
        {rightNode}
      </div>

      <div
        className={cn(
          `-bottom-3 -left-3 absolute hidden w-[26%] items-end rounded-xl bg-sage p-4 text-white transition-transform duration-300 sm:flex ${translateLeft}`,
        )}
      >
        {leftNode}
      </div>
    </div>
  )
}

export default ImageFrame
