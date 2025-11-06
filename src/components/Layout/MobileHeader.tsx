import { Menu } from 'lucide-react'
import { useState } from 'react'
import { LogoSvg } from '@/components/commons'
import { cn } from '@/utils/functions'

type MobileHeaderProps = {
  bgColor: string
  textColor: string
  navItems: Readonly<
    Array<{
      label: string
      href: string
    }>
  >
}

const MobileHeader = ({ bgColor, textColor, navItems }: MobileHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className='isolate grid h-18 w-full grid-cols-1 sm:hidden'>
      <div
        className='z-10 col-start-1 row-start-1 grid h-18 grid-cols-[1fr_auto_1fr] px-6'
        style={{
          background: `${bgColor}`,
        }}
      >
        <button
          className='cursor-pointer transition-transform hover:scale-105'
          style={{
            color: `${textColor}`,
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type='button'
        >
          <Menu className='h-6 w-6' />
        </button>
        <a href='#top'>
          <LogoSvg width='160px' height='72px' />
        </a>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          '-translate-y-[112px] col-start-1 row-start-1 shadow-premium transition-transform',
          isMobileMenuOpen && 'translate-y-[72px]',
        )}
        style={{
          background: `${bgColor}`,
        }}
      >
        {/* biome-ignore lint: default */}
        <div
          className='flex flex-col gap-y-4 p-6 font-medium'
          style={{
            color: `${textColor}`,
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((navItem) => (
            <a key={navItem.href} href={navItem.href} className='w-fit'>
              {navItem.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
