"use client"  

//ESTANDARES de ordenamiento de importaciones: 1° componentes, 2° estados, 3°estilos
//optimizador de imagens de Next (reemplaza la etiqueta <img>)
import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames/bind'; //import la dependencia classnames y utilizando bind
import styles from './Description.module.sass';

//varible para la propiedad blurDataURL
const url = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACCAIIDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEFBv/EABwQAQEBAQEBAQEBAAAAAAAAAAACAQMREjEhQf/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwQA/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAECEQP/2gAMAwEAAhEDEQA/APgw14PFYNZdx3weLZS07hksyZOKJmQdBcYfGJaNGpbzBOGZLNpWMeObhny5skOTRVH1hVYtglIovTawvWnKdZ8ABgL+R4b45uMcrTYV4PG9weLZqdgzDIxmcNjFE7DIxREl88UxJNOjsyZktxBswho0pPyzsqfhmoJw3UdyReLblN0lTIdSXhNKLwil80tYDvgN0DPlzcN8Z3GKVr4VuOeN7jPi2aSwTh0YXOH88WlSsO54r5yRyxZywtKZEmzLvOTplKgV8MVKr5YuScHqHpKTpL0Oko+2DBQdMT2q64mtWVzAAN13FTFNs0xxqL1lqmV8hY1J3Mmf0/mrE7FXLFvLEnFbyCpWKeefw+cK5fiifwlI54XeHl2RyPriLti/qh7f66DEHZJavsj6fp4eMBwD0VnrFaN1jdZ5F+uVrO65us+q5EydUc9Szp/PVISxfy1bx15/HVvHXVLUX8z53+JedHzpKnYd6Xej6YuilI66g76s66h76Joi7f6jtV21JejDRn0M+gw9O+maovaZ2kuKTTW0z6xtM/R5Dynzp/PUc0fzo4vR5Us5U83lSzlRbU7Ho86UTSDnZ82W1OxV9F3Rf2xVgSxnrSLtR/WkfWhgJu2pL0/rSa9NB656GPQPB6z9s7RP05tO4E0btOfRX059O4tmqJo7nSSaOinLRfypXyt53OlPOyWhY9GLPm3nxZ02Xqdiz7YqyPtmrclY10tL1pq7T9KNC0rpqetM6aRWqSF6PQz6DcDqL6H0V6PR4nnRn07ml+u5oWNOKdOmxqedNjU61ZVxSiKRxqiNTpuLIo2aSxpmaQlh/wBOVRfrm6MR1BdEXTdaTWq5Spd6VWt3peqxOuegegxevOAAp5ddwAta/NuTZASrVk+FEAJ1Q6TMAITTTmgDEdF0VQCuUdE0XoCsSrgAOD//2Q==';


export const Description = () => {

  //estado para borde de img
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => setHasBorder(!hasBorder); //arrow function simplificada

  const cx = classNames.bind(styles); //esta funcion bind SIRVE para unir nuestro obj estilo con lo q tiene classnames 

  //creo variable con el estilo correspondiente
  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  });

  return (
    <section className={styles.Description}>
      {/* btn para cuando le doy click aprezca el borde en la img */}
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder='blur'
            blurDataURL={url}
          />
        </div>
      </button>
      
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}