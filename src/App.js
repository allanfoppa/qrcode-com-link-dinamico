import React, { useState } from 'react';

import './index.css';

function App() {

	const QRCode = require('qrcode.react');

	const [ name, setName ] = useState('')
	const [ visible, setVisible ] = useState('')
	const [ link, setLink ] = useState('')

	const handleSearch = (e) => {
		e.preventDefault()

		const xhr = new XMLHttpRequest();

		xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${name}`)
		xhr.send(null)

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {

					let response = JSON.parse(xhr.response)

					if (document.getElementById('text-not-found') != null) {
						document.getElementById('text-not-found').remove()
					}

					setLink(`https://www.pokemon.com/br/pokedex/${response.name}`)
					setVisible('display--grid')

				} else {

					setVisible('')

					let msgTarget = document.getElementById('form-search')
					let msgText = document.createElement('p')
						msgText.id = 'text-not-found'
						msgText.innerText = 'Esse pokemon não existe'
					msgTarget.appendChild(msgText)

				}
			}
		}
	}

	return (
		<div className="grid-search">
			<div>
				<form id="form-search">
					<input type="text" className="" value={name} onChange={e => setName(e.target.value)} /> <br/><br/>
					<button onClick={handleSearch}>Pesquisar</button>
				</form>
			</div>
			<div className={'display--none ' + visible}>
				<QRCode value={link} />
			</div>
		</div>
	);
}

export default App;
