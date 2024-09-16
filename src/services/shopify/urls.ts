//urls q le pegan a shopify
import { env } from "app/config/env";


export const shopifyUrls = {
    products: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
        'mainProducts': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/489057419547/products.json`,
    },

    collections: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,        

        'products': (id: string) => `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`, //obt el id a  través de un función
    },
}