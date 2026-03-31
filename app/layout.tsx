export const metadata = {
  title: 'Cnetmobil Admin',
  description: '8 Mağaza Yönetim Paneli',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
