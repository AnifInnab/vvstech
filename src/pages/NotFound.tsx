import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/utils'

export function NotFound() {
  usePageTitle('Sidan hittades inte')
  return (
    <section className="bg-white py-32">
      <div className="container-x text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-extrabold">Sidan hittades inte</h1>
        <p className="mt-4 text-steel-500">Sidan kan ha flyttats eller så är länken felaktig.</p>
        <Link to="/" className="btn-primary mt-8">
          Till startsidan
        </Link>
      </div>
    </section>
  )
}
