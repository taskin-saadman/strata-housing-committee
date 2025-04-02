import './globals.css';


export const metadata = {
  title: 'Strata Housing Committee',
  description: 'A site for managing our building',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

