import { Route, Routes } from 'react-router'
import Layout from '@/components/Layout'
import Landing from '@/pages/Landing'
import NotFound from '@/pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Landing />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
