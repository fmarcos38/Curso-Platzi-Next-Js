//Componente que renderiza los productos
import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products"

interface CategoryProps {
    params: {
        categories: string[],
    }
    searchParams?: string
}

export default async function Category(props: CategoryProps) {
    const { categories } = props.params;
    let products = [];

    try {
        // me traigo las colecciones
        const collectios = await getCollections();

        if (categories?.length > 0) {
            // filtro del array de colecciones (collections) por el parámetro obtenido de la URL --> categories
            const selectedCollectionID = collectios.find(collection => collection.handle === categories[0])?.id;

            if (selectedCollectionID) {
                products = await getCollectionProducts(selectedCollectionID);
            }
        } else {
            products = await getProducts();
        }
    } catch (error) {
        console.error("Error fetching products or collections:", error);
    }

    return (
        <ProductsWrapper products={products} />
    );
}
