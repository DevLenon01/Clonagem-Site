import '../styles/globals.css'

export const metadata = {
  title: 'Clonagem de Site Responsivo',
  description: 'Clone moderno e responsivo de site real com Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}