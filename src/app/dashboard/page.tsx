// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
'use client'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
  <>
    <h1>Hello, Dashboard Page!</h1>
    <button type="button" onClick={() => router.push('/')}>
      Home
    </button>
  </>
  )
}