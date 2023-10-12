// `app/page.tsx` is the UI for the `/` URL
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/person/matthew">
              Person
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}