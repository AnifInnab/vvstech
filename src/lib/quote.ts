import { company } from '../data/company'

export interface QuoteRequest {
  name: string
  email: string
  phone: string
  address: string
  customerType: 'privat' | 'brf' | 'foretag'
  service: string
  urgency: 'normal' | 'snart' | 'akut'
  message: string
  rot: boolean
}

export type SubmitResult = { ok: true } | { ok: false; error: string }

const urgencyLabel: Record<QuoteRequest['urgency'], string> = {
  normal: 'Inom några veckor',
  snart: 'Inom en vecka',
  akut: 'Akut / snarast möjligt',
}

const customerLabel: Record<QuoteRequest['customerType'], string> = {
  privat: 'Privatperson',
  brf: 'Bostadsrättsförening',
  foretag: 'Företag / fastighetsägare',
}

export function buildMailto(q: QuoteRequest): string {
  const subject = `Offertförfrågan: ${q.service} – ${q.name}`
  const body = [
    `Namn: ${q.name}`,
    `E-post: ${q.email}`,
    `Telefon: ${q.phone}`,
    `Adress: ${q.address}`,
    `Kundtyp: ${customerLabel[q.customerType]}`,
    `Tjänst: ${q.service}`,
    `Önskad tidpunkt: ${urgencyLabel[q.urgency]}`,
    `ROT-avdrag: ${q.rot ? 'Ja' : 'Nej'}`,
    '',
    'Beskrivning:',
    q.message,
  ].join('\n')

  return `mailto:${company.quoteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/**
 * Steg 1 (nu): öppnar användarens e-postklient med ifyllt mail.
 * Steg 2 (senare): byt ut mot POST till backend / formulärtjänst som skickar mail till firman.
 */
export async function submitQuote(q: QuoteRequest): Promise<SubmitResult> {
  try {
    window.location.href = buildMailto(q)
    return { ok: true }
  } catch {
    return { ok: false, error: 'Kunde inte öppna e-postklienten. Ring oss istället.' }
  }
}
