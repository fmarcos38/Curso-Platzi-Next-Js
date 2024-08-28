//esto por estar con TypeScript (para que la props q viene por parametro al componente no tire error)
interface CategoryProps {
    params: {
        category: string
    }
}

function Category(props: CategoryProps) { // este objeto -> { params: { category: 'musica' }, searchParams: {} } ME trae la url DINAMICA
    
    const { category } = props.params;


    return (
        <div>Category: {category}</div>
    )
}

export default Category