import "./globals.css";
import { Header } from '../componets/header'
import { Metadata } from "next";


export const metadata: Metadata = {

  title: 'Aula Next JS do zero!',
  description: 'Apredendo Next JS do Zero com Sujeito Programador!',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito no youtube!',
    description: 'Apredendo Next JS do Zero com Sujeito Programador!',
    images: ['https://sujeitoprogramador.com/steve.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header />

        {children}
      </body>
    </html>
  );
}
