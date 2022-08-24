import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
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

	onSearchChange = (event) => {
		const searchField = event.target.value.toLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		console.log('render');
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			let lowerCaseMonster = monster.name.toLowerCase();

			return lowerCaseMonster.includes(searchField);
		});

		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={onSearchChange}
				></input>

				{/* {filteredMonsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})} */}

				<CardList />
			</div>
		);
	}
}

export default App;
