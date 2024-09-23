import Link from 'next/link'
//import ShoppingCart  from '../ShoppingCart'; //utilizo el de abajo No SSR
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
import dynamic from 'next/dynamic'; //para q el componente no pase por la hidratacion(osea q sea un componente q NO pase por SERVER SER RENDER) CAP 48
import styles from './Header.module.sass'

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), {ssr: false});

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
        {/* carrito de compras */}
        {/* <ShoppingCart /> */}
        <NoSSRShoppingCart/> {/* componente no SSR */}
      </div>
    </header>)
}