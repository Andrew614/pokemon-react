import React from 'react'

const Pokecard = ({ id, name, type, base_experience }) => {
    const pokemonId = ("00" + id).slice(-3)
    const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`
    console.log(name)
    return (
        <>
            <h3 className='card__title'>{name}</h3>
            <img className='card__img' src={imgSrc} alt={name} />
            <ul className='card__list'>
                <li className='card__list-item'>Type: {type}</li>
                <li className='card__list-item'>EXP: {base_experience}</li>
            </ul>
        </>
    )
}


export default Pokecard