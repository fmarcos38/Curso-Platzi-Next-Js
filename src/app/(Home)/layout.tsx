import React from 'react'
import { Hero } from 'app/components/home/Hero';
import { Description } from 'app/components/home/Description';

function HomeLayoput({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    )
}

export default HomeLayoput