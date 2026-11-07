import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
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
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-steel-100 bg-white/95 backdrop-blur">
      <div className="hidden bg-navy-900 text-white md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="text-white/70">Auktoriserat VVS-företag · Säker Vatten · {company.serviceArea}</span>
          <div className="flex items-center gap-5">
            <span className="text-white/70">{company.hours.weekdays}</span>
            <a href={company.emergencyPhoneHref} className="font-semibold hover:text-brand-400">
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
                `text-sm font-medium transition-colors hover:text-brand-500 ${
                  isActive ? 'text-brand-500' : 'text-navy-900'
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
              <Link to="/kontakt" className="btn-primary">
                Begär offert
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
