import './search-box.styles.css';

const SearchBox = (props) => {
	const { onChangeHandler, className, placeholder } = props;

	return (
		<input
			className={`search-box ${className}`}
			type="search"
			placeholder={placeholder}
			onChange={onChangeHandler}
		></input>
	);
};

export default SearchBox;
