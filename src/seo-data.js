export const SITE = 'https://www.exceliaorigins.com'
export const OG_IMAGE = SITE + '/images/og-image.jpg'
export const BRAND = 'Excelia Origins'

export const PAGES = {
  '/': {
    title: 'Excelia Origins | Premium Cashews from Odisha, India',
    desc: 'Buy premium W320, W240 and W180 cashews sourced from Odisha, freshly packed and supplied across India. Retail packs and bulk B2B supply.',
    name: 'Home',
  },
  '/our-products': {
    title: 'Cashew Grades W320, W240, W180 & Packs | Excelia Origins',
    desc: 'Explore W320, W240, W180 and sweet processing cashew grades in 250 g, 500 g and 1 kg packs and bulk cartons. Send an enquiry today.',
    name: 'Our Products',
  },
  '/our-story': {
    title: 'Our Story | Odisha Cashews for India | Excelia Origins',
    desc: 'How Excelia Origins sources grade-conscious cashews from Odisha and brings them to homes, retailers and food businesses across India.',
    name: 'Our Story',
  },
  '/quality': {
    title: 'Quality | Sourcing, Grading & Hygienic Packing | Excelia Origins',
    desc: 'From careful sourcing to grading, inspection and hygienic packing, see how Excelia Origins keeps cashew quality consistent.',
    name: 'Quality',
  },
  '/bulk-b2b': {
    title: 'Bulk Cashew Supply for B2B Buyers | Excelia Origins',
    desc: 'Bulk cashews for retailers, distributors, sweet makers, hotels and caterers. Multiple grades, pan-India supply. Send a B2B enquiry.',
    name: 'Bulk & B2B',
  },
  '/contact': {
    title: 'Contact Excelia Origins | Cashew Enquiries',
    desc: 'Contact Excelia Origins for retail, gifting or bulk cashew requirements. Send your enquiry and we will respond shortly.',
    name: 'Contact',
  },
}
export const NOT_FOUND = {
  title: 'Page not found | Excelia Origins',
  desc: 'This page could not be found.',
  name: 'Not found',
}

const ORG_ID = SITE + '/#org'
const org = {
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: 'Excelia Origins Private Limited',
  alternateName: BRAND,
  url: SITE + '/',
  logo: SITE + '/images/e1.png',
  image: OG_IMAGE,
  description: 'Premium cashews sourced from Odisha, India, for retail and bulk buyers.',
  email: 'hello@exceliaorigins.com',
  address: { '@type': 'PostalAddress', addressRegion: 'Odisha', addressCountry: 'IN' },
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'hello@exceliaorigins.com', areaServed: 'IN', availableLanguage: ['English', 'Hindi'] },
}
const website = { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/', name: BRAND, publisher: { '@id': ORG_ID }, inLanguage: 'en-IN' }

const product = (name, grade, img, desc) => ({
  '@type': 'Product', name, description: desc, brand: { '@type': 'Brand', name: BRAND },
  image: SITE + img, category: 'Cashew nuts', sku: grade,
  additionalProperty: [{ '@type': 'PropertyValue', name: 'Grade', value: grade }],
})

export function schemaFor(pathname) {
  const p = PAGES[pathname]
  const g = [org, website]
  if (!p) return { '@context': 'https://schema.org', '@graph': g }
  const url = SITE + (pathname === '/' ? '/' : pathname)
  g.push({ '@type': pathname === '/contact' ? 'ContactPage' : pathname === '/our-story' ? 'AboutPage' : 'WebPage', '@id': url + '#webpage', url, name: p.title, description: p.desc, isPartOf: { '@id': SITE + '/#website' }, about: { '@id': ORG_ID }, inLanguage: 'en-IN', primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE } })
  if (pathname !== '/') g.push({ '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
    { '@type': 'ListItem', position: 2, name: p.name, item: url }] })
  if (pathname === '/our-products') g.push(
    product('W320 Cashews', 'W320', '/images/w320-cashews.webp', 'Everyday premium cashews with balanced size and mild sweetness. Packs of 250 g, 500 g and 1 kg.'),
    product('W240 Cashews', 'W240', '/images/w240-cashews.webp', 'Large premium cashews with a rich, creamy bite. Packs of 250 g, 500 g and 1 kg.'),
    product('W180 Cashews', 'W180', '/images/w180-cashews.webp', 'Extra large celebration-grade cashews for gifting and festive use. Packs of 250 g, 500 g and 1 kg.'),
    product('Sweet & Processing Cashews', 'Processing', '/images/sweet-processing-cashews.webp', 'Broken and split cashew grades for mithai makers and food businesses.'))
  return { '@context': 'https://schema.org', '@graph': g }
}
