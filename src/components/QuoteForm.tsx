import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { services } from '../data/services'
import { company } from '../data/company'
import { submitQuote, type QuoteRequest } from '../lib/quote'

const initial: QuoteRequest = {
  name: '',
  email: '',
  phone: '',
  address: '',
  customerType: 'privat',
  service: '',
  urgency: 'normal',
  message: '',
  rot: false,
}

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [form, setForm] = useState<QuoteRequest>({ ...initial, service: defaultService ?? '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState<string>()

  const set = <K extends keyof QuoteRequest>(key: K, value: QuoteRequest[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    const res = await submitQuote(form)
    if (res.ok) {
      setStatus('sent')
    } else {
      setStatus('error')
      setError(res.error)
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-lg border border-brand-100 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-brand-500" />
        <h3 className="mt-4 text-xl font-semibold">Tack för din förfrågan!</h3>
        <p className="mt-2 text-steel-500">
          Din e-postklient har öppnats med förfrågan ifylld. Skicka mailet så återkommer vi inom en
          arbetsdag. Öppnades inget? Maila oss direkt på{' '}
          <a href={`mailto:${company.quoteEmail}`} className="font-medium text-brand-600 underline">
            {company.quoteEmail}
          </a>
          .
        </p>
        <button
          type="button"
          className="btn-outline mt-6"
          onClick={() => {
            setForm(initial)
            setStatus('idle')
          }}
        >
          Skicka en ny förfrågan
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="@container space-y-6">
      <div className="grid gap-5 @sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Namn *
          </label>
          <input
            id="name"
            className="input"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            Telefon *
          </label>
          <input
            id="phone"
            type="tel"
            className="input"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="label">
            E-post *
          </label>
          <input
            id="email"
            type="email"
            className="input"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address" className="label">
            Adress / ort
          </label>
          <input
            id="address"
            className="input"
            autoComplete="street-address"
            placeholder="Gatan 1, Malmö"
            value={form.address}
            onChange={(e) => set('address', e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 @sm:grid-cols-2 @2xl:grid-cols-3">
        <div>
          <label htmlFor="customerType" className="label">
            Jag är
          </label>
          <select
            id="customerType"
            className="input"
            value={form.customerType}
            onChange={(e) => set('customerType', e.target.value as QuoteRequest['customerType'])}
          >
            <option value="privat">Privatperson</option>
            <option value="brf">Bostadsrättsförening</option>
            <option value="foretag">Företag / fastighetsägare</option>
          </select>
        </div>
        <div>
          <label htmlFor="service" className="label">
            Tjänst *
          </label>
          <select
            id="service"
            className="input"
            required
            value={form.service}
            onChange={(e) => set('service', e.target.value)}
          >
            <option value="" disabled>
              Välj tjänst…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Annat">Annat</option>
          </select>
        </div>
        <div>
          <label htmlFor="urgency" className="label">
            När behöver du hjälp?
          </label>
          <select
            id="urgency"
            className="input"
            value={form.urgency}
            onChange={(e) => set('urgency', e.target.value as QuoteRequest['urgency'])}
          >
            <option value="normal">Inom några veckor</option>
            <option value="snart">Inom en vecka</option>
            <option value="akut">Akut / snarast</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          Beskriv vad du behöver hjälp med *
        </label>
        <textarea
          id="message"
          className="input min-h-32 resize-y"
          required
          placeholder="T.ex. Vi vill byta fjärrvärmeväxlare i en villa från 1978, ca 160 kvm…"
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-steel-700">
        <input
          type="checkbox"
          className="mt-0.5 size-4 rounded border-steel-200 accent-brand-500"
          checked={form.rot}
          onChange={(e) => set('rot', e.target.checked)}
        />
        <span>Jag vill nyttja ROT-avdrag (gäller privatpersoner som äger bostaden)</span>
      </label>

      {status === 'error' && (
        <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-4 @lg:flex-row @lg:items-center @lg:justify-between">
        <p className="text-xs text-steel-500">
          Vi hanterar dina uppgifter enligt GDPR och använder dem endast för att besvara din förfrågan.
        </p>
        <button type="submit" className="btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          Skicka offertförfrågan
        </button>
      </div>
    </form>
  )
}
