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

      <div className='relative flex flex-col items-center overflow-y-auto overflow-x-hidden'>
        <Outlet />

        <button
          className='fixed right-8 bottom-8 flex items-center gap-x-2 rounded-full bg-[#22CE62] px-6 py-3 text-white shadow-premium transition-all duration-200 hover:scale-102 hover:cursor-pointer hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-light focus-visible:ring-offset-2'
          type='button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 510 512.459'
            width='24'
          >
            <title>WhatsApp Icon</title>
            <path
              fill='white'
              d='M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z'
            />
          </svg>
          WhatsApp Us!
        </button>
      </div>
    </div>
  )
}

export default Layout
