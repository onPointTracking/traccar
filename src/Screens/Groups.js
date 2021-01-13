import React from 'react';
import Header from '../Header';
import Table from "../Components/Table";
import SearchBar from "../Components/SearchBar";
import {Container} from "@material-ui/core";

const  Groups = ()=> {
	return (
		<>
		<Header />
		<Container style={{display:"grid",placeItems:"center"}}>
		<SearchBar />
		<Table />
		</Container>
		</>
	)
}

export default Groups
