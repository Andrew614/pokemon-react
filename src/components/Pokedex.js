import React from 'react'
import Pokecard from './Pokecard'

const Pokedex = ({ pokemonList }) => {
    return (
        <div>
            <h1>Pokedex</h1>
            {pokemonList.map((pokemon) => (
                <section className='card' key={pokemon.id}>
                    <Pokecard id={pokemon.id}
                        name={pokemon.name}
                        type={pokemon.type}
                        base_experience={pokemon.base_experience}
                    />
                </section>
            ))}
        </div>
    )
}

export default Pokedex