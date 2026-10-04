import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {ArrowRight} from 'lucide-react'
export const Reveal=({children,delay=0,className=''})=><motion.div className={className} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.6,delay,ease:'easeOut'}}>{children}</motion.div>
export const LeafMark=({className='w-5 h-5'})=><svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 2C6 6 5 13 12 22c7-9 6-16 0-20Z" opacity=".9"/></svg>
export const Logo=({light})=><div className={`flex flex-col items-center leading-none ${light?'text-ivory':'text-forest'}`}>
  <LeafMark className="w-4 h-4 text-gold -mb-0.5"/><span className="font-serif text-[28px] font-semibold tracking-wide">EXCELIA</span>
  <span className="flex items-center gap-1.5 text-gold text-[11px] tracking-[.3em] font-medium"><i className="h-px w-3 bg-gold"/>ORIGINS<i className="h-px w-3 bg-gold"/></span>
  <span className="text-[7px] tracking-[.25em] mt-1 opacity-80">PRIVATE LIMITED</span></div>
export const Btn=({to='/contact',variant='solid',children,className=''})=>{
  const v={solid:'bg-forest text-ivory hover:bg-deep',outline:'border border-gold text-gold hover:bg-gold hover:text-ivory',gold:'bg-gold text-ivory hover:bg-lgold'}[variant]
  return <Link to={to} className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors duration-300 ${v} ${className}`}>{children}<ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></Link>}
const D="M12 62C0 42 18 10 52 12c26 2 40 22 28 40-4 6-12 2-9-5 5-9-3-19-15-17-14 2-14 18-14 30 0 12-5 14-10 6Z"
const POS=[[10,70,-20,1],[75,35,10,1],[140,62,35,1],[100,105,-10,.95],[175,105,25,.9],[45,115,40,.9],[125,12,-30,.85],[200,55,0,.8]]
export const Cluster=({className='',n=8})=><svg viewBox="0 0 290 190" className={className} aria-hidden>
  <defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F3E3BF"/><stop offset="1" stopColor="#D9B97C"/></linearGradient></defs>
  {POS.slice(0,n).map(([x,y,r,s],i)=><path key={i} d={D} fill="url(#cg)" stroke="#B9944F" strokeWidth="1.2" transform={`translate(${x} ${y}) rotate(${r} 40 36) scale(${s})`}/>)}</svg>
export const Leaf=({className='',rot=0})=><svg viewBox="0 0 100 160" className={className} style={{transform:`rotate(${rot}deg)`}} aria-hidden>
  <path d="M50 4C-5 50-5 110 50 156 105 110 105 50 50 4Z" fill="#3E6B3A"/><path d="M50 4v152" stroke="#2A4F2B" strokeWidth="2"/><path d="M50 4C20 50 20 110 50 156" fill="#4F7F47" opacity=".6"/></svg>
export const Eyebrow=({children,light})=><p className={`text-[11px] font-semibold tracking-[.2em] uppercase ${light?'text-lgold':'text-gold'}`}>{children}</p>
export const Heading=({children,className=''})=><h2 className={`font-serif text-4xl md:text-5xl leading-[1.05] ${className}`}>{children}</h2>
