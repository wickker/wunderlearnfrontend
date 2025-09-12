import { Menu } from 'lucide-react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { Outlet } from 'react-router'
import { LogoSvg } from '@/components/commons'
import { cn } from '@/utils/functions'

const interpolateColor = (start: number[], end: number[], t: number) =>
  start.map((s, i) => Math.round(s + (end[i] - s) * t))

const Layout = () => {
  const [bg, setBg] = useState('var(--color-cream)')
  const [text, setText] = useState('var(--color-navy-dark)')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const maxScroll = 200
    const startBg = [245, 242, 237] // cream
    const endBg = [135, 189, 153] // sage light
    const startText = [44, 57, 75] // navy dark
    const endText = [245, 242, 237] // cream

    const t = Math.min(latest / maxScroll, 1)
    const finalBg = interpolateColor(startBg, endBg, t)
    setBg(`rgb(${finalBg[0]},${finalBg[1]},${finalBg[2]})`)

    const finalText = interpolateColor(startText, endText, t)
    const paths = document.querySelectorAll('.logo-path')
    setText(`rgb(${finalText[0]},${finalText[1]},${finalText[2]})`)
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i] as SVGPathElement
      path.style.animation = 'none'
      path.style.fill = `rgb(${finalText[0]},${finalText[1]},${finalText[2]})`
    }
  })

  return (
    /* biome-ignore lint: default */
    <div className='flex min-h-[100dvh] flex-col bg-cream' id='top'>
      {/* Header */}
      <nav
        className='sticky top-0 z-10 w-full'
        style={{
          background: `${bg}`,
        }}
      >
        {/* Desktop */}
        <div className='mx-auto hidden h-18 w-full max-w-7xl items-center justify-between px-6 sm:flex'>
          <a href='#top'>
            <LogoSvg width='160px' />
          </a>
          <div
            className='flex items-center gap-x-10 font-medium'
            style={{
              color: `${text}`,
            }}
          >
            <a
              href='#why-choose-us'
              className='transition-transform hover:scale-105'
            >
              Why Choose Us
            </a>
            <a href='#contact' className='transition-transform hover:scale-105'>
              Contact
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className='isolate grid h-18 w-full grid-cols-1 sm:hidden'>
          <div
            className='z-10 col-start-1 row-start-1 grid h-18 grid-cols-[1fr_auto_1fr] px-6'
            style={{
              background: `${bg}`,
            }}
          >
            <button
              className='cursor-pointer transition-transform hover:scale-105'
              style={{
                color: `${text}`,
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
              background: `${bg}`,
            }}
          >
            {/* biome-ignore lint: default */}
            <div
              className='flex flex-col gap-y-4 p-6 font-medium'
              style={{
                color: `${text}`,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href='#why-choose-us' className='w-fit'>
                Why Choose Us
              </a>
              <a href='#contact' className='w-fit'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className='flex flex-col items-center overflow-y-auto overflow-x-hidden'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
