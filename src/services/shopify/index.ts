import { env } from "app/config/env";
import { shopifyUrls } from "./urls";


//creo funcion asincrona para traer los prods de shopify
export const getProducts = async () => {
    try {
        const response = await fetch(shopifyUrls.products.all, { //no coloco URL como 100pre(para eso realicé la arquitectura)
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
        });
        const data = await response.json()
        return data.products;
    } catch (error) {
        console.log(error);
    }
}