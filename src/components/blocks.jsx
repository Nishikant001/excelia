import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Check } from "lucide-react";
import { Reveal, Btn, Eyebrow, Heading } from "./ui.jsx";

export const W = "mx-auto max-w-[1280px] px-5 lg:px-8";

/* ---------- Page hero (photo fades into the ivory background) ---------- */
export const PageHero = ({ eyebrow, title, text, image, pos = "50% 50%", actions, fit = "cover" }) => {
  const fade =
    "linear-gradient(to right, transparent 0%, rgba(0,0,0,.5) 20%, #000 46%)";
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-ivory via-cream to-[#e8dbbb]">
      {image && fit === "cover" && (
        <div
          className="absolute inset-y-0 right-0 hidden w-[62%] lg:block"
          style={{ maskImage: fade, WebkitMaskImage: fade }}
        >
          <img
            src={image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            style={{ objectPosition: pos }}
          />
        </div>
      )}
      {image && fit === "contain" && (
        <div className="absolute inset-y-0 right-[4%] hidden w-[46%] items-center justify-center p-8 lg:flex">
          <img src={image} alt="" aria-hidden className="max-h-full w-full object-contain drop-shadow-[0_18px_24px_rgba(60,45,10,0.18)]" />
        </div>
      )}
      <div className={`${W} relative z-10`}>
        <Reveal className="max-w-[600px] py-14 lg:py-24">
          <p className="mb-4 flex items-center gap-2 text-xs text-ink/60">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-gold">{eyebrow}</span>
          </p>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.04] text-forest md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-[500px] font-serif text-xl leading-snug">{text}</p>
          {actions && <div className="mt-7 flex flex-wrap gap-4">{actions}</div>}
        </Reveal>
      </div>
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className={`h-56 w-full lg:hidden ${fit === "contain" ? "object-contain bg-cream p-4" : "object-cover"}`}
          style={{ objectPosition: pos }}
        />
      )}
    </section>
  );
};

/* ---------- Section wrapper ---------- */
const tones = {
  ivory: "bg-ivory",
  cream: "bg-cream",
  beige: "bg-gradient-to-b from-cream to-[#efe6cf]",
  forest: "bg-forest text-ivory",
};
export const Section = ({ tone = "ivory", children, className = "" }) => (
  <section className={`${tones[tone]} ${className}`}>
    <div className={`${W} py-14 lg:py-20`}>{children}</div>
  </section>
);

export const SectionHead = ({ eyebrow, title, text, center, light }) => (
  <Reveal className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
    <Heading className={`mt-2 ${light ? "text-ivory" : "text-forest"}`}>{title}</Heading>
    {text && <p className={`mt-3 font-serif text-lg leading-snug ${light ? "text-ivory/80" : ""}`}>{text}</p>}
  </Reveal>
);

/* ---------- Image + text row ---------- */
export const Split = ({ image, alt, reverse, eyebrow, title, children, contain, cover = "h-[340px]" }) => (
  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
    <Reveal className={reverse ? "lg:order-2" : ""}>
      {contain ? (
        <div className="grid place-items-center rounded-2xl bg-gradient-to-br from-cream to-[#eadfc4] p-8 shadow-[0_4px_30px_rgba(70,55,20,0.08)]">
          <img src={image} alt={alt} loading="lazy" className="max-h-[320px] w-full object-contain" />
        </div>
      ) : (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`${cover} w-full rounded-2xl object-cover shadow-[0_4px_30px_rgba(70,55,20,0.12)]`}
        />
      )}
    </Reveal>
    <Reveal delay={0.08} className={reverse ? "lg:order-1" : ""}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="mt-2 text-forest !text-4xl">{title}</Heading>
      <div className="mt-4 space-y-4 font-serif text-lg leading-relaxed">{children}</div>
    </Reveal>
  </div>
);

export const Checks = ({ items }) => (
  <ul className="mt-2 grid gap-2 font-sans text-sm sm:grid-cols-2">
    {items.map((t) => (
      <li key={t} className="flex items-start gap-2">
        <Check size={16} className="mt-0.5 shrink-0 text-gold" />
        {t}
      </li>
    ))}
  </ul>
);

/* ---------- Icon cards ---------- */
export const IconCards = ({ items, cols = "lg:grid-cols-3", light }) => (
  <div className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
    {items.map(([I, t, d], i) => (
      <Reveal key={t} delay={(i % 3) * 0.07} className="h-full">
        <div
          className={`h-full rounded-xl p-6 ${
            light ? "border border-white/10 bg-white/5" : "bg-cream shadow-[0_2px_16px_rgba(70,55,20,0.07)]"
          }`}
        >
          <span className={`grid h-14 w-14 place-items-center rounded-full border ${light ? "border-lgold text-lgold" : "border-gold text-gold"}`}>
            <I size={26} strokeWidth={1.2} />
          </span>
          <h3 className={`mt-4 text-2xl ${light ? "text-ivory" : "text-forest"}`}>{t}</h3>
          <p className={`mt-1.5 text-sm leading-relaxed ${light ? "text-ivory/75" : ""}`}>{d}</p>
        </div>
      </Reveal>
    ))}
  </div>
);

/* ---------- Photo cards ---------- */
export const PhotoCards = ({ items, cols = "lg:grid-cols-4" }) => (
  <div className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
    {items.map(([img, t, d, to, cta], i) => (
      <Reveal key={t} delay={(i % 4) * 0.07} className="h-full">
        <article className="group flex h-full flex-col rounded-xl bg-cream p-6 shadow-[0_2px_16px_rgba(70,55,20,0.07)] transition-shadow hover:shadow-[0_8px_26px_rgba(70,55,20,0.13)]">
          <div className="grid h-36 place-items-center rounded-lg bg-gradient-to-br from-ivory to-[#efe5cc]">
            <img src={img} alt={t} loading="lazy" className="h-32 w-full object-contain transition-transform duration-500 group-hover:scale-105" />
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-forest">{t}</h3>
          <p className="mt-1 text-sm leading-relaxed">{d}</p>
          {to && (
            <div className="mt-auto pt-5">
              <Btn to={to} className="w-full !py-2.5">{cta}</Btn>
            </div>
          )}
        </article>
      </Reveal>
    ))}
  </div>
);

/* ---------- Numbered steps ---------- */
export const NumberedSteps = ({ items, light }) => (
  <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    {items.map(([t, d], i) => (
      <Reveal key={t} delay={i * 0.08} className="h-full">
        <li className={`relative h-full list-none rounded-xl p-6 ${light ? "bg-white/5 border border-white/10" : "bg-cream shadow-[0_2px_16px_rgba(70,55,20,0.07)]"}`}>
          <span className="font-serif text-5xl leading-none text-gold/70">{String(i + 1).padStart(2, "0")}</span>
          <h3 className={`mt-3 text-2xl ${light ? "text-ivory" : "text-forest"}`}>{t}</h3>
          <p className={`mt-1.5 text-sm leading-relaxed ${light ? "text-ivory/75" : ""}`}>{d}</p>
        </li>
      </Reveal>
    ))}
  </ol>
);

/* ---------- Stats strip ---------- */
export const StatStrip = ({ items }) => (
  <section className="bg-forest text-ivory">
    <div className={`${W} grid grid-cols-2 gap-y-6 py-8 text-center lg:grid-cols-4`}>
      {items.map(([v, l], i) => (
        <Reveal key={l} delay={i * 0.06} className={i > 0 ? "lg:border-l lg:border-white/15" : ""}>
          <p className="font-serif text-4xl text-lgold">{v}</p>
          <p className="mt-1 text-xs uppercase tracking-[.16em] text-ivory/75">{l}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

/* ---------- Table ---------- */
export const DataTable = ({ head, rows }) => (
  <Reveal>
    <div className="overflow-x-auto rounded-xl border border-beige bg-cream">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-forest text-ivory">
          <tr>{head.map((h) => <th key={h} className="px-5 py-4 font-medium">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-beige">
              {r.map((c, j) => (
                <td key={j} className={`px-5 py-4 ${j === 0 ? "font-serif text-xl text-forest" : ""}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Reveal>
);

/* ---------- FAQ accordion ---------- */
export const Faq = ({ items }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-beige rounded-xl bg-cream px-6 shadow-[0_2px_16px_rgba(70,55,20,0.07)]">
      {items.map(([q, a], i) => (
        <div key={q}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 py-5 text-left font-serif text-xl text-forest"
          >
            {q}
            <ChevronDown size={20} className={`shrink-0 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="pb-5 pr-8 text-sm leading-relaxed">{a}</p>}
        </div>
      ))}
    </div>
  );
};

/* ---------- Closing CTA band ---------- */
export const CtaBand = ({ title, text, image, primary = ["Send Enquiry", "/contact"], secondary }) => (
  <section className="relative overflow-hidden bg-deep text-ivory">
    {image && (
      <img src={image} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
    )}
    <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/85 to-transparent" />
    <div className={`${W} relative py-16 lg:py-20`}>
      <Reveal className="max-w-xl">
        <Heading className="text-ivory">{title}</Heading>
        <p className="mt-3 font-serif text-lg text-ivory/80">{text}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Btn to={primary[1]} variant="gold">{primary[0]}</Btn>
          {secondary && (
            <Btn to={secondary[1]} variant="outline">{secondary[0]}</Btn>
          )}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- Enquiry form ---------- */
export function Form({ cta, options = ["Retail packs", "Gifting", "Bulk supply", "Processing grade"] }) {
  const [err, setErr] = useState({});
  const [ok, setOk] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));
    const x = {};
    if (!f.name.trim()) x.name = "Enter your name";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = "Enter a valid email";
    if (!f.message.trim()) x.message = "Tell us what you need";
    setErr(x);
    if (!Object.keys(x).length) {
      console.log("Enquiry", f);
      setOk(true);
      e.target.reset();
    }
  };
  const c =
    "w-full rounded-lg border border-beige bg-ivory px-4 py-3 text-sm focus:outline-none focus:border-gold";
  const F = ({ n, p, t = "text" }) => (
    <label className="block">
      <input name={n} type={t} placeholder={p} className={c} />
      {err[n] && <span className="text-xs text-red-800">{err[n]}</span>}
    </label>
  );
  return (
    <form onSubmit={submit} noValidate className="grid gap-4 rounded-xl bg-cream p-6 shadow-[0_2px_20px_rgba(70,55,20,0.08)] sm:grid-cols-2 lg:p-8">
      <F n="name" p="Name" />
      <F n="company" p="Company" />
      <F n="email" p="Email" t="email" />
      <F n="phone" p="Phone" t="tel" />
      <select name="requirement" className={`${c} sm:col-span-2`}>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <label className="sm:col-span-2">
        <textarea name="message" rows="5" placeholder="Message — grade, pack size, quantity, city" className={c} />
        {err.message && <span className="text-xs text-red-800">{err.message}</span>}
      </label>
      <button className="rounded-full bg-forest py-3 text-ivory transition-colors hover:bg-deep sm:col-span-2">{cta}</button>
      {ok && <p className="text-sm text-forest sm:col-span-2">Thank you — we will get back to you shortly.</p>}
    </form>
  );
}
