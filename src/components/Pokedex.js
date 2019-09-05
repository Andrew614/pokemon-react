import React from 'react'
import Pokecard from './Pokecard'
import Footer from './Footer'
import './Pokedex.css'

const Pokedex = ({ pokemonList }) => {
    return (
        <div className='Pokedex'>
            <h1 className='title'>Pokedex</h1>
            <div className='pokemon-list'>
                {pokemonList.map((pokemon) => (
                    <div className='card' key={pokemon.id}>
                        <Pokecard id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            base_experience={pokemon.base_experience}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Pokedex