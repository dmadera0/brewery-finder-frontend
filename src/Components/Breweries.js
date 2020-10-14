import React from 'react'
import Card from './Card'

export default function Breweries({breweries, addToFavorites}) {
    const displaybreweries = () => {
        return breweries.map(brewery => {
            return (
                <Card 
                    key={brewery.id} 
                    brewery={brewery}
                    addToFavorites={addToFavorites}
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