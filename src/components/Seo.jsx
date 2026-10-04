import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
export const SITE='https://www.exceliaorigins.com'
const PAGES={
 '/':['Excelia Origins | Premium Cashews from Odisha, India','Premium W320, W240 and W180 cashews, carefully sourced from Odisha, freshly packed and supplied across India. Retail packs and bulk B2B supply.'],
 '/our-products':['Our Products | Premium Cashew Grades & Packaging | Excelia Origins','Explore W320, W240, W180 and sweet processing cashew grades with 250 g, 500 g and 1 kg packs and bulk cartons. Send an enquiry.'],
 '/our-story':['Our Story | Rooted in Odisha, Made for India | Excelia Origins','How Excelia Origins sources grade-conscious cashews from Odisha and brings them to homes, retailers and food businesses across India.'],
 '/quality':['Quality | Sourcing, Grading & Hygienic Packing | Excelia Origins','From careful sourcing to grading, inspection, hygienic packing and delivery, see how Excelia Origins keeps cashew quality consistent.'],
 '/bulk-b2b':['Bulk Cashew Supply for B2B Buyers | Excelia Origins','Bulk cashews for retailers, distributors, sweet manufacturers, hotels, caterers and institutions. Multiple grades, pan-India supply. Send a B2B enquiry.'],
 '/contact':['Contact Excelia Origins | Cashew Enquiries','Contact Excelia Origins for retail, gifting or bulk cashew requirements. Send your enquiry and we will respond shortly.']}
function setMeta(sel,attr,key,val){let el=document.head.querySelector(sel);if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.appendChild(el)}el.setAttribute('content',val)}
export default function Seo(){
  const {pathname}=useLocation()
  useEffect(()=>{
    const [t,d]=PAGES[pathname]||PAGES['/'];const url=SITE+(pathname==='/'?'/':pathname)
    document.title=t
    setMeta('meta[name="description"]','name','description',d)
    setMeta('meta[property="og:title"]','property','og:title',t)
    setMeta('meta[property="og:description"]','property','og:description',d)
    setMeta('meta[property="og:url"]','property','og:url',url)
    setMeta('meta[name="twitter:title"]','name','twitter:title',t)
    setMeta('meta[name="twitter:description"]','name','twitter:description',d)
    let c=document.head.querySelector('link[rel="canonical"]');if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c)};c.href=url
  },[pathname])
  return null
}
