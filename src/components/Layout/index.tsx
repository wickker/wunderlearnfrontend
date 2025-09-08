import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-cream">
      {/* Header */}
      <nav className="bg-(image:--gradient-sage) sticky top-0 z-10 h-18" />

      <div className="flex flex-col items-center overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
