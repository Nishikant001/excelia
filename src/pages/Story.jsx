import { Sprout, Settings, Box, Truck, HeartHandshake, Scale, Leaf as LeafI, Award, Users, Sparkles } from "lucide-react";
import { Btn, Reveal } from "../components/ui.jsx";
import {
  W, PageHero, Section, SectionHead, Split, StatStrip, NumberedSteps,
  IconCards, PhotoCards, CtaBand,
} from "../components/blocks.jsx";

export default function Story() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Rooted in Odisha. Made for India."
        text="Excelia Origins brings carefully selected cashews from one of India’s important cashew-growing regions to homes, retailers and food businesses across the country."
        image="/images/odisha-story-bg.webp"
        pos="20% 50%"
        actions={<><Btn to="/our-products">Explore Our Cashews</Btn><Btn to="/contact" variant="outline">Talk to Us</Btn></>}
      />

      <StatStrip items={[["Odisha", "Our origin"], ["Small-batch", "Controlled packing"], ["250 g → Bulk", "Retail to commercial"], ["Pan India", "Delivery"]]} />

      <Section tone="ivory">
        <Split
          image="/images/odisha-story-bg.webp"
          alt="Green cashew country in Odisha with a hill on the horizon"
          eyebrow="Where it begins"
          title="A landscape that grows great cashews"
        >
          <p>Cashew trees love warm weather, light soils and open skies — and Odisha offers all three. Across the state’s hills and coastal belts, cashew orchards have been part of the landscape and of family livelihoods for generations.</p>
          <p>Excelia Origins was started with a simple idea: the best cashew experience begins at the source. If the sourcing is careful and the grading is honest, everything after — the roasting, the cooking, the gifting — simply tastes better.</p>
          <p>We are an Odisha-based company, and we are proud to carry the region’s produce to kitchens far beyond it.</p>
        </Split>
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="From orchard to pouch" title="Our journey, in four careful steps" text="Every pouch and every carton follows the same path. Nothing is rushed, and nothing is skipped." />
        <NumberedSteps items={[
          ["Sourced with care", "We work with trusted sources in Odisha’s cashew belt and choose lots for size, colour and freshness — not just for volume."],
          ["Selected & graded", "Kernels are sorted by size into W320, W240 and W180, with splits and pieces set aside as a processing grade."],
          ["Checked at each stage", "Quality is looked at throughout, so that what reaches the packing table is what we are happy to put our name on."],
          ["Packed & delivered", "Small-batch, hygienic packing, then dispatch across India — to homes, shops, sweet makers and kitchens."],
        ]} />
      </Section>

      <section className="relative overflow-hidden bg-deep">
        <img src="/images/cashews-bowl-hero.webp" alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/90 to-deep/40" />
        <div className={`${W} relative py-20 lg:py-28`}>
          <Reveal className="max-w-2xl">
            <p className="font-serif text-4xl italic leading-tight text-ivory md:text-5xl">
              “Goodness from nature, handled with the respect it deserves.”
            </p>
            <p className="mt-5 text-xs uppercase tracking-[.2em] text-lgold">The Excelia Origins approach</p>
          </Reveal>
        </div>
      </section>

      <Section tone="ivory">
        <SectionHead eyebrow="What we believe" title="Values we work by" text="They are simple — which is exactly why we hold on to them." />
        <IconCards items={[
          [HeartHandshake, "Honesty", "We describe every grade as it is. What we say on the label is what is in the pouch."],
          [LeafI, "Care for the land", "Cashew country is a living landscape. We value the growers and the land that give us our produce."],
          [Scale, "Consistency", "A good cashew once is nice. A good cashew every time is what builds trust — so we grade and check to be consistent."],
          [Award, "Pride in craft", "From sorting tables to the seal on the pouch, small details are what separate premium from ordinary."],
          [Users, "Respect for buyers", "A family buying 250 g and a manufacturer buying a carton get the same courtesy and clarity."],
          [Sparkles, "Freshness first", "Controlled, small-batch packing helps keep the kernels tasting the way they should when you open them."],
        ]} />
      </Section>

      <Section tone="cream">
        <Split
          image="/images/excelia-cashew-packet.webp"
          alt="Excelia Origins premium cashew pouch"
          eyebrow="The pouch"
          title="Packed to be proud of"
          reverse
          contain
        >
          <p>Our dark-green pouch with the gold leaf mark is more than packaging. It is a promise: premium cashews, graded with care, sealed for freshness and ready to be shared.</p>
          <p>Whether it is a 250 g pouch for a gift, a 500 g pouch for the family or a 1 kg pouch for a busy kitchen, the standard stays the same.</p>
          <div className="pt-2"><Btn to="/our-products">See Our Packs</Btn></div>
        </Split>
      </Section>

      <Section tone="ivory">
        <SectionHead center eyebrow="What we bring" title="Four grades, one standard" />
        <PhotoCards items={[
          ["/images/w320-cashews-clean.webp", "W320", "Everyday premium. Balanced and mildly sweet.", "/our-products", "View Grade"],
          ["/images/w240-cashews.webp", "W240", "Large and premium with a creamy bite.", "/our-products", "View Grade"],
          ["/images/w180-cashews.webp", "W180", "Extra large celebration grade.", "/our-products", "View Grade"],
          ["/images/sweet-processing-cashews.webp", "Sweet & Processing", "Splits and pieces for food businesses.", "/bulk-b2b", "Bulk Enquiry"],
        ]} />
      </Section>

      <Section tone="forest">
        <SectionHead light eyebrow="Who we serve" title="From a family kitchen to a commercial one" />
        <IconCards light cols="lg:grid-cols-4" items={[
          [Sprout, "Homes", "Premium cashews for snacking, cooking and festivals."],
          [Box, "Retailers", "Retail-ready pouches in three sizes."],
          [Settings, "Food businesses", "Processing grades for mithai and bakery."],
          [Truck, "Institutions", "Hotels and caterers with scheduled bulk supply."],
        ]} />
      </Section>

      <CtaBand
        title="Let’s bring Odisha’s cashews to your table."
        text="Write to us about retail packs, gifting or bulk requirements. We would love to hear from you."
        image="/images/odisha-story-bg.webp"
        primary={["Send Enquiry", "/contact"]}
        secondary={["Our Products", "/our-products"]}
      />
    </>
  );
}
