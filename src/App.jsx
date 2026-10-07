import {useEffect} from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Seo from './components/Seo.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Story from './pages/Story.jsx'
import Quality from './pages/Quality.jsx'
import B2B from './pages/B2B.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
export default function App(){
  const {pathname}=useLocation()
  useEffect(()=>{if(typeof window!=='undefined')window.scrollTo(0,0)},[pathname])
  return <><Seo/><Navbar/><main><Routes>
    <Route path="/" element={<Home/>}/><Route path="/our-products" element={<Products/>}/><Route path="/our-story" element={<Story/>}/>
    <Route path="/quality" element={<Quality/>}/><Route path="/bulk-b2b" element={<B2B/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/>
  </Routes></main><Footer/></>
}
