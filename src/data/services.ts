import type { LucideIcon } from 'lucide-react'
import {
  Bath,
  Building2,
  Droplets,
  Fan,
  Flame,
  Layers,
  PhoneCall,
  Snowflake,
  Thermometer,
  Wrench,
} from 'lucide-react'

export type ServiceCategory = 'Värme' | 'Vatten' | 'Ventilation' | 'Kyla' | 'Entreprenad'

export interface Service {
  slug: string
  title: string
  short: string
  category: ServiceCategory
  icon: LucideIcon
  intro: string
  bullets: string[]
  audience: string
  featured?: boolean
}

export const services: Service[] = [
  {
    slug: 'vvs-service',
    title: 'VVS-service & reparationer',
    short: 'Läckande kranar, trasiga blandare, byte av WC och allt däremellan.',
    category: 'Vatten',
    icon: Wrench,
    featured: true,
    intro:
      'Vår serviceavdelning hjälper dig med alla typer av löpande VVS-arbeten – från att byta en blandare till felsökning av värmesystem. Alla våra montörer är utbildade och arbetar enligt Säker Vattens branschregler.',
    bullets: [
      'Byte av blandare, kranar och WC-stolar',
      'Felsökning av läckage och tryckfall',
      'Installation av disk- och tvättmaskin',
      'Byte av varmvattenberedare',
      'Service av värmesystem och expansionskärl',
      'Vattenmätare och vattenmätarkonsol',
    ],
    audience: 'Privatpersoner, BRF:er och fastighetsförvaltare',
  },
  {
    slug: 'badrumsrenovering',
    title: 'Badrumsrenovering',
    short: 'Helhetslösning från rivning till färdigt badrum – med kvalitetsgaranti.',
    category: 'Vatten',
    icon: Bath,
    featured: true,
    intro:
      'Vi tar helhetsansvar för din badrumsrenovering och samordnar alla moment: rivning, tätskikt, VVS, el, kakel och montage. Du får en kontaktperson, en tidplan och ett fast pris – inga överraskningar.',
    bullets: [
      'Kostnadsfritt hembesök och offert',
      'Fast pris och tydlig tidplan',
      'Våtrumsbehöriga hantverkare (GVK/BKR)',
      'Golvvärme och handdukstork',
      'Hjälp med materialval och design',
      'Kvalitetsdokumentation och garanti',
    ],
    audience: 'Privatpersoner och bostadsrättsföreningar',
  },
  {
    slug: 'varmepumpar-fjarrvarme',
    title: 'Värmepumpar & fjärrvärme',
    short: 'Byte av fjärrvärmecentral eller installation av värmepump – vi räknar hem det.',
    category: 'Värme',
    icon: Flame,
    featured: true,
    intro:
      'En modern värmecentral sänker energikostnaden och ger jämnare inomhusklimat. Vi hjälper dig hela vägen från energikalkyl och val av produkt till installation, injustering och driftsättning.',
    bullets: [
      'Byte av fjärrvärmeväxlare / undercentral',
      'Luft-vatten- och bergvärmepumpar',
      'Energikalkyl och återbetalningstid',
      'Injustering av värmesystem',
      'Styr- och reglerteknik',
      'Serviceavtal och driftövervakning',
    ],
    audience: 'Villaägare, BRF:er och fastighetsägare',
  },
  {
    slug: 'golvvarme-radiatorer',
    title: 'Golvvärme & radiatorer',
    short: 'Vattenburen värme som är snygg, tyst och energieffektiv.',
    category: 'Värme',
    icon: Thermometer,
    intro:
      'Vi projekterar och installerar vattenburen golvvärme och radiatorsystem i både nya och befintliga byggnader. Rätt dimensionering och injustering ger lägre driftkostnad och bättre komfort.',
    bullets: [
      'Vattenburen golvvärme i hela hem eller enskilda rum',
      'Byte och komplettering av radiatorer',
      'Termostatventiler och injustering',
      'Konvertering från direktverkande el',
      'Shuntgrupper och fördelarskåp',
    ],
    audience: 'Privatpersoner, byggföretag och fastighetsägare',
  },
  {
    slug: 'ventilation',
    title: 'Ventilation',
    short: 'Frisk luft och god energiåtervinning med FTX, frånluft och OVK.',
    category: 'Ventilation',
    icon: Fan,
    featured: true,
    intro:
      'Bra ventilation är avgörande för hälsa, byggnad och energiförbrukning. Vi installerar och servar ventilationssystem för bostäder och lokaler och hjälper till med obligatorisk ventilationskontroll (OVK).',
    bullets: [
      'FTX-aggregat med värmeåtervinning',
      'Frånluftssystem och köksfläktar',
      'OVK-besiktning och åtgärder',
      'Rengöring och filterbyte',
      'Injustering av luftflöden',
    ],
    audience: 'Villor, flerbostadshus och kommersiella lokaler',
  },
  {
    slug: 'kyla-ac',
    title: 'Kyla & luftkonditionering',
    short: 'Behagligt inomhusklimat även på sommaren – certifierade kyltekniker.',
    category: 'Kyla',
    icon: Snowflake,
    intro:
      'Vi installerar och servar kyl- och komfortkylanläggningar för både hem och verksamheter. Våra kyltekniker är certifierade för köldmediehantering och vi utför lagstadgade läckagekontroller.',
    bullets: [
      'Luft-luftvärmepumpar och split-aggregat',
      'Komfortkyla för kontor och butiker',
      'Kylrum och processkyla',
      'Lagstadgad läckagekontroll',
      'Serviceavtal och felavhjälpning',
    ],
    audience: 'Privatpersoner, företag och fastighetsägare',
  },
  {
    slug: 'stambyte',
    title: 'Stambyte',
    short: 'Strukturerade stambyten med minimal störning för de boende.',
    category: 'Entreprenad',
    icon: Layers,
    intro:
      'Ett stambyte är en av de största investeringarna en förening gör. Vi har rutinerna, logistiken och kommunikationen som krävs för att projektet ska löpa smidigt – från förstudie till slutbesiktning.',
    bullets: [
      'Förstudie, statusbesiktning och projektering',
      'Traditionellt stambyte eller relining',
      'Tydlig boendekommunikation och tidplan',
      'Samordning av bygg, el och VVS',
      'Besiktning och överlämning',
    ],
    audience: 'Bostadsrättsföreningar och fastighetsägare',
  },
  {
    slug: 'avlopp',
    title: 'Avlopp & stopp',
    short: 'Spolning, kamerainspektion, råttstopp och byte av avloppsrör.',
    category: 'Vatten',
    icon: Droplets,
    intro:
      'Stopp i avloppet, dålig lukt eller återkommande problem? Vi felsöker med kamera, spolar rent och åtgärdar orsaken – inte bara symptomet. Vi monterar även råttstopp som skyddar fastigheten.',
    bullets: [
      'Högtrycksspolning av avlopp',
      'Kamerainspektion och lägesbestämning',
      'Montering av råttstopp',
      'Byte av golvbrunnar och avloppsrör',
      'Vattenlås och backventiler',
    ],
    audience: 'Privatpersoner, BRF:er och förvaltare',
  },
  {
    slug: 'nyproduktion-entreprenad',
    title: 'Nyproduktion & entreprenad',
    short: 'Komplett VVS-entreprenad för villor, tillbyggnader och flerbostadshus.',
    category: 'Entreprenad',
    icon: Building2,
    intro:
      'Vi utför alla VVS-installationer vid nyproduktion och tillbyggnad – som underentreprenör till byggföretag eller direkt mot beställare. Vi arbetar med moderna metoder, digital dokumentation och tydlig uppföljning.',
    bullets: [
      'Projektering och kalkyl',
      'Värme, vatten, avlopp och ventilation',
      'Samordning med övriga entreprenörer',
      'Egenkontroller och relationshandlingar',
      'Totalentreprenad eller utförandeentreprenad',
    ],
    audience: 'Byggföretag, fastighetsutvecklare och privatpersoner',
  },
  {
    slug: 'jour',
    title: 'Jour & akut hjälp',
    short: 'Vattenläcka eller stopp mitt i natten? Vi finns tillgängliga dygnet runt.',
    category: 'Vatten',
    icon: PhoneCall,
    intro:
      'Vid akuta vattenskador räknas varje minut. Vår jour är bemannad dygnet runt, året om, och vi rycker ut för att begränsa skadan och få igång vatten och värme igen så snabbt som möjligt.',
    bullets: [
      'Akuta vattenläckor och rörbrott',
      'Totalstopp i avlopp',
      'Värmebortfall vintertid',
      'Provisoriska åtgärder och uppföljning',
      'Hjälp med skadeanmälan till försäkringsbolag',
    ],
    audience: 'Alla kunder i vårt verksamhetsområde',
  },
]

export const pillars: { title: ServiceCategory; icon: LucideIcon; text: string }[] = [
  { title: 'Värme', icon: Flame, text: 'Värmepumpar, fjärrvärme, golvvärme och radiatorer.' },
  { title: 'Vatten', icon: Droplets, text: 'Tappvatten, avlopp, badrum och service.' },
  { title: 'Ventilation', icon: Fan, text: 'FTX, frånluft, OVK och injustering.' },
  { title: 'Kyla', icon: Snowflake, text: 'Komfortkyla, AC och köldmediekontroll.' },
]

export function getService(slug: string | undefined) {
  return services.find((s) => s.slug === slug)
}
