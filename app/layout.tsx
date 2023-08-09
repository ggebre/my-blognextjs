import './globals.css'

export const metadata = {
  title: "Getu's Blog",
  description: "Getu's blog-my daily journey",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
