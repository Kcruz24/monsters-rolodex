import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
	const [searchField, setSearchField] = useState(''); // [value, setValue]
	const [title, setTitle] = useState('');
	const [monsters, setMonsters] = useState([]); // [value, setValue]
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	console.log('Render')

	// Only runs when the function is mounted, because of the empty array
	// in the second parameter.
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			let lowerCaseMonster = monster.name.toLowerCase();

			return lowerCaseMonster.includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase();

		setSearchField(searchFieldString);
	};

	const onTitleChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase();

		setTitle(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">{ title }</h1>

			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder="search monsters"
				className="search-box"
			/>
			<br />
			<SearchBox
				onChangeHandler={onTitleChange}
				placeholder="set title"
				className="title-search-box"
			/>

			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: '',
// 		};

// 		// console.log('contructor');
// 	}

// 	componentDidMount() {
// 		// console.log('componentDidMount');
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((response) => {
// 				return response.json();
// 			})
// 			.then((users) =>
// 				this.setState(() => {
// 					return { monsters: users };
// 				})
// 			);
// 	}

// 	onSearchChange = (event) => {
// 		const searchField = event.target.value.toLowerCase();

// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		// console.log('render');
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;

// 		const filteredMonsters = monsters.filter((monster) => {
// 			let lowerCaseMonster = monster.name.toLowerCase();

// 			return lowerCaseMonster.includes(searchField);
// 		});

// 		return (
// 			<div className="App">
// 				<h1 className="app-title">Monsters Rolodex</h1>

// 				<SearchBox
// 					onChangeHandler={onSearchChange}
// 					placeholder="search monsters"
// 					className="search-box"
// 				/>

// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

export default App;
