import React from 'react';
import './Texto.css';

class Texto extends React. Component {
	constructor() {
		super();
		this.state = {
			animal: 'Cachorro'
		}
		var animais = ['Cachorro','Gato', 'Passaro', 'Peixe'];

		setInterval(() => {

			this.setState(previousState => {
				var n = Math.floor(Math.random() * animais.length);
			 

				return { animal: animais[n] };
			});

		}, 1000);
	}


	render() {
		return(
			<div className="textao">	
				<h3 className="frase">Cuidamos com carinho do seu:</h3>
				<h2 className="myState">{this.state.animal}</h2>
			</div>	
		);
	}
}

export default Texto;