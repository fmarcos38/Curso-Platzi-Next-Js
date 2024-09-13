import { ProductCard } from "../ProductCard"
import styles from './ProductsWrapper.module.sass';

interface ProductsWrapperProps {
    products: ProductType[]
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
    if (!Array.isArray(products) || products.length === 0) {
        return <div>No products available</div>; // Muestra un mensaje si no hay productos
    }

    return (
        <div className={styles.ProductsWrapper}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
