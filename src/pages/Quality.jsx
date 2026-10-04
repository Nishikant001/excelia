import { Sprout, Settings, Search, Box, ShieldCheck, Truck, Ruler, Palette, Wind, Droplets, Filter, Eye } from "lucide-react";
import { Btn, Reveal } from "../components/ui.jsx";
import {
  W, PageHero, Section, SectionHead, Split, Checks, StatStrip, IconCards,
  PhotoCards, Faq, CtaBand,
} from "../components/blocks.jsx";

export default function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Careful at every stage."
        text="From the first sorting table to the final seal, quality is checked — not assumed."
        image="/images/bowl-crop.jpg"
        pos="40% 60%"
        actions={<><Btn to="/our-products">See Our Grades</Btn><Btn to="/contact" variant="outline">Ask a Question</Btn></>}
      />

      <StatStrip items={[["6", "Stages of care"], ["3", "Whole-kernel grades"], ["Every batch", "Checked before dispatch"], ["Small-batch", "Hygienic packing"]]} />

      <Section tone="ivory">
        <SectionHead eyebrow="The process" title="Six stages between the orchard and your hands" text="Quality is not a single inspection at the end. It is a habit that runs through every step." />
        <IconCards items={[
          [Sprout, "Careful sourcing", "We choose trusted sources and select lots for size, colour and freshness before they ever reach our grading tables."],
          [Settings, "Grade selection", "Kernels are sorted by size into W320, W240 and W180. Splits and pieces are set aside as the processing grade."],
          [Search, "Quality inspection", "Visual and sensory checks happen at several points, so problems are caught early rather than late."],
          [Box, "Hygienic packing", "Small-batch, controlled packing in sealed pouches and cartons to protect freshness."],
          [ShieldCheck, "Quality assurance", "A final look at consistency before anything is dispatched — the standard stays the same from lot to lot."],
          [Truck, "Careful delivery", "Secure packaging and dependable dispatch across India, so the pouch you open is the pouch we sealed."],
        ]} />
      </Section>

      <Section tone="cream">
        <div className="space-y-16 lg:space-y-24">
          <Split image="/images/odisha-story-bg.webp" alt="Cashew-growing region of Odisha" eyebrow="Stage 1 · Sourcing" title="It starts with choosing well">
            <p>Great cashews cannot be created at the packing table — they can only be preserved there. That is why we put so much weight on sourcing: trusted sources, grade-conscious lots and an eye for freshness.</p>
            <p>We would rather turn down a lot that is not right than pass the problem on to a customer.</p>
            <Checks items={["Grade-conscious selection", "Freshness checked on arrival", "Trusted regional sources", "Clear lot records"]} />
          </Split>

          <Split image="/images/w240-cashews.webp" alt="Graded W240 cashew kernels" eyebrow="Stage 2 · Grading" title="Sorted by size, judged by eye" reverse contain>
            <p>Size consistency is what makes a pouch look and cook well. Kernels are graded so that a W240 pouch is a W240 pouch — uniform, plump and clean-looking.</p>
            <p>Anything outside the grade is set aside rather than quietly mixed in. Broken kernels have a home too: they become our sweet and processing grade.</p>
            <Checks items={["Uniform size within each grade", "Whole kernels for W320 / W240 / W180", "Splits & pieces kept separate", "Colour sorted for a clean ivory look"]} />
          </Split>

          <Split image="/images/excelia-cashew-packet.webp" alt="Sealed Excelia Origins cashew pouch" eyebrow="Stage 3 · Packing" title="Sealed to stay fresh" contain>
            <p>Cashews are rich in natural oils and prefer to be kept dry and away from air. Our small-batch packing is designed around that: controlled handling, hygienic surfaces and a tight seal.</p>
            <p>The result is a pouch that opens the way you would want it to — crisp, clean and ready to enjoy.</p>
            <Checks items={["Small-batch packing", "Sealed pouches", "Clear grade & weight labelling", "Cartons for bulk supply"]} />
          </Split>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHead center eyebrow="What we look at" title="The details behind a good cashew" />
        <IconCards cols="lg:grid-cols-3" items={[
          [Ruler, "Size uniformity", "Kernels within a grade should look and feel the same size."],
          [Palette, "Colour", "A clean, even ivory tone — we set aside kernels that are discoloured."],
          [Wind, "Aroma & freshness", "A fresh, mild, naturally sweet aroma. Off-notes mean the lot does not go forward."],
          [Droplets, "Dryness", "Properly dry kernels keep their crunch and last longer on the shelf."],
          [Filter, "Foreign matter", "Shell bits and other matter are removed during sorting and rechecked at packing."],
          [Eye, "Visual finish", "Whole, plump and attractive — the way a premium cashew should look in a bowl."],
        ]} />
      </Section>

      <Section tone="cream">
        <SectionHead center eyebrow="Graded, not guessed" title="See the difference between our grades" />
        <PhotoCards cols="lg:grid-cols-3" items={[
          ["/images/w320-cashews-clean.webp", "W320 · Everyday", "Balanced size and mild sweetness for daily use.", "/our-products", "View W320"],
          ["/images/w240-cashews.webp", "W240 · Large", "Plump kernels with a richer, creamier bite.", "/our-products", "View W240"],
          ["/images/w180-cashews.webp", "W180 · Extra Large", "Our largest whole kernels for celebrations.", "/our-products", "View W180"],
        ]} />
      </Section>

      <section className="relative overflow-hidden bg-forest text-ivory">
        <img src="/images/cashews-bowl-hero.webp" alt="" aria-hidden loading="lazy" className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-30 lg:block" />
        <div className={`${W} relative py-16 lg:py-24`}>
          <Reveal className="max-w-xl">
            <SectionHead light eyebrow="Our promise" title="What you can expect from every pouch" />
            <ul className="space-y-4 font-serif text-xl">
              {[
                "Grades that mean what they say.",
                "Clean, uniform, fresh-tasting kernels.",
                "Clear labelling of grade and weight.",
                "A team that answers questions honestly.",
              ].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lgold" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Section tone="ivory">
        <SectionHead center eyebrow="FAQ" title="About our quality" />
        <Faq items={[
          ["How do you keep the grades consistent?", "By sorting kernels by size and checking colour and finish before packing. Anything outside the grade is set aside."],
          ["How should I store the cashews at home?", "Reseal the pouch after each use and keep it in a cool, dry place away from sunlight. In hot, humid weather an airtight container in the refrigerator helps."],
          ["Can I see samples before a bulk order?", "For business buyers we can discuss sample options. Send us your requirement and we will respond with details."],
          ["Do you offer different packing for bulk?", "Yes. Commercial buyers can discuss carton packing and quantities for their needs."],
          ["What if something is not right with my order?", "Write to us with your order details and we will look into it promptly."],
        ]} />
      </Section>

      <CtaBand
        title="Quality you can taste — and ask about."
        text="Have a question about grades, packing or storage? We are happy to help."
        image="/images/bowl-crop.jpg"
        primary={["Contact Us", "/contact"]}
        secondary={["Bulk & B2B", "/bulk-b2b"]}
      />
    </>
  );
}
