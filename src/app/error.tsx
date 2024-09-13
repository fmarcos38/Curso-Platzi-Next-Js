"use client"

import React from 'react';
import Image from 'next/image'; //utilizo el componente Image
import styles from '../app/../sass/global-errors.module.sass';
import imagenError from '../../public/images/eror-404.jpg';

function Error({reset}: ErrorPageProps) { /* implemento la funcion reset (para manejo de errores) desde el arch/Interface global*/
    return (
        <main className={styles.Error__title}> {/* main porq está en nuestro componente principal */}
            <Image 
                src={imagenError}
                alt='not found'
                width={500}
                height={500}
            />

            <p className={styles.Error__message}>Al parecer ocurrió un Error</p>
            <button 
                onClick={reset}
                className={styles.Error__button}
            >
                Volver a intentar
            </button>
        </main>
    )
}

export default Error