import { env } from "app/config/env";
import { shopifyUrls } from "./urls";


//creo funcion asincrona para traer los prods de shopify
export const getCollections = async () => {
    try {
        const response = await fetch(shopifyUrls.collections.all, { //no coloco URL como 100pre(para eso realicé la arquitectura)
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
        });
        const {smart_collections} = await response.json();
        const transformedCollections = smart_collections.map((collection: any) => {
            return {
                id: collection.id,
                title: collection.title,
                handle: collection.handle
            }
        });

        return transformedCollections;
    } catch (error) {
        console.log(error);
    }
}

//me traigo los prods de una cat determinada
export const getCollectionProducts = async(id: string) => {
    try {
        const response = await fetch(shopifyUrls.collections.products(id), {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
        })

        const {products} = await response.json();
        return products;
    } catch (error) {
        console.log(error);
    }
}