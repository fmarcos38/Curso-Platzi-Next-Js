//creo interfaz GLOBAL para el manejo de la funcion reset.
interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

// para los productos
type ProductType = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
};