import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";
import styles from './StoreLayout.module.sass'

export default async function Layout({ children }: { children: React.ReactNode }) {

    //me traigo las collections. Las cuales las voy a usar para mostrarlas en la navbar
    const collections = await getCollections();

    return (
        <main>
            <nav>
                <ul className={styles.StoreLayout__list}>
                    {
                        collections.map((collection) => (
                            <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                                {collection.title}
                            </Link>
                        ))
                    }
                </ul>
            </nav>
            {children}
        </main>
    )
}