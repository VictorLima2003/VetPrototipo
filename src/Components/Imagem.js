import React from 'react';
import './Imagem.css';

class Imagem extends React.Component {
	render() {
		return(
			<img src={this.props.local} className="clinicas-img" />	
		);
	}
}

export default Imagem;