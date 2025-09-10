import { useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { Outlet } from 'react-router'
import { LogoSvg } from '@/components/commons'

const interpolateColor = (start: number[], end: number[], t: number) =>
  start.map((s, i) => Math.round(s + (end[i] - s) * t))

const Layout = () => {
  const [bg, setBg] = useState('var(--color-cream)')
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
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i] as SVGPathElement
      path.style.animation = 'none'
      path.style.fill = `rgb(${finalText[0]},${finalText[1]},${finalText[2]})`
    }
  })

  return (
    <div className='flex min-h-[100dvh] flex-col bg-cream'>
      {/* Header */}
      <nav
        className='sticky top-0 z-10 flex h-18 items-center justify-center transition-color'
        style={{
          background: `${bg}`,
        }}
      >
        <LogoSvg height='26%' />
      </nav>

      <div className='flex flex-col items-center overflow-y-auto overflow-x-hidden'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
