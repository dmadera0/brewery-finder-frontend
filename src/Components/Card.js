import React from 'react'

export default function card({brewery, onClick}) {

    return(
        <div className='card'>
            <h3>{brewery.name}</h3>
            <h3>{brewery.city}</h3>
            <div className="phone-number">
                <label>Phone Number:   </label>
                <h3>{brewery.phone}</h3>
            </div>
            
            <a href={brewery.url}>Brewhouse Website</a>
            <button 
                className="like-button"
                onClick={() => onClick(brewery)}
            >❤️</button>
        </div>
    )
}