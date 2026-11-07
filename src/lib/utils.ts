import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} – VVS tech` : 'VVS tech – Teknik för hållbara inomhusmiljöer'
  }, [title])
}

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
