import React from 'react';

class Item extends React.Component {
	render() {
		return(
			<div>
				<img src={this.props.icon}/>
				<p>Lorem Lorem Lorem Lorem </p>
			</div>			
		);
	}
}

export default Item;