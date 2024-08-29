//este arch SERÍA como APP
import {Roboto} from 'next/font/google'//utilizando una fuentes de google
import { Footer } from 'app/components/shared/Footer'
import { Header } from 'app/components/shared/Header'

//importo estilos globales que declaré en el arch de la carpeta sass
import 'app/sass/globals.sass'

const roboto = Roboto({ //por estar con TypeScript si le doy Ctrl + click SOBRE Roboto veo sus propiedades
  weight: ["400", "700"], //puedo poner uno o más
  subsets: ["latin"],
}); //aquí se está creando una instancia de la fuente de Google

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
