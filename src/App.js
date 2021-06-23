import React, { useState } from 'react';

import ImageLogo from './assets/images/logo-fontmeme.png'
import FindPokemonForm from './components/Forms/FindPokemonForm.component';

import Image from './components/Media/Image.component'

import { getPokemonLink } from './services/getPokemonLink.service'

function App() {

	const QRCode = require('qrcode.react');

	const [ name, setName ] = useState('')
	const [ visible, setVisible ] = useState('')
	const [ link, setLink ] = useState('')

	const callGetPokemonLink = (e) => {
		e.preventDefault()

		let textNotfound = document.getElementById('text-not-found')
		if (textNotfound != null) textNotfound.remove()

		getPokemonLink(name).then((response) => {
			if (response.status === 200) response.json().then((res) => findPokemon(res))
			else notFoundPokemon()
		})

		const findPokemon = data => {
			setLink(`https://www.pokemon.com/br/pokedex/${data.name}`)
			setVisible('display--grid')
		}

		const notFoundPokemon = () => {
			setVisible('')
			let msgTarget = document.getElementById('form-search')
			let msgText = document.createElement('p')
			msgText.id = 'text-not-found'
			msgText.innerText = 'Esse pokemon não existe'
			msgTarget.appendChild(msgText)
		}
	}

	return (
		<div className="grid-search">
			<div>
				<Image src={ImageLogo} alt="Logo" />
			</div>
			<div>
				<FindPokemonForm
					stateValue={name}
					state={e => setName(e.target.value)}
					onClick={callGetPokemonLink}
				/>
				<div className={'display--none qr-code__container ' + visible}>
					<QRCode value={link} />
				</div>
			</div>
		</div>
	);
}

export default App;
