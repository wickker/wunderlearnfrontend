import type { PropsWithChildren } from 'react'
import { cn } from '@/utils/functions'

type ChipProps = {
  className?: string
} & PropsWithChildren

const Chip = ({ className, children }: ChipProps) => {
  return (
    <div
      className={cn(
        'inline-block w-fit whitespace-nowrap rounded-full bg-cream px-3 py-1 font-medium text-primary text-xs',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Chip
