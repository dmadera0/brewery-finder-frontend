import React from 'react'
import Card from './Card'

export default function Favoritedbreweries({breweries, removeFromFavorites}) {
    const displaybreweries = () => {
        return breweries.map(brewery => {
            return (
                <Card 
                    key={brewery.id} 
                    brewery={brewery}
                    onClick={removeFromFavorites}
                />
            )
        })
    }

    return(
        <div className="breweries">
            {displaybreweries()}
        </div>
    )
}