import { ProductView } from "app/components/product/ProductView/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation";
import { title } from "process";

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

//funcion dinamica para el SEO, en este caso para pag DINAMICA
export async function generateMetadata({searchParams}: ProductPageProps) {
    const id = searchParams.id; console.log("id:", )
    const products = await getProducts(id);
    const product = products[0];

    return {
        title: product.title,
        description: product.description,
        keywords: product.tags,
        openGraph: { //imagen q se mostrará sobre la pagina
            images: [product.image],
        }
    }
}

//componente
export default async function ProductPage({ searchParams }: ProductPageProps) {
    const id = searchParams.id; console.log("id:", )
    const products = await getProducts(id);
    const product = products[0];

    //si no hay ID redirecciono a la paágina store
    if(!id){
        redirect('/store');
    }

    return <ProductView product={product} />
}