import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};

		console.log('contructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				// console.log(response);

				return response.json();
			})
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				)
			);
	}

	render() {
		console.log('render');
		const stateMonsters = this.state.monsters;
		const stateSearchField = this.state.searchField;

		const filteredMonsters = stateMonsters.filter((monster) => {
			let lowerCaseMonster = monster.name.toLowerCase();

			return lowerCaseMonster.includes(stateSearchField);
		});

		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						const searchField = event.target.value.toLowerCase();

						this.setState(() => {
							return { searchField };
						});
					}}
				></input>

				{filteredMonsters.map((monster) => {
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
