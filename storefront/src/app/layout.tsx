import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medusa Store",
  description: "Medusa v2 storefront",
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
