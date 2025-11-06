import { LogoSvg } from '@/components/commons'

type DesktopHeaderProps = {
  textColor: string
  navItems: Readonly<
    Array<{
      label: string
      href: string
    }>
  >
}

const DesktopHeader = ({ textColor, navItems }: DesktopHeaderProps) => {
  return (
    <div className='mx-auto hidden h-18 w-full max-w-7xl items-center justify-between px-6 sm:flex'>
      <a href='#top'>
        <LogoSvg width='160px' />
      </a>
      <div
        className='flex items-center gap-x-10 font-medium'
        style={{
          color: `${textColor}`,
        }}
      >
        {navItems.map((navItem) => (
          <a
            key={navItem.href}
            href={navItem.href}
            className='transition-transform hover:scale-105'
          >
            {navItem.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default DesktopHeader
