import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { company } from '../data/company'
import { asset } from '../lib/utils'

const nav = [
  { to: '/', label: 'Hem', end: true },
  { to: '/tjanster', label: 'Tjänster' },
  { to: '/om-oss', label: 'Om oss' },
  { to: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-steel-100 bg-white/90 backdrop-blur-md">
      <div className="hidden border-b border-steel-100 bg-ice-50 md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="text-steel-500">Auktoriserat VVS-företag · Säker Vatten · {company.serviceArea}</span>
          <div className="flex items-center gap-5">
            <span className="text-steel-500">{company.hours.weekdays}</span>
            <a href={company.emergencyPhoneHref} className="font-semibold text-navy-900 hover:text-brand-600">
              Jour 24/7: {company.emergencyPhone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex h-18 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="VVS tech – startsida">
          <img src={asset('logo.svg')} alt="VVS tech" className="h-8 w-auto sm:h-9" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Huvudmeny">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-600 ${
                  isActive ? 'text-brand-600' : 'text-steel-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={company.phoneHref} className="btn-outline !py-2.5">
            <Phone className="size-4" />
            {company.phone}
          </a>
          <Link to="/kontakt" className="btn-primary !py-2.5">
            Begär offert
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-navy-900 hover:bg-steel-50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-steel-100 bg-white md:hidden">
          <nav className="container-x flex flex-col py-3" aria-label="Mobilmeny">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={close}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-brand-50 text-brand-600' : 'text-navy-900 hover:bg-steel-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-steel-100 pt-4">
              <a href={company.phoneHref} className="btn-outline">
                <Phone className="size-4" />
                Ring {company.phone}
              </a>
              <Link to="/kontakt" className="btn-primary" onClick={close}>
                Begär offert
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
