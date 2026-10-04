import {useState} from 'react'
import {NavLink,Link} from 'react-router-dom'
import {Search,Menu,X,ShoppingCart,ArrowRight} from 'lucide-react'
import {motion,AnimatePresence} from 'framer-motion'
import {Logo} from './ui.jsx'
export const links=[['Home','/'],['Our Products','/our-products'],['Our Story','/our-story'],['Quality','/quality'],['Bulk & B2B','/bulk-b2b'],['Contact','/contact']]
export default function Navbar(){
  const [open,setOpen]=useState(false)
  return <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-beige">
    <div className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-5 lg:px-8">
      <Link to="/" aria-label="Excelia Origins home"><Logo/></Link>
      <nav aria-label="Primary" className="hidden lg:flex gap-9">{links.map(([t,to])=><NavLink key={to} to={to} end className={({isActive})=>`py-1 text-[13px] border-b transition-colors ${isActive?'border-gold text-forest':'border-transparent hover:border-gold/60'}`}>{t}</NavLink>)}</nav>
      <div className="hidden lg:flex items-center gap-5"><button aria-label="Search" className="text-ink hover:text-gold transition-colors"><Search size={18} strokeWidth={1.5}/></button><Link to="/our-products" aria-label="Cart" className="text-ink hover:text-gold transition-colors"><ShoppingCart size={18} strokeWidth={1.5}/></Link><Link to="/our-products" className="inline-flex items-center gap-2 rounded-lg bg-forest px-6 py-2.5 text-sm text-ivory hover:bg-deep transition-colors">Shop Now <ArrowRight size={15}/></Link></div>
      <button className="lg:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
    </div>
    <AnimatePresence>{open&&<motion.nav initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="lg:hidden overflow-hidden bg-ivory border-t border-beige">
      <div className="flex flex-col px-5 py-4 gap-4">{links.map(([t,to])=><NavLink key={to} to={to} end onClick={()=>setOpen(false)} className={({isActive})=>`font-serif text-2xl ${isActive?'text-gold':''}`}>{t}</NavLink>)}</div></motion.nav>}</AnimatePresence>
  </header>}
