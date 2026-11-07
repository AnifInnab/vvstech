import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Star } from 'lucide-react'
import { Section } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { CtaBand } from '../components/CtaBand'
import { company, trustBadges } from '../data/company'
import { pillars, services } from '../data/services'
import { asset, usePageTitle } from '../lib/utils'

const steps = [
  {
    n: '01',
    title: 'Skicka förfrågan',
    text: 'Beskriv ditt behov i formuläret eller ring oss. Vid större jobb bokar vi ett kostnadsfritt hembesök.',
  },
  {
    n: '02',
    title: 'Få tydlig offert',
    text: 'Du får ett skriftligt prisförslag med omfattning, tidplan och eventuellt ROT-avdrag – inom en arbetsdag.',
  },
  {
    n: '03',
    title: 'Vi utför arbetet',
    text: 'Certifierade montörer utför jobbet på utsatt tid, dokumenterar och lämnar rent och snyggt efter sig.',
  },
]

const testimonials = [
  {
    quote:
      'Snabb återkoppling, fast pris och ett badrum som blev bättre än vi vågat hoppas på. Rekommenderas varmt.',
    name: 'Anna L.',
    role: 'Villaägare, Limhamn',
  },
  {
    quote:
      'VVS tech bytte vår undercentral och injusterade hela systemet. Energikostnaden sjönk märkbart redan första vintern.',
    name: 'Styrelsen',
    role: 'BRF Kvarnen, Lund',
  },
  {
    quote:
      'Professionella, punktliga och tydliga i kommunikationen. Vår förvaltning använder dem för all löpande service.',
    name: 'Marcus E.',
    role: 'Fastighetsförvaltare',
  },
]

export function Home() {
  usePageTitle()
  const featured = services.filter((s) => s.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="brand-slash absolute -right-24 top-0 h-full w-[46%] bg-navy-800/70" />
          <div className="brand-slash absolute -right-48 top-0 h-full w-[34%] bg-brand-500/90" />
          <img
            src={asset('mark-white.svg')}
            alt=""
            aria-hidden
            className="absolute right-[6%] top-1/2 hidden h-[62%] -translate-y-1/2 opacity-[0.08] lg:block"
          />
        </div>

        <div className="container-x relative grid gap-12 py-24 sm:py-28 lg:grid-cols-12 lg:py-36">
          <div className="lg:col-span-7">
            <p className="eyebrow text-brand-400">Auktoriserat VVS-företag · {company.serviceArea}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Teknik för hållbara
              <br />
              <span className="text-brand-400">inomhusmiljöer</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Värme, vatten, ventilation och kyla – installerat, servat och optimerat av certifierade
              tekniker. Från läckande kran till komplett stambyte.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/kontakt" className="btn-primary">
                Begär offert
                <ArrowRight className="size-4" />
              </Link>
              <a href={company.phoneHref} className="btn-ghost-light">
                <Phone className="size-4" />
                Ring {company.phone}
              </a>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/80 sm:grid-cols-4">
              {trustBadges.map((b) => (
                <li key={b.label} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-400" />
                  <span>
                    <span className="font-semibold text-white">{b.label}</span>
                    <br />
                    <span className="text-xs text-white/55">{b.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-steel-100 bg-white">
        <div className="container-x grid divide-y divide-steel-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="flex gap-4 px-0 py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-steel-500">{p.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Services */}
      <Section
        tone="gray"
        eyebrow="Våra tjänster"
        title="Allt inom VVS – under ett tak"
        lead="Vi är ett fullservicebolag. Oavsett om du är privatperson, bostadsrättsförening eller fastighetsägare hjälper vi dig med helhetslösningar."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
          <Link
            to="/tjanster"
            className="group flex flex-col justify-between rounded-lg bg-navy-900 p-6 text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-navy-800"
          >
            <div>
              <p className="eyebrow text-brand-400">+{services.length - featured.length} tjänster till</p>
              <h3 className="mt-3 text-2xl font-bold">Se hela vårt utbud</h3>
              <p className="mt-2 text-sm text-white/70">
                Stambyte, avlopp, nyproduktion, kyla, jour och mer.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold">
              Alla tjänster
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Section>

      {/* Process */}
      <Section
        eyebrow="Så fungerar det"
        title="Från förfrågan till färdigt jobb i tre steg"
        align="center"
      >
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-lg border border-steel-100 p-7">
              <span className="text-4xl font-extrabold text-brand-100">{s.n}</span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-500">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* About teaser */}
      <section className="bg-navy-900 text-white">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow text-brand-400">Om VVS tech</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ett modernt VVS-företag med hantverket i fokus
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Sedan {company.founded} har vi hjälpt hushåll, föreningar och fastighetsägare i{' '}
              {company.serviceArea} med driftsäkra och energieffektiva installationer. Vi kombinerar
              gediget hantverk med modern teknik, digital dokumentation och tydlig kommunikation.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'Auktoriserade enligt Säker Vatten',
                'Certifierade kyl- och värmepumpstekniker',
                'Fast pris på de flesta uppdrag',
                'Garanti på allt arbete vi utför',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/85">
                  <ShieldCheck className="size-5 shrink-0 text-brand-400" />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/om-oss" className="btn-primary mt-9">
              Läs mer om oss
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: `${new Date().getFullYear() - company.founded}+`, l: 'år i branschen' },
              { v: '2 500+', l: 'genomförda uppdrag' },
              { v: '4,9 / 5', l: 'i kundbetyg' },
              { v: '24/7', l: 'jourberedskap' },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-extrabold text-brand-400 sm:text-4xl">{k.v}</div>
                <div className="mt-1 text-sm text-white/65">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Section eyebrow="Kundröster" title="Vad våra kunder säger" align="center">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-lg border border-steel-100 bg-white p-7 shadow-card">
              <div className="flex gap-0.5 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-navy-900">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-steel-500"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
