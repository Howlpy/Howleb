import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio de Proyectos',
  description: 'Una colección de mis proyectos con animación de vectores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gradient-dark text-gray-100`}>{children}</body>
    </html>
  )
}
