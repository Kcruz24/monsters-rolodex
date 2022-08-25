import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
	render() {
		console.log(this.props);
		console.log('render from CardList');

		const { monsters } = this.props;

		return (
			<div className="card-list" key={monsters.id}>
				{monsters.map((monster) => {
					return <Card key={monster.id} monster={monster} />;
				})}
			</div>
		);
	}
}

export default CardList;
