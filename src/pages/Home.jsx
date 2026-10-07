import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  Leaf as LeafI,
  Gem,
  Package,
  Truck,
  Sprout,
  ShieldCheck,
  Users,
  Handshake,
  Building2,
  Settings,
  Tag,
  Search,
  Box,
  Heart,
  Gift,
  ArrowRight,
} from "lucide-react";
import {
  Reveal,
  Btn,
  Leaf,
  Eyebrow,
  Heading,
} from "../components/ui.jsx";

const W = "mx-auto max-w-[1280px] px-5 lg:px-8";

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
const heroFeatures = [
  [LeafI, "Carefully", "Sourced"],
  [Gem, "Premium", "Grades"],
  [Sprout, "Freshly", "Packed"],
  [Truck, "Pan India", "Supply"],
];

function Hero() {
  const fade =
    "linear-gradient(to right, transparent 0%, rgba(0,0,0,.55) 18%, #000 40%)";
  return (
    <section className="relative overflow-hidden bg-ivory">
      {/* Full-bleed photo that melts into the ivory background (desktop) */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[72%] lg:block"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
      >
        <img
          src="/images/cashews-bowl-hero.webp"
          alt="Premium cashews in a wooden bowl"
          width="1600" height="1067" fetchpriority="high" decoding="async"
          className="h-full w-full object-cover object-[50%_58%]"
        />
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute right-[5%] top-[15%] z-20 hidden -rotate-6 font-serif text-[22px] italic leading-tight text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)] lg:block"
      >
        Goodness
        <br />
        from Nature
        <span className="ml-3 mt-1 block h-px w-14 bg-white" />
      </motion.p>

      <div className={`${W} relative z-10`}>
        <div className="max-w-[560px] py-12 lg:flex lg:h-[420px] lg:flex-col lg:justify-center lg:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-5xl font-semibold leading-[1.02] text-forest sm:text-6xl lg:text-[60px]"
          >
            From Origin.
            <br />
            <span className="text-gold">With Excellence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-5 max-w-[430px] font-serif text-xl leading-snug lg:text-[22px]"
          >
            Premium cashews, carefully sourced, selected and packed for
            exceptional taste and quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-7 flex flex-wrap gap-4"
          >
            <Btn to="/our-products">Explore Our Cashews</Btn>
            <Btn to="/bulk-b2b" variant="outline" className="!bg-ivory/70 hover:!bg-gold">
              Bulk Enquiry
            </Btn>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-8"
          >
            {heroFeatures.map(([I, a, b]) => (
              <div key={a} className="flex items-center gap-2.5 text-[13px] leading-tight">
                <I size={30} strokeWidth={1.1} className="shrink-0 text-forest" />
                <span>
                  {a}
                  <br />
                  {b}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile photo */}
      <div className="relative h-[300px] lg:hidden">
        <img
          src="/images/cashews-bowl-hero.webp"
          alt="Premium cashews in a wooden bowl"
          width="1600" height="1067" decoding="async"
          className="h-full w-full object-cover"
        />
        <p className="absolute right-5 top-6 -rotate-6 font-serif text-xl italic leading-tight text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]">
          Goodness
          <br />
          from Nature
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CHOOSE YOUR GRADE                                                   */
/* ------------------------------------------------------------------ */
const grades = [
  ["W320 Cashews", "Everyday Premium", "250 g, 500 g & 1 kg packs", "Shop Now", "w320-cashews-clean.webp"],
  ["W240 Cashews", "Large & Premium", "250 g, 500 g & 1 kg packs", "Shop Now", "w240-cashews.webp"],
  ["W180 Cashews", "Extra Large / Celebration Grade", "250 g, 500 g & 1 kg packs", "Shop Now", "w180-cashews.webp"],
  ["Sweet & Processing Grade", "Ideal for mithai manufacturers and food businesses", "Available in bulk quantities", "Bulk Enquiry", "sweet-processing-cashews.webp"],
];

function Grades() {
  return (
    <section className="relative overflow-hidden bg-ivory pb-14 pt-9">
      <Leaf className="pointer-events-none absolute -left-5 top-28 hidden h-44 lg:block" rot={-28} />
      <Leaf className="pointer-events-none absolute -left-3 bottom-4 hidden h-28 lg:block" rot={8} />
      <Leaf className="pointer-events-none absolute -right-6 top-6 hidden h-44 lg:block" rot={35} />
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        <Reveal>
          <Heading className="flex items-center gap-4 !text-4xl text-forest md:!text-[40px]">
            Choose Your Grade
            <i className="hidden h-px w-10 bg-gold sm:block" />
          </Heading>
          <p className="mt-2 font-serif text-lg">
            Premium cashews for every need — from everyday indulgence to business supply.
          </p>
        </Reveal>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {grades.map(([t, s, p, c, image], i) => (
            <Reveal key={t} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-xl bg-cream p-6 shadow-[0_2px_16px_rgba(70,55,20,0.07)] transition-shadow hover:shadow-[0_8px_26px_rgba(70,55,20,0.13)]">
                <img
                  src={`/images/${image}`}
                  alt={t}
                  loading="lazy"
                  className="h-[112px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <h3 className="mt-4 text-[22px] font-semibold leading-tight text-forest">{t}</h3>
                <p className="mt-1 min-h-10 text-[13px] leading-snug">{s}</p>
                <p className="mt-3 flex items-center gap-3 text-[11.5px] leading-snug">
                  <Box size={24} strokeWidth={1.2} className="shrink-0 text-gold" />
                  {i < 3 ? (
                    <span>
                      Available in
                      <br />
                      {p.replace(" packs", "")} packs
                    </span>
                  ) : (
                    <span>{p}</span>
                  )}
                </p>
                <div className="mt-auto pt-5">
                  <Btn to={i === 3 ? "/bulk-b2b" : "/our-products"} className="w-full !py-2.5">
                    {c}
                  </Btn>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* OUR STORY + WHY EXCELIA                                             */
/* ------------------------------------------------------------------ */
const why = [
  [LeafI, "Selected Quality", "Grade-conscious sourcing"],
  [Package, "Freshly Packed", "Controlled small-batch packing"],
  [ShieldCheck, "Quality Checked", "Consistency before dispatch"],
  [Users, "Retail + Bulk", "From 250 g packs to commercial quantities"],
];

function Story() {
  return (
    <section className="relative z-10 grid lg:grid-cols-[1.35fr_1fr]">
      <div
        className="relative min-h-[360px] overflow-hidden bg-cover bg-left p-8 lg:min-h-[360px] lg:p-0"
        style={{ backgroundImage: "url('/images/odisha-story-bg.webp')" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-ivory/75 lg:bg-transparent lg:bg-gradient-to-b lg:from-white/30 lg:via-transparent lg:to-transparent" />
        <Reveal className="relative max-w-[400px] lg:ml-[36%] lg:mt-9">
          <Eyebrow>
            <span className="text-[10px]">Our Story</span>
          </Eyebrow>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] text-forest lg:text-[34px]">
            Rooted in Odisha.
            <br />
            Made for India.
          </h2>
          <p className="mt-4 font-serif text-[17px] leading-snug">
            Excelia Origins brings carefully selected cashews from one of
            India’s important cashew-growing regions to homes, retailers and
            food businesses across the country.
          </p>
          <Btn to="/our-story" className="mt-6 !py-2.5">
            Our Story
          </Btn>
        </Reveal>
      </div>

      <div className="bg-forest p-8 text-ivory lg:px-12 lg:py-8">
        <Heading className="flex items-center gap-4 !text-[32px]">
          Why Excelia
          <i className="h-px w-12 bg-lgold" />
        </Heading>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7 text-center">
          {why.map(([I, t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="mx-auto grid h-[62px] w-[62px] place-items-center rounded-full border border-lgold text-lgold">
                <I size={26} strokeWidth={1.2} className="h-[26px] w-[26px]" />
              </div>
              <h3 className="mt-2.5 text-xl">{t}</h3>
              <p className="mx-auto max-w-[150px] text-xs leading-snug text-ivory/70">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PREMIUM PACKAGING  (packet overlaps the Story section above)        */
/* ------------------------------------------------------------------ */
function Packaging() {
  const bowlMask =
    "linear-gradient(to right, transparent 0%, #000 45%), linear-gradient(to bottom, transparent 0%, #000 40%)";
  return (
    <section className="relative z-20 bg-gradient-to-r from-cream via-[#f3ecda] to-[#efe3c6]">
      <div className="relative mx-auto max-w-[1440px] lg:h-[300px]">
        {/* soft photo of a bowl on the right (clipped inside its own box) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[27%] overflow-hidden lg:block">
          <img
            src="/images/bowl-crop.jpg"
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-[10%_95%] opacity-90"
            style={{
              maskImage: bowlMask,
              WebkitMaskImage: bowlMask,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
        </div>

        {/* THE PACKET — sticks out above the section, like the design */}
        <Reveal className="pointer-events-none relative z-30 mx-auto mt-8 w-[300px] max-w-[85%] lg:absolute lg:-top-[62px] lg:left-[5.5%] lg:mx-0 lg:mt-0 lg:w-[min(29%,400px)]">
          <img
            src="/images/excelia-cashew-packet.webp"
            alt="Excelia Origins Premium Cashews 250 g pack"
            className="w-full object-contain drop-shadow-[0_22px_24px_rgba(20,45,30,0.22)]"
          />
        </Reveal>

        {/* Text */}
        <Reveal className="relative px-5 pb-12 pt-6 lg:absolute lg:inset-y-0 lg:left-[41%] lg:flex lg:max-w-[520px] lg:flex-col lg:justify-center lg:p-0">
          <Eyebrow>
            <span className="text-[10px]">Premium Packaging</span>
          </Eyebrow>
          <Heading className="mt-2 !text-4xl text-forest lg:!text-[36px]">
            Premium Cashews.
            <br />
            Beautifully Presented.
          </Heading>
          <p className="mt-3 max-w-md font-serif text-[17px] leading-snug">
            Thoughtfully packed for everyday indulgence, gifting and celebrations.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
            {[
              [LeafI, "Natural", "Goodness"],
              [Heart, "Rich in", "Nutrients"],
              [Gift, "Perfect", "for Gifting"],
            ].map(([I, a, b]) => (
              <span key={a} className="flex items-center gap-2 text-[13px] leading-tight">
                <I size={28} strokeWidth={1.1} className="text-gold" />
                <span>
                  {a}
                  <br />
                  {b}
                </span>
              </span>
            ))}
          </div>
          <div>
            <Btn to="/our-products" className="mt-6 !py-2.5">
              Shop 250 g Pack
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* BULK + PROCESS                                                      */
/* ------------------------------------------------------------------ */
const steps = [
  [Sprout, "SOURCE", "Ethical sourcing from trusted regions"],
  [Settings, "GRADE", "Careful selection and grading"],
  [Search, "INSPECT", "Quality check at every stage"],
  [Box, "PACK", "Hygienic & secure packing"],
  [Truck, "DELIVER", "Across India with care"],
];

function Bulk() {
  return (
    <section className={`${W} grid gap-4 py-5 lg:grid-cols-[0.88fr_1.12fr]`}>
      <Reveal className="flex flex-col gap-5 rounded-xl bg-[#eef0e3] p-7 sm:flex-row">
        <div className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-forest text-lgold">
          <Handshake size={34} strokeWidth={1.2} />
        </div>
        <div>
          <Eyebrow>
            <span className="text-[10px]">Buying in Bulk?</span>
          </Eyebrow>
          <p className="mt-2 font-serif text-[17px] leading-snug">
            For retailers, distributors, sweet manufacturers, hotels, caterers
            and institutional buyers.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-[11.5px] leading-tight">
            {[
              [Building2, "Available in", "bulk quantities"],
              [Settings, "Multiple", "grades"],
              [Tag, "Business", "pricing"],
            ].map(([I, a, b]) => (
              <span key={a} className="flex items-center gap-1.5">
                <I size={26} strokeWidth={1.1} className="text-gold" />
                <span>
                  {a}
                  <br />
                  {b}
                </span>
              </span>
            ))}
          </div>
          <Btn to="/bulk-b2b" className="mt-5 !py-2.5">
            Request B2B Price
          </Btn>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="rounded-xl bg-[#eef0e3] p-7">
        <div className="text-center">
          <Eyebrow>
            <span className="text-[10px]">Our Process</span>
          </Eyebrow>
        </div>
        <div className="mt-1 flex items-center gap-4">
          <i className="hidden h-px flex-1 bg-gold/50 sm:block" />
          <h2 className="whitespace-nowrap text-center font-serif text-[22px] text-forest">
            From Source to Your Hands
          </h2>
          <i className="hidden h-px flex-1 bg-gold/50 sm:block" />
        </div>
        <ol className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          {steps.map(([I, t, d], i) => (
            <Fragment key={t}>
              <motion.li
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-center gap-4 sm:w-[17%] sm:flex-col sm:gap-2 sm:text-center"
              >
                <span className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full border border-forest bg-ivory text-forest">
                  <I size={22} strokeWidth={1.2} />
                </span>
                <span>
                  <b className="block text-[11px] tracking-wide">{t}</b>
                  <span className="block text-[11px] leading-snug text-ink/70">{d}</span>
                </span>
              </motion.li>
              {i < steps.length - 1 && (
                <ArrowRight size={15} className="mt-5 hidden shrink-0 text-gold sm:block" />
              )}
            </Fragment>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Grades />
      <Story />
      <Packaging />
      <Bulk />
    </>
  );
}
