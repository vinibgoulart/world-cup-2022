import './globals.css'
import Header from './Header'
import { Providers } from './providers'

export const revalidate = 60

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        {/* @ts-expect-error Server Component */}
        <Header />
        <Providers>
          <main className="container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
