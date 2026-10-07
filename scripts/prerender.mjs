import fs from 'node:fs'
import path from 'node:path'
import {pathToFileURL} from 'node:url'
const root=process.cwd(),dist=path.join(root,'dist')
const {render}=await import(pathToFileURL(path.join(root,'dist-server/entry-server.js')).href)
const {PAGES,NOT_FOUND,SITE,OG_IMAGE,schemaFor}=await import(pathToFileURL(path.join(root,'src/seo-data.js')).href)
const tpl=fs.readFileSync(path.join(dist,'index.html'),'utf8')
const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')
function head(route,meta,known){
  const url=SITE+(route==='/'?'/':route),t=esc(meta.title),d=esc(meta.desc)
  return [`<title>${t}</title>`,`<meta name="description" content="${d}"/>`,
   `<meta name="robots" content="${known?'index,follow,max-image-preview:large':'noindex,follow'}"/>`,
   `<link rel="canonical" href="${known?url:SITE+'/'}"/>`,
   `<meta property="og:type" content="website"/><meta property="og:site_name" content="Excelia Origins"/><meta property="og:locale" content="en_IN"/>`,
   `<meta property="og:title" content="${t}"/><meta property="og:description" content="${d}"/><meta property="og:url" content="${url}"/>`,
   `<meta property="og:image" content="${OG_IMAGE}"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/><meta property="og:image:alt" content="Excelia Origins premium cashews from Odisha"/>`,
   `<meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${t}"/><meta name="twitter:description" content="${d}"/><meta name="twitter:image" content="${OG_IMAGE}"/>`,
   known?`<script type="application/ld+json">${JSON.stringify(schemaFor(route))}</script>`:''].join('\n')
}
function build(route,meta,known){
  // strip the static head tags from template, replace with page-specific ones
  let h=tpl.replace(/<title>[\s\S]*?<\/title>/,'')
   .replace(/<meta name="description"[^>]*>/,'').replace(/<meta name="robots"[^>]*>/,'').replace(/<link rel="canonical"[^>]*>/,'')
   .replace(/<meta property="og:[^>]*>/g,'').replace(/<meta name="twitter:[^>]*>/g,'')
   .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,'')
  h=h.replace('</head>',head(route,meta,known)+'\n</head>')
  const html=render(route)
  return h.replace('<div id="root"></div>',`<div id="root">${html}</div>`)
}
const routes=Object.keys(PAGES)
for(const r of routes){
  const out=r==='/'?path.join(dist,'index.html'):path.join(dist,r.slice(1),'index.html')
  fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,build(r,PAGES[r],true))
}
fs.writeFileSync(path.join(dist,'404.html'),build('/404-not-found',NOT_FOUND,false))
const today=new Date().toISOString().slice(0,10)
const pri={'/':'1.0','/our-products':'0.9','/bulk-b2b':'0.9'}
fs.writeFileSync(path.join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r=>`<url><loc>${SITE}${r==='/'?'/':r}</loc><lastmod>${today}</lastmod><changefreq>${r==='/'?'weekly':'monthly'}</changefreq><priority>${pri[r]||'0.7'}</priority></url>`).join('\n')}\n</urlset>\n`)
fs.rmSync(path.join(root,'dist-server'),{recursive:true,force:true})
console.log('Prerendered:',routes.join(', '),'+ 404.html + sitemap.xml')
