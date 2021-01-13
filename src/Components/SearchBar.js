import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./SearchBar.css"

 const SearchBar = () => {
	return (
		<TextField
		label="Search..."
		placeholder="Enter name"
		className="searchBar"
	  />
	)
}
export default SearchBar