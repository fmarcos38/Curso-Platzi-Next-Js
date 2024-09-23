import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";
//para el SEO de la página Metadata para pag ESTATICA
export const metadata: Metadata = {
  title: "🤩 Tienda Milo",
  description: "Tienda de prods mascotas",
  keywords: "ecommerce, mascota, perro, gato"
}

//--HOME --
export default function Home() {
  return (
    <main>
      <MainProducts/>
    </main>
  )
}
