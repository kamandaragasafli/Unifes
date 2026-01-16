import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Partners from '../pages/Partners'
import Contact from '../pages/Contact'

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/haqqimizda" element={<About />} />
      <Route path="/mehsullar" element={<Products />} />
      <Route path="/partnyorlar" element={<Partners />} />
      <Route path="/elaqe" element={<Contact />} />
    </Routes>
  )
}

export default AnimatedRoutes

