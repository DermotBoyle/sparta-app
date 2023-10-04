'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './redux/provider'
import SingleClickButton from './common/components/SingleClickButton/SingleClickButton'
import { usePathname, useRouter } from 'next/navigation'
import Styles from './page.module.scss'

const inter = Inter({ subsets: [ 'latin' ] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter()
  const pathname = usePathname()

  const isSignInPage = pathname === '/signin'

  const handleLogout = async () => {
    const res = await fetch('/api/auth/signout', {
      method: 'GET',
    })

    if (res.status === 200) {
      router.replace('/signin')
    }
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isSignInPage && <nav className={Styles.navbar}>
          <img className={Styles.mainImage} src="/sparta-logo.svg" alt="Sparta commodities brand logo" />
          <SingleClickButton style='tertiary' size='sm' label="Sign out" onClick={() => handleLogout()} />
        </nav>
        }
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
