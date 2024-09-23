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
    gql_id: string;
};

//para los items del carrito
type CartItem = {
    title: string;
    price: number;
    quantity: number;
    id: string;
    image: string;
    merchandiseId: string;
}