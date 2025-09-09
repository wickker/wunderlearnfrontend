import { useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { Outlet } from 'react-router'

const interpolateColor = (start: number[], end: number[], t: number) =>
  start.map((s, i) => Math.round(s + (end[i] - s) * t))

const Layout = () => {
  const [bg, setBg] = useState('var(--gradient-sage)')
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const maxScroll = 200
    const start = [245, 242, 237] // cream
    const end = [112, 169, 131] // sage

    const t = Math.min(latest / maxScroll, 1)
    const [r, g, b] = interpolateColor(start, end, t)
    setBg(`rgb(${r},${g},${b})`)
  })

  return (
    <div className='flex min-h-[100dvh] flex-col bg-cream'>
      {/* Header */}
      <nav
        className='sticky top-0 z-10 h-18 transition-colors'
        style={{
          background: `${bg}`,
        }}
      />

      <div className='flex flex-col items-center overflow-y-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
