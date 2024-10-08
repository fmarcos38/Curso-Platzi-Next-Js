import { env } from "app/config/env";
import { shopifyUrls } from "./urls";


//creo funcion asincrona para traer los prods de shopify
//recibe por parametro el ID q es opcional por eso el signo ?
//y retorna un array de objetos de tipo ProductType
export const getProducts = async (id?: string): Promise<ProductType[]> => {
    try {
        const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all
        const response = await fetch(apiUrl, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
        })
        const { products } = await response.json()
        //normalizo datos
        const transformedProducts = products.map((product: any) => {
            return {
                id: product.id,
                gql_id: product.variants[0].admin_graphql_api_id,
                title: product.title,
                description: product.body_html,
                price: product.variants[0].price,
                image: product.images[0].src,
                quantity: product.variants[0].inventory_quantity,
                handle: product.handle,
                tags: product.tags,
            }
        })
        return transformedProducts
    } catch (error) {
        console.log(error);
        // Devuelve un arreglo vacío en caso de error
        return []
    }
}


export const getMainProducts = async () => {
    const response = await fetch(shopifyUrls.products.mainProducts, {
        headers: new Headers({
            'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
        }),        
        cache: 'force-cache', //aquí declaro el tipo de CACHE
        next: {
            tags: ['main-products'], //revalidación de cache por tags
        }        
    })

    const { products } = await response.json()

    return products
}