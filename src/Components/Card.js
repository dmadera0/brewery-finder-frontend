import React from 'react'

export default function card({brewery}) {

    // handleClick = () => {
        
    // }

    return(
        <div className='card'>
            <h3>{brewery.name}</h3>
            <h3>{brewery.city}</h3>
            <h3>{brewery.phone}</h3>
            <h3>{brewery.url}</h3>
            {/* <button onClick={handleClick}>Add to Favorites</button> */}
        </div>
    )
}