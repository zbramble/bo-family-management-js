// `app/person/page.tsx` is the UI for the `/person` URL
'use client'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter()

  return (
  <>
    <h1>Hello, {params.slug} Page!</h1>
    <button type="button" onClick={() => router.push('/')}>
      Home
    </button>
  </>
  )
}