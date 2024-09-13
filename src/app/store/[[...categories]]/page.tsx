interface CategoryProps {
    params: {
        categories: string[],
    }
    searchParams?: string
}

export default function Category(props: CategoryProps) {
    
    const { categories } = props.params
    //creo un error PARA ver mi pag de error 404
    //throw new Error("Error: Boom!!");
    return (
        <h1>Categoria dinámica: {categories}</h1>
    )
}