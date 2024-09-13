//creo interfaz GLOBAL para el manejo de la funcion reset.
interface ErrorPageProps {
    error: Error;
    reset: () => void;
}