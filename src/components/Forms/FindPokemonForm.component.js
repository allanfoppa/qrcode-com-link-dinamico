import React from 'react'

import { Paragraph } from '../Foundation/Typography.component'

export default function FindPokemonForm({onClick, state, stateValue}) {
  return(
    <form id="form-search">
      <Paragraph>Pesquise pelo nome ou numero da pokédex do Pokémon</Paragraph>
      <input
        className="input-search"
        type="text"
        value={stateValue}
        onChange={state}
      /> <br/><br/>
      <button
        className="button-search"
        onClick={onClick}
      >
        Pesquisar
      </button>
    </form>
  )
}