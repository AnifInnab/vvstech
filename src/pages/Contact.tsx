import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { QuoteForm } from '../components/QuoteForm'
import { company } from '../data/company'
import { usePageTitle } from '../lib/utils'

export function Contact() {
  usePageTitle('Kontakt & offert')
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Begär offert eller hör av dig"
        lead="Fyll i formuläret så återkommer vi inom en arbetsdag. Vid akuta ärenden – ring vår jour direkt."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-steel-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-bold">Offertförfrågan</h2>
              <p className="mt-2 text-sm text-steel-500">
                Kostnadsfritt och utan förpliktelser. Fält markerade med * är obligatoriska.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-lg bg-navy-900 p-7 text-white">
              <h3 className="text-lg font-semibold">Akut hjälp – jour dygnet runt</h3>
              <p className="mt-2 text-sm text-white/70">
                Vattenläcka, rörbrott eller värmebortfall? Ring oss direkt så rycker vi ut.
              </p>
              <a href={company.emergencyPhoneHref} className="btn-primary mt-5 w-full">
                <Phone className="size-4" />
                {company.emergencyPhone}
              </a>
            </div>

            <div className="rounded-lg border border-steel-100 p-7">
              <h3 className="text-lg font-semibold">Kontaktuppgifter</h3>
              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <div>
                    <div className="font-medium">Telefon</div>
                    <a href={company.phoneHref} className="text-steel-500 hover:text-brand-600">
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <div>
                    <div className="font-medium">E-post</div>
                    <a href={`mailto:${company.email}`} className="text-steel-500 hover:text-brand-600">
                      {company.email}
                    </a>
                    <br />
                    <a href={`mailto:${company.quoteEmail}`} className="text-steel-500 hover:text-brand-600">
                      {company.quoteEmail}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <div>
                    <div className="font-medium">Besöksadress</div>
                    <div className="text-steel-500">
                      {company.address.street}
                      <br />
                      {company.address.postalCode} {company.address.city}
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <div>
                    <div className="font-medium">Öppettider</div>
                    <div className="text-steel-500">
                      {company.hours.weekdays}
                      <br />
                      {company.hours.emergency}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-lg border border-steel-100 bg-steel-100">
              {/* Byt till riktig Google Maps-embed när adressen är klar */}
              <div className="flex aspect-[4/3] items-center justify-center text-sm text-steel-500">
                Karta – {company.address.city}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
