import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: string
  lead?: string
  children: ReactNode
  className?: string
  tone?: 'white' | 'gray' | 'ice' | 'navy'
  align?: 'left' | 'center'
}

const tones = {
  white: 'bg-white',
  gray: 'bg-steel-50',
  ice: 'bg-ice-50',
  navy: 'bg-navy-900 text-white',
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
  tone = 'white',
  align = 'left',
}: SectionProps) {
  const dark = tone === 'navy'
  return (
    <section id={id} className={`${tones[tone]} py-20 sm:py-24 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || lead) && (
          <div className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
            {eyebrow && <p className={`eyebrow ${dark ? 'text-brand-300' : ''}`}>{eyebrow}</p>}
            {title && (
              <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-white' : ''}`}>{title}</h2>
            )}
            {lead && (
              <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-steel-500'}`}>
                {lead}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
