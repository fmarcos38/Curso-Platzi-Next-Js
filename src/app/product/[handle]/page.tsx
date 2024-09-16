import { ProductView } from "app/components/product/ProductView/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation";

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

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