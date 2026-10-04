import { Mail, Phone, MapPin, Clock, Check } from "lucide-react";
import { Btn, Reveal } from "../components/ui.jsx";
import { W, PageHero, Section, SectionHead, PhotoCards, Faq, Form } from "../components/blocks.jsx";

const cards = [
  [Mail, "Email", "hello@exceliaorigins.com", "Best for detailed requirements"],
  [Phone, "Phone", "+91 00000 00000", "For quick questions"],
  [MapPin, "Based in", "Odisha, India", "Supplying across India"],
  [Clock, "Response", "We reply to every enquiry", "Share details for a complete reply"],
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk cashews."
        text="Write to us for retail, gifting or bulk requirements. Tell us what you need and we will respond with the details."
        image="/images/odisha-story-bg.webp"
        pos="70% 50%"
      />

      <section className="relative z-10 bg-ivory">
        <div className={`${W} -mt-10 grid gap-5 pb-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {cards.map(([I, t, v, n], i) => (
            <Reveal key={t} delay={i * 0.07} className="h-full">
              <div className="h-full rounded-xl bg-cream p-6 shadow-[0_6px_26px_rgba(70,55,20,0.12)]">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold text-gold"><I size={22} strokeWidth={1.3} /></span>
                <p className="mt-4 text-xs uppercase tracking-[.18em] text-gold">{t}</p>
                <p className="mt-1 break-words font-serif text-xl text-forest">{v}</p>
                <p className="mt-1 text-xs text-ink/65">{n}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Section tone="ivory">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHead eyebrow="Send an enquiry" title="How can we help?" text="The more detail you share, the more useful our reply will be." />
            <p className="mb-3 text-xs uppercase tracking-[.18em] text-gold">Helpful to include</p>
            <ul className="space-y-3 text-sm">
              {["The grade you are interested in — W320, W240, W180 or processing grade", "Pack size: 250 g, 500 g, 1 kg or bulk", "Approximate quantity", "Your city or delivery location", "Whether it is for home, gifting, retail or a business"].map((t) => (
                <li key={t} className="flex items-start gap-3"><Check size={16} className="mt-0.5 shrink-0 text-gold" />{t}</li>
              ))}
            </ul>
            <div className="relative mt-8 hidden overflow-hidden rounded-2xl bg-gradient-to-br from-cream to-[#eadfc4] p-6 lg:block">
              <img src="/images/excelia-cashew-packet.webp" alt="Excelia Origins premium cashew pouch" loading="lazy" className="mx-auto w-[75%] drop-shadow-[0_18px_20px_rgba(20,45,30,0.2)]" />
            </div>
          </Reveal>
          <Form cta="Submit Enquiry" />
        </div>
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="Looking for something specific?" title="Jump to what you need" />
        <PhotoCards cols="lg:grid-cols-3" items={[
          ["/images/w240-cashews.webp", "Retail & Gifting", "Premium W320, W240 and W180 in 250 g, 500 g and 1 kg pouches.", "/our-products", "Explore Cashews"],
          ["/images/sweet-processing-cashews.webp", "Bulk & Processing", "Cartons and processing grades for businesses and manufacturers.", "/bulk-b2b", "Bulk & B2B"],
          ["/images/w180-cashews.webp", "Our Quality", "See how we source, grade, check and pack every batch.", "/quality", "View Quality"],
        ]} />
      </Section>

      <section className="relative overflow-hidden bg-deep text-ivory">
        <img src="/images/odisha-story-bg.webp" alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/80 to-transparent" />
        <div className={`${W} relative py-16 lg:py-24`}>
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-lgold">Where we are</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Based in Odisha. Delivering across India.</h2>
            <p className="mt-4 font-serif text-lg text-ivory/80">Our roots are in one of India’s cashew-growing regions, and our pouches travel to homes, shops and kitchens in every part of the country.</p>
            <Btn to="/our-story" variant="outline" className="mt-6">Read Our Story</Btn>
          </Reveal>
        </div>
      </section>

      <Section tone="ivory">
        <SectionHead center eyebrow="FAQ" title="Before you write" />
        <Faq items={[
          ["How quickly will I hear back?", "We aim to respond to every enquiry promptly. Including the grade, pack size and your city helps us reply with complete details."],
          ["Can I order a single 250 g pouch?", "Share your requirement through the form and we will confirm how to place a retail order."],
          ["Do you deliver to my city?", "We supply across India. Mention your city in your message and we will confirm."],
          ["I run a business — who should I contact?", "Use the form above and choose a business option, or visit the Bulk & B2B page for details."],
          ["Can I visit or collect in person?", "Write to us and we will let you know what is possible."],
        ]} />
      </Section>
    </>
  );
}
