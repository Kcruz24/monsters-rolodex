import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [
				{
					id: '12kid',
					name: 'Linda',
				},
				{
					id: '12kia',
					name: 'Bob',
				},
				{
					id: '12kib',
					name: 'Jack',
				},
				{
					id: '12kic',
					name: 'Federico',
				},
			],
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
