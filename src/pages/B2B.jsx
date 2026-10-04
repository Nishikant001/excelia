import { Building2, Settings, Tag, Truck, Handshake, ClipboardList, PackageCheck, Store, ChefHat, Gift } from "lucide-react";
import { Btn, Reveal } from "../components/ui.jsx";
import {
  W, PageHero, Section, SectionHead, Split, Checks, StatStrip, PhotoCards,
  DataTable, NumberedSteps, IconCards, Faq, Form, CtaBand,
} from "../components/blocks.jsx";

export default function B2B() {
  return (
    <>
      <PageHero
        eyebrow="Bulk & B2B"
        title="Supply built for business."
        text="Reliable cashew supply for retailers, distributors, sweet manufacturers, hotels, caterers and institutional buyers."
        image="/images/sweet-processing-cashews.webp"
        fit="contain"
        actions={<><Btn to="/contact" variant="solid">Request B2B Price</Btn><Btn to="/our-products" variant="outline">View Grades</Btn></>}
      />

      <StatStrip items={[["Multiple", "Grades"], ["Bulk", "Cartons & quantities"], ["Pan India", "Dispatch"], ["Business", "Pricing on request"]]} />

      <Section tone="ivory">
        <SectionHead eyebrow="Who we supply" title="Built around how you buy" text="Different businesses need different things from a cashew supplier. We keep the options clear." />
        <PhotoCards items={[
          ["/images/w240-cashews.webp", "Retailers & Distributors", "W320, W240 and W180 in 250 g, 500 g and 1 kg pouches, or in cartons for repacking."],
          ["/images/sweet-processing-cashews.webp", "Sweet Manufacturers", "Processing grade splits and pieces for mithai, barfi, kaju-based sweets and more."],
          ["/images/w320-cashews-clean.webp", "Hotels, Caterers & Institutions", "Consistent quantities with scheduled supply for kitchens that cannot run short."],
          ["/images/w180-cashews.webp", "Gifting & Corporate", "Celebration-grade W180 and W240 for hampers, festive gifting and corporate orders."],
        ]} />
      </Section>

      <Section tone="cream">
        <div className="space-y-16 lg:space-y-24">
          <Split image="/images/excelia-cashew-packet.webp" alt="Excelia Origins retail pouch" eyebrow="For retailers" title="Retail-ready from the first day" contain>
            <p>Our dark-green premium pouch is built to stand out on a shelf and to be trusted at first glance. Grade and weight are clearly labelled, and each pouch is sealed for freshness.</p>
            <p>Stock one grade or the full range — and add more as your customers ask for it.</p>
            <Checks items={["250 g, 500 g, 1 kg pouches", "Clear grade labelling", "Repeat supply for steady shelves", "Pan-India dispatch"]} />
          </Split>

          <Split image="/images/sweet-processing-cashews.webp" alt="Sweet and processing grade cashew pieces" eyebrow="For food businesses" title="Processing grade, consistently sorted" reverse contain>
            <p>When cashews are ground into a paste, folded into a sweet or baked into a product, what matters is consistency from batch to batch. Our sweet and processing grade is sorted for exactly that.</p>
            <p>Share your use — barfi, kaju katli, bakery, ice cream or sauces — and we will tell you what we can supply.</p>
            <Checks items={["Splits & pieces", "Bulk cartons", "Regular supply possible", "Business pricing"]} />
          </Split>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHead eyebrow="At a glance" title="What we offer to business buyers" />
        <DataTable
          head={["Product", "Form", "Supply format", "Typical use"]}
          rows={[
            ["W320", "Whole kernels", "Retail pouches · Cartons", "Everyday retail, catering"],
            ["W240", "Whole kernels", "Retail pouches · Cartons", "Premium retail, gifting"],
            ["W180", "Whole kernels", "Retail pouches · Cartons", "Celebration & festive gifting"],
            ["Sweet & Processing", "Splits & pieces", "Bulk cartons", "Mithai, bakery, food production"],
          ]}
        />
        <p className="mt-4 text-xs text-ink/60">Pricing, quantities and packing are confirmed on enquiry.</p>
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="How it works" title="From enquiry to delivery" text="A simple, transparent process — no guesswork." />
        <NumberedSteps items={[
          ["Share your requirement", "Tell us your grade, pack size, approximate quantity and delivery city."],
          ["Receive our response", "We reply with availability, packing options and business pricing details."],
          ["Confirm your order", "Finalise grades and quantities, and agree the supply schedule that suits you."],
          ["Dispatch across India", "Your order is packed carefully and dispatched to your location."],
        ]} />
      </Section>

      <section className="relative overflow-hidden bg-forest text-ivory">
        <img src="/images/cashews-bowl-hero.webp" alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className={`${W} relative py-16 lg:py-20`}>
          <SectionHead light eyebrow="Why partner with us" title="A supplier that makes buying easy" />
          <IconCards light cols="lg:grid-cols-4" items={[
            [Settings, "Multiple grades", "Whole-kernel grades and a processing grade under one roof."],
            [ClipboardList, "Clear specifications", "Grade and pack details stated plainly before you order."],
            [PackageCheck, "Careful packing", "Small-batch, hygienic packing in pouches and cartons."],
            [Truck, "Pan-India supply", "Dispatch from Odisha to customers across the country."],
          ]} />
        </div>
      </section>

      <Section tone="ivory">
        <SectionHead center eyebrow="FAQ" title="Bulk buying questions" />
        <Faq items={[
          ["Is there a minimum order quantity?", "Minimums depend on grade and packing. Share your requirement and we will confirm what is possible."],
          ["Can I get business pricing?", "Yes. Business pricing is provided on enquiry based on grade, packing and quantity."],
          ["Do you supply on a regular schedule?", "Yes — hotels, caterers and manufacturers can discuss scheduled supply."],
          ["Can you pack under my own brand?", "Write to us with your requirement and we will let you know what options are available."],
          ["Which cities do you deliver to?", "We dispatch across India. Mention your city in the enquiry form."],
        ]} />
      </Section>

      <section className="bg-gradient-to-b from-cream to-[#efe6cf]">
        <div className={`${W} grid gap-10 py-16 lg:grid-cols-[1fr_1.35fr] lg:py-20`}>
          <Reveal>
            <SectionHead eyebrow="B2B enquiry" title="Request business pricing" text="Tell us what you need. We will respond with grades, packing and pricing details." />
            <ul className="space-y-3 text-sm">
              {[[Store, "Retailers & distributors"], [ChefHat, "Hotels & caterers"], [Handshake, "Sweet manufacturers"], [Gift, "Gifting & corporate"], [Building2, "Institutions"], [Tag, "Business pricing"]].map(([I, t]) => (
                <li key={t} className="flex items-center gap-3"><I size={20} strokeWidth={1.3} className="text-gold" />{t}</li>
              ))}
            </ul>
            <img src="/images/bowl-crop.jpg" alt="Cashews in a wooden bowl" loading="lazy" className="mt-8 hidden h-44 w-full rounded-xl object-cover lg:block" />
          </Reveal>
          <Form cta="Send B2B Enquiry" options={["Retail packs for resale", "Bulk W320 / W240 / W180", "Processing grade", "Gifting / corporate", "Other"]} />
        </div>
      </section>

      <CtaBand
        title="Let’s plan your cashew supply."
        text="One conversation is often all it takes to set up a steady, dependable supply."
        image="/images/odisha-story-bg.webp"
        primary={["Contact Us", "/contact"]}
        secondary={["Our Products", "/our-products"]}
      />
    </>
  );
}
