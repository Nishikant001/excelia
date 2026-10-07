import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {SITE,OG_IMAGE,PAGES,NOT_FOUND,schemaFor} from '../seo-data.js'
export {SITE}
function setMeta(attr,key,val){let el=document.head.querySelector(`meta[${attr}="${key}"]`);if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.appendChild(el)}el.setAttribute('content',val)}
export default function Seo(){
  const {pathname:raw}=useLocation()
  const pathname=raw.length>1?raw.replace(/\/+$/,''):raw
  const known=!!PAGES[pathname]
  const {title:t,desc:d}=PAGES[pathname]||NOT_FOUND
  const url=SITE+(pathname==='/'?'/':pathname)
  useEffect(()=>{
    document.title=t
    setMeta('name','description',d);setMeta('name','robots',known?'index,follow,max-image-preview:large':'noindex,follow')
    setMeta('property','og:title',t);setMeta('property','og:description',d);setMeta('property','og:url',url);setMeta('property','og:image',OG_IMAGE)
    setMeta('name','twitter:title',t);setMeta('name','twitter:description',d);setMeta('name','twitter:image',OG_IMAGE)
    let c=document.head.querySelector('link[rel="canonical"]');if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c)};c.href=known?url:SITE+'/'
  },[t,d,url,known])
  return null
}
