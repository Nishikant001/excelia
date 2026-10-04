import {useState} from 'react'
import {Reveal,Btn,Cluster,Eyebrow,Heading,Leaf} from '../components/ui.jsx'
import {Sprout,Settings,Search,Box,ShieldCheck,Truck} from 'lucide-react'
const W='mx-auto max-w-[1280px] px-5 lg:px-8'
const PageHero=({eyebrow,title,text})=><section className="relative overflow-hidden bg-gradient-to-r from-ivory to-[#e3d3b0] py-16 lg:py-24"><Leaf className="absolute right-6 top-6 h-40 opacity-80 hidden md:block" rot={30}/>
  <div className={W}><Reveal><Eyebrow>{eyebrow}</Eyebrow><h1 className="mt-3 max-w-2xl font-serif text-5xl md:text-6xl text-forest leading-[1.05]">{title}</h1><p className="mt-5 max-w-xl font-serif text-lg">{text}</p></Reveal></div></section>
const Cards=({items,cta})=><div className={`${W} grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3`}>{items.map(([t,d,m,n],i)=><Reveal key={t} delay={i*.06}><article className="h-full rounded-xl border border-beige bg-cream p-6">
  {n&&<Cluster n={n} className="h-28 w-full"/>}<h3 className="mt-2 text-2xl text-forest">{t}</h3><p className="mt-1 text-sm">{d}</p>{m&&<p className="mt-3 text-xs text-gold">{m}</p>}{cta&&<Btn className="mt-5">{cta}</Btn>}</article></Reveal>)}</div>
export const Products=()=><><PageHero eyebrow="Our Products" title="Cashews, graded with care." text="An editorial look at every grade we offer. Share your requirement and we will respond with details."/>
  {[['Cashew Grades',[['W320','Everyday premium. Balanced size, mild sweetness.','Packs: 250 g, 500 g, 1 kg · Home & retail',6],['W240','Large and premium. Rich, creamy bite.','Packs: 250 g, 500 g, 1 kg · Gifting & retail',5],['W180','Extra large celebration grade.','Packs: 250 g, 500 g, 1 kg · Gifting & festive',4]]],
  ['Premium Packaging',[['Pouch 250 g','Resealable premium pouch.','For retail shelves & gifting',3],['Pouch 500 g','Family-size resealable pouch.','Households & retailers',4],['Pouch 1 kg','Value pack for regular use.','Households & small business',5]]],
  ['Bulk / Commercial Grades',[['Bulk W320 / W240','Cartons for commercial buyers.','Retailers, distributors, hotels',6]]],
  ['Processing Grades',[['Sweet & Processing','Broken and split grades.','Mithai makers & food businesses',8]]]].map(([h,it])=><section key={h}><div className={`${W} pt-10`}><Heading className="text-forest text-4xl">{h}</Heading></div><Cards items={it} cta="Send Enquiry"/></section>)}</>
export const Story=()=><><PageHero eyebrow="Our Story" title="Rooted in Odisha. Made for India." text="Excelia Origins brings carefully selected cashews from one of India’s important cashew-growing regions to homes and businesses nationwide."/>
  <Cards items={[['Origin','Our work begins in Odisha’s cashew-growing belt.'],['Sourcing','Grade-conscious lots, chosen for size and freshness.'],['Quality philosophy','Consistency before dispatch — every batch inspected.'],['Values','Honesty, care for the land, and pride in craft.']]}/></>
export const Quality=()=><><PageHero eyebrow="Quality" title="Careful at every stage." text="From the first sorting table to the final seal, quality is checked, not assumed."/>
  <div className={`${W} grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3`}>{[[Sprout,'Careful Sourcing','Trusted regions and growers.'],[Settings,'Grade Selection','Sorted by size and colour.'],[Search,'Quality Inspection','Checks at each stage.'],[Box,'Hygienic Packing','Small-batch, controlled packing.'],[ShieldCheck,'Quality Assurance','Consistency before dispatch.'],[Truck,'Delivery','Across India with care.']].map(([I,t,d],i)=><Reveal key={t} delay={i*.06}><div className="h-full rounded-xl border border-beige bg-cream p-6"><span className="grid h-14 w-14 place-items-center rounded-full border border-gold text-gold"><I strokeWidth={1.3}/></span><h3 className="mt-4 text-2xl text-forest">{t}</h3><p className="text-sm">{d}</p></div></Reveal>)}</div></>
function Form({cta}){
  const [err,setErr]=useState({}),[ok,setOk]=useState(false)
  const submit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));const x={}
    if(!f.name.trim())x.name='Enter your name';if(!/^\S+@\S+\.\S+$/.test(f.email))x.email='Enter a valid email';if(!f.message.trim())x.message='Tell us what you need'
    setErr(x);if(!Object.keys(x).length){console.log('Enquiry',f);setOk(true);e.target.reset()}}
  const c='w-full rounded-lg border border-beige bg-ivory px-4 py-3 text-sm focus:outline-none focus:border-gold'
  const F=({n,p,t='text'})=><label className="block"><input name={n} type={t} placeholder={p} className={c}/>{err[n]&&<span className="text-xs text-red-800">{err[n]}</span>}</label>
  return <form onSubmit={submit} noValidate className="grid gap-4 rounded-xl bg-cream p-6 sm:grid-cols-2"><F n="name" p="Name"/><F n="company" p="Company"/><F n="email" p="Email" t="email"/><F n="phone" p="Phone" t="tel"/>
    <select name="requirement" className={`${c} sm:col-span-2`}><option>Retail packs</option><option>Bulk supply</option><option>Processing grade</option></select>
    <label className="sm:col-span-2"><textarea name="message" rows="4" placeholder="Message" className={c}/>{err.message&&<span className="text-xs text-red-800">{err.message}</span>}</label>
    <button className="sm:col-span-2 rounded-full bg-forest py-3 text-ivory hover:bg-deep transition-colors">{cta}</button>{ok&&<p className="sm:col-span-2 text-sm text-forest">Thank you — we will get back to you shortly.</p>}</form>}
export const B2B=()=><><PageHero eyebrow="Bulk & B2B" title="Supply built for business." text="Reliable cashew supply for retailers, distributors, sweet manufacturers, hotels, caterers and institutional buyers."/>
  <Cards items={[['Retailers & Distributors','W320, W240, W180 in cartons.'],['Sweet Manufacturers','Processing grades for mithai.'],['Hotels, Caterers & Institutions','Consistent quantities, scheduled supply.'],['Packaging options','250 g, 500 g, 1 kg retail; bulk cartons.'],['Supply capability','Pan India dispatch.']]}/>
  <div className={`${W} pb-14`}><Form cta="Send B2B Enquiry"/></div></>
export const Contact=()=><><PageHero eyebrow="Contact" title="Let’s talk cashews." text="Write to us for retail, gifting or bulk requirements."/>
  <div className={`${W} grid gap-8 py-12 lg:grid-cols-[1fr_1.4fr]`}><div className="space-y-3 font-serif text-xl"><p>hello@exceliaorigins.com</p><p>+91 00000 00000</p><p>Odisha, India</p></div><Form cta="Submit Enquiry →"/></div></>
