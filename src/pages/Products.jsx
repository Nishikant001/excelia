import { Package, Gift, Home as HomeI, Droplets, Sun, Thermometer, Box, Heart } from "lucide-react";
import { Btn, Reveal } from "../components/ui.jsx";
import {
  W, PageHero, Section, SectionHead, Split, Checks, StatStrip, DataTable,
  IconCards, Faq, CtaBand,
} from "../components/blocks.jsx";

const grades = [
  {
    img: "/images/w320-cashews-clean.webp",
    eyebrow: "Grade W320 · Everyday Premium",
    title: "W320 Cashews",
    body: [
      "W320 is our everyday premium grade — a balanced, medium-sized whole kernel with a clean ivory colour and a naturally mild sweetness. It is the grade most families reach for again and again.",
      "Because W320 is graded to a uniform size, it roasts evenly, blends well into curries and gravies, and works just as comfortably in a snack bowl as in a festive recipe.",
    ],
    checks: ["Everyday snacking & cooking", "Roasting and tempering", "Packs: 250 g, 500 g, 1 kg", "Great value per kernel"],
    to: "/our-products",
  },
  {
    img: "/images/w240-cashews.webp",
    eyebrow: "Grade W240 · Large & Premium",
    title: "W240 Cashews",
    body: [
      "W240 steps up in size. These large, plump kernels give a richer, creamier bite and look beautiful in a bowl, which makes the grade a favourite for guests and gifting.",
      "Retailers like W240 because the size difference is visible on the shelf — customers can see the quality before they open the pack.",
    ],
    checks: ["Gifting & hosting", "Premium retail shelves", "Packs: 250 g, 500 g, 1 kg", "Rich, creamy bite"],
    to: "/our-products",
    reverse: true,
  },
  {
    img: "/images/w180-cashews.webp",
    eyebrow: "Grade W180 · Extra Large / Celebration",
    title: "W180 Cashews",
    body: [
      "W180 is our celebration grade — extra-large whole kernels selected for size and appearance. When the cashew itself is the star of the table, this is the one.",
      "Festive hampers, wedding gifting and special occasions all call for kernels that look as good as they taste, and W180 is graded with exactly that in mind.",
    ],
    checks: ["Festive hampers & weddings", "Premium gifting", "Packs: 250 g, 500 g, 1 kg", "Largest whole kernels we offer"],
    to: "/our-products",
  },
  {
    img: "/images/sweet-processing-cashews.webp",
    eyebrow: "Processing Grade · Bulk Only",
    title: "Sweet & Processing Grade",
    body: [
      "Not every recipe needs a perfect whole kernel. Our sweet and processing grade — splits and pieces — is made for mithai manufacturers, bakeries and food businesses that grind, chop or cook the cashew into the final product.",
      "Supplied in bulk quantities with the same careful sorting, so your production gets a consistent input from batch to batch.",
    ],
    checks: ["Mithai, barfi & kaju katli bases", "Bakery, ice cream & sauces", "Bulk cartons", "Business pricing on request"],
    to: "/bulk-b2b",
    cta: "Bulk Enquiry",
    reverse: true,
  },
];

const packs = [
  [Gift, "250 g Pouch", "Our signature premium pouch. Ideal for gifting, trying a new grade or keeping a fresh supply at home.", "Gifting · Trial · Small families"],
  [HomeI, "500 g Pouch", "The family-size choice. Enough for a couple of weeks of snacking and cooking, in a resealable pouch.", "Households · Retail shelves"],
  [Package, "1 kg Pouch", "Best value for regular use. Popular with large families, small cafés and neighbourhood stores.", "Regular use · Small business"],
];

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Cashews, graded with care."
        text="A closer look at every grade and pack we offer — from everyday W320 to celebration-size W180 and bulk processing grades."
        image="/images/cashews-bowl-hero.webp"
        pos="55% 55%"
        actions={<><Btn to="/contact">Send Enquiry</Btn><Btn to="/bulk-b2b" variant="outline">Bulk Enquiry</Btn></>}
      />

      <StatStrip items={[["3", "Retail grades"], ["3", "Pack sizes"], ["Bulk", "Cartons available"], ["Pan India", "Supply"]]} />

      <Section tone="ivory">
        <SectionHead
          eyebrow="Our Grades"
          title="Find the grade that fits your need"
          text="Cashew grades are named by size — the number tells you roughly how many whole kernels make up a pound. A smaller number means a larger kernel."
        />
        <div className="space-y-16 lg:space-y-24">
          {grades.map((g) => (
            <Split key={g.title} image={g.img} alt={g.title} eyebrow={g.eyebrow} title={g.title} reverse={g.reverse} contain>
              {g.body.map((p) => <p key={p}>{p}</p>)}
              <Checks items={g.checks} />
              <div className="pt-2"><Btn to={g.to}>{g.cta || "Send Enquiry"}</Btn></div>
            </Split>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <SectionHead eyebrow="Compare" title="Grades at a glance" text="A quick side-by-side to help you shortlist." />
        <DataTable
          head={["Grade", "Kernel size", "Character", "Best for", "Packs"]}
          rows={[
            ["W320", "Medium, whole", "Mild & balanced", "Everyday snacking, cooking", "250 g · 500 g · 1 kg"],
            ["W240", "Large, whole", "Rich & creamy", "Gifting, premium retail", "250 g · 500 g · 1 kg"],
            ["W180", "Extra large, whole", "Full-bodied", "Celebrations, hampers", "250 g · 500 g · 1 kg"],
            ["Sweet & Processing", "Splits & pieces", "Consistent for processing", "Mithai, bakery, food business", "Bulk cartons"],
          ]}
        />
        <p className="mt-4 text-xs text-ink/60">Exact counts and availability are confirmed on enquiry for each lot.</p>
      </Section>

      <Section tone="ivory">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="relative">
            <div className="absolute inset-x-6 bottom-2 top-10 rounded-3xl bg-gradient-to-br from-[#efe5cc] to-cream" />
            <img src="/images/excelia-cashew-packet.webp" alt="Excelia Origins 250 g premium cashew pouch" loading="lazy" className="relative mx-auto w-full max-w-[460px] drop-shadow-[0_22px_24px_rgba(20,45,30,0.22)]" />
          </Reveal>
          <div>
            <SectionHead eyebrow="Premium Packaging" title="Three pouches. One standard of care." text="Every pouch is packed in small batches, sealed to protect freshness and finished with a label that does the grade justice." />
            <div className="space-y-4">
              {packs.map(([I, t, d, m], i) => (
                <Reveal key={t} delay={i * 0.07}>
                  <div className="flex gap-4 rounded-xl bg-cream p-5 shadow-[0_2px_16px_rgba(70,55,20,0.07)]">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold text-gold"><I size={24} strokeWidth={1.2} /></span>
                    <div>
                      <h3 className="text-2xl text-forest">{t}</h3>
                      <p className="mt-1 text-sm leading-relaxed">{d}</p>
                      <p className="mt-2 text-xs text-gold">{m}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Btn to="/contact" className="mt-6">Shop 250 g Pack</Btn>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden">
        <img src="/images/odisha-story-bg.webp" alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-forest/85" />
        <div className={`${W} relative py-16 lg:py-20`}>
          <SectionHead light eyebrow="How to choose" title="Which cashew is right for you?" />
          <IconCards light items={[
            [HomeI, "For everyday use", "Pick W320. It balances size, taste and price, and suits daily snacking as well as cooking."],
            [Gift, "For gifting & guests", "Pick W240. Large, creamy kernels that look generous in a bowl or a gift box."],
            [Heart, "For celebrations", "Pick W180. Our largest whole kernels, ready for festive hampers and weddings."],
          ]} />
        </div>
      </section>

      <Section tone="cream">
        <Split image="/images/bowl-crop.jpg" alt="Cashews in a wooden bowl" eyebrow="Keep them fresh" title="Simple storage, better taste" reverse>
          <p>Cashews are naturally rich in oils, so they enjoy the same care as any fine ingredient. A few habits keep every pouch tasting the way it should.</p>
          <ul className="space-y-3 font-sans text-sm">
            {[
              [Droplets, "Reseal after every use and keep the pouch away from moisture."],
              [Sun, "Store in a cool, dry place out of direct sunlight."],
              [Thermometer, "For longer storage in warm weather, keep in an airtight container in the refrigerator."],
              [Box, "Scoop with a dry spoon rather than a damp hand."],
            ].map(([I, t]) => (
              <li key={t} className="flex items-start gap-3"><I size={20} strokeWidth={1.3} className="mt-0.5 shrink-0 text-gold" />{t}</li>
            ))}
          </ul>
        </Split>
      </Section>

      <Section tone="ivory">
        <SectionHead center eyebrow="FAQ" title="Questions we hear often" />
        <Faq items={[
          ["What does W320 / W240 / W180 mean?", "The number is the grade — it indicates the approximate count of whole kernels per pound. W180 therefore has the biggest kernels, W320 the smallest of our three retail grades."],
          ["Which pack sizes are available?", "Retail grades come in 250 g, 500 g and 1 kg pouches. Larger cartons are available for commercial buyers."],
          ["Can I order a mix of grades?", "Yes. Tell us the grades and quantities in your enquiry and we will confirm a combined order."],
          ["Do you supply outside Odisha?", "Yes — we dispatch across India. Share your city and we will confirm delivery details."],
          ["Is the sweet & processing grade sold in small packs?", "It is positioned for business use and is offered in bulk quantities. Write to us if you have a specific requirement."],
        ]} />
      </Section>

      <CtaBand
        title="Not sure which grade to pick?"
        text="Tell us how you plan to use the cashews and we will suggest the right grade and pack size."
        image="/images/bowl-crop.jpg"
        primary={["Send Enquiry", "/contact"]}
        secondary={["Bulk & B2B", "/bulk-b2b"]}
      />
    </>
  );
}
