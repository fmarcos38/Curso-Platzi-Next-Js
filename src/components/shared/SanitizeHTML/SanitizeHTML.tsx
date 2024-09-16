//archivo para inyectar HTML en un componente de reat
//osea PARA cuando un dato q me viene del back como puede ser un atributo de los productos --> description: <p>Soy la descripción</p>
//componente de sanetizacion
//NO OLVIDAR de instalar la dependencia --> npm i sanitize-html

import sanitize from 'sanitize-html';

//creo un tipo para las props NO una iterface
type SanitizeHTMLProps = {
    children: string,
    tag: string,
} & HTMLAttributes<HTMLElement>;

import React, { createElement, HTMLAttributes } from 'react'

function SanitizeHTML({tag, children, ...rest}: SanitizeHTMLProps) {

    const sanitizedHTML = sanitize(children, {
        allwedTags: ['b', 'p', 'em', 'strong'],
    });

    return createElement(
        tag,        
        {...rest},
        sanitizedHTML
    )
}

export default SanitizeHTML