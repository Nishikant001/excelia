import {Link} from 'react-router-dom'
export default function NotFound(){
  return <section className="mx-auto max-w-[1280px] px-5 lg:px-8 py-24 text-center">
    <h1 className="font-serif text-5xl text-forest">Page not found</h1>
    <p className="mt-4">The page you are looking for does not exist.</p>
    <p className="mt-6"><Link to="/" className="underline">Back to Excelia Origins home</Link> · <Link to="/our-products" className="underline">Our products</Link></p>
  </section>
}
