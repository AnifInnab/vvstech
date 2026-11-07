import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, Phone, ShieldCheck, Star } from 'lucide-react'
import { Section } from '../components/Section'
import { ServiceCard } from '../components/ServiceCard'
import { CtaBand } from '../components/CtaBand'
import { company, trustBadges } from '../data/company'
import { pillars, services } from '../data/services'
import { asset, usePageTitle } from '../lib/utils'

const yearsActive = new Date().getFullYear() - company.founded

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

const stats = [
  { v: `${yearsActive}+`, l: 'år i branschen' },
  { v: '2 500+', l: 'genomförda uppdrag' },
  { v: '4,9 / 5', l: 'i kundbetyg' },
  { v: '24/7', l: 'jourberedskap' },
]

export function Home() {
  usePageTitle()
  const featured = services.filter((s) => s.featured)

  return (
    <>
      {/* Hero – ljus, luftig, med logotypens slash-former som mjuk dekor */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ice-100 via-ice-50 to-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-100/60 blur-3xl md:hidden" />
          <div className="brand-slash absolute -right-16 top-0 hidden h-full w-[44%] bg-brand-100/50 md:block" />
          <div className="brand-slash absolute -right-40 top-0 hidden h-full w-[30%] bg-brand-200/40 md:block" />
          <img
            src={asset('favicon.svg')}
            alt=""
            className="absolute -bottom-10 right-[4%] hidden h-[70%] w-auto opacity-[0.035] lg:block"
          />
        </div>

        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow">Auktoriserat VVS-företag i Skåne</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Teknik för hållbara <span className="text-brand-600">inomhusmiljöer</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-500">
              Värme, vatten och kyla – installerat, servat och optimerat av certifierade
              tekniker. Från läckande kran till komplett stambyte.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/kontakt" className="btn-primary">
                Begär offert
                <ArrowRight className="size-4" />
              </Link>
              <a href={company.phoneHref} className="btn-outline">
                <Phone className="size-4" />
                Ring {company.phone}
              </a>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {trustBadges.map((b) => (
                <li key={b.label} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  <span className="text-sm leading-snug">
                    <span className="font-semibold text-navy-900">{b.label}</span>
                    <br />
                    <span className="text-xs text-steel-500">{b.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="card relative overflow-hidden p-7 sm:p-8">
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-brand-50" aria-hidden />
              <p className="eyebrow">Så här går det till</p>
              <h2 className="mt-2 text-2xl font-bold">Kostnadsfri offert inom en arbetsdag</h2>
              <ol className="mt-6 space-y-4">
                {steps.map((s, i) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-navy-900">{s.title}</div>
                      <p className="mt-0.5 text-sm leading-relaxed text-steel-500">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-7 flex items-center gap-3 rounded-lg bg-ice-100 px-4 py-3 text-sm">
                <Clock className="size-4 shrink-0 text-brand-600" />
                <span className="text-steel-700">
                  Akut? Jour dygnet runt:{' '}
                  <a href={company.emergencyPhoneHref} className="font-semibold text-navy-900 hover:text-brand-600">
                    {company.emergencyPhone}
                  </a>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-steel-100 bg-white">
        <div className="container-x grid divide-y divide-steel-100 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="flex gap-4 py-7 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
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
        tone="ice"
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
            className="group flex flex-col justify-between rounded-xl bg-gradient-to-br from-navy-900 to-navy-700 p-6 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div>
              <p className="eyebrow text-brand-300">+{services.length - featured.length} tjänster till</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Se hela vårt utbud</h3>
              <p className="mt-2 text-sm text-white/75">
                Stambyte, avlopp, nyproduktion, jour och mer.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold">
              Alla tjänster
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Section>

      {/* About + stats */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Om VVS tech</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ett modernt VVS-företag med hantverket i fokus
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-500">
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
                <li key={t} className="flex items-center gap-3 text-navy-900">
                  <ShieldCheck className="size-5 shrink-0 text-brand-600" />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/om-oss" className="btn-outline mt-9">
              Läs mer om oss
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((k, i) => (
              <div
                key={k.l}
                className={`rounded-xl p-6 ring-1 ${
                  i === 0
                    ? 'bg-gradient-to-br from-navy-900 to-navy-700 text-white ring-navy-900'
                    : 'bg-ice-50 ring-navy-900/[0.06]'
                }`}
              >
                <div className={`text-3xl font-bold tracking-tight sm:text-4xl ${i === 0 ? 'text-white' : 'text-navy-900'}`}>
                  {k.v}
                </div>
                <div className={`mt-1 text-sm ${i === 0 ? 'text-white/70' : 'text-steel-500'}`}>{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="ice" eyebrow="Kundröster" title="Vad våra kunder säger" align="center">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card p-7">
              <div className="flex gap-0.5 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-navy-900">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-navy-900">{t.name}</span>
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
