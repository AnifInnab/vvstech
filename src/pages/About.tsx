import { Award, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { CtaBand } from '../components/CtaBand'
import { company } from '../data/company'
import { usePageTitle } from '../lib/utils'

const values = [
  {
    icon: ShieldCheck,
    title: 'Trygghet',
    text: 'Auktoriserade enligt Säker Vatten, fullt försäkrade och med garanti på allt arbete. Du ska alltid känna dig trygg med oss i ditt hem eller din fastighet.',
  },
  {
    icon: Award,
    title: 'Kvalitet',
    text: 'Vi använder förstklassiga produkter från ledande leverantörer och dokumenterar varje installation. Rätt från början – det lönar sig.',
  },
  {
    icon: Leaf,
    title: 'Hållbarhet',
    text: 'Energieffektiva lösningar som sänker driftkostnaden och klimatavtrycket. Vi hjälper dig räkna hem investeringen.',
  },
  {
    icon: HeartHandshake,
    title: 'Enkelhet',
    text: 'En kontaktperson, tydliga offerter och tider som hålls. Vi tror på rak kommunikation och inga överraskningar på fakturan.',
  },
]

const certs = [
  'Säker Vatten – auktoriserat VVS-företag',
  'Certifierade kyltekniker (köldmedier, kategori I)',
  'Våtrumsbehörighet GVK / BKR via samarbetspartners',
  'Heta arbeten',
  'ID06 – samtliga medarbetare',
  'F-skatt, ansvars- och entreprenadförsäkring',
]

export function About() {
  usePageTitle('Om oss')
  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title="Ett modernt VVS-företag med hantverket i fokus"
        lead={`Sedan ${company.founded} levererar vi driftsäkra och energieffektiva installationer till hushåll, föreningar och fastighetsägare i ${company.serviceArea}.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Vår historia</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Från rörfirma till teknikpartner</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-steel-700">
              <p>
                {company.name} startade som en klassisk rörfirma med fokus på service och
                badrumsrenoveringar. I takt med att kraven på energieffektivitet och inomhusklimat
                ökat har vi breddat kompetensen till att omfatta hela kedjan: värme, vatten,
                ventilation och kyla.
              </p>
              <p>
                Idag är vi ett team av VVS-montörer, kyltekniker och projektledare som arbetar med
                allt från akuta serviceärenden till kompletta entreprenader och stambyten. Våra kunder
                är privatpersoner, bostadsrättsföreningar, fastighetsförvaltare och byggföretag –
                ingen kund är för liten eller för stor.
              </p>
              <p>
                Det som förenar allt vi gör är en enkel idé: tekniken ska fungera, hålla länge och
                vara lätt att leva med. Det är vad vi menar med {company.tagline.toLowerCase()}.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-gradient-to-br from-navy-900 to-navy-700 p-8 text-white">
              <h3 className="text-lg font-semibold text-white">Behörigheter & certifikat</h3>
              <ul className="mt-5 space-y-3">
                {certs.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-white/85">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand-300" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ice" eyebrow="Våra värderingar" title="Så arbetar vi" align="center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.title} className="card p-7">
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-500">{v.text}</p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section eyebrow="Verksamhetsområde" title={`Vi finns i ${company.serviceArea}`}>
        <p className="max-w-2xl text-lg text-steel-500">
          Vår bas finns i {company.address.city}, men vi tar uppdrag i hela regionen. Vid större
          projekt och serviceavtal arbetar vi även utanför vårt ordinarie område – hör av dig så
          berättar vi mer.
        </p>
      </Section>

      <CtaBand />
    </>
  )
}
