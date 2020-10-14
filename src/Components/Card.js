import React from 'react'

export default function card({brewery, addToFavorites}) {

    const handleClick = () => {
        addToFavorites(brewery)
    }

    return(
        <div className='card'>
            <h3>{brewery.name}</h3>
            <h3>{brewery.city}</h3>
            <h3>{brewery.phone}</h3>
            <h3>{brewery.url}</h3>
            <button onClick={handleClick}>❤️</button>
        </div>
    )
}