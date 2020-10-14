import React from 'react'
import Card from './Card'

export default function breweries{

    const displaybreweries=()={
    return <Card key={brewery.brew_id}/>
    }

    return(
        <div className="breweries">
            {displaybreweries()}
        </div>
    )
}