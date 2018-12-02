import React from 'react';
import './Card.css'

class Card extends React.Component {
	render() {
		return(
			<div className="Card1">
				<div className="box">
					<p className="Label1">Price:</p>
					<h2 className="Price">{this.props.valor}</h2>
					<p className="type">{this.props.tipo}</p>
				</div>
			</div>
		);
	}
}


export default Card;