import React, { Component, Fragment } from "react";
import TextFileReader from "../TextFileReader";
import '../Hiszpania/HiszpaniaStyle.css';
import { render } from "react-dom";
import request from "superagent";
import axios from 'axios';
import a from './port.jpg';

function capital(city) {
	if(city.capital === "primary") {
		return "To jest stolica państwa.";
	} else if(city.capital === "admin") {
		return "To jest stolica wspólnoty autonomicznej.";
	} else if(city.capital === "minor") {
		return "To jest powiat.";
	} else {
		return "Po prostu hiszpańskie miasto";
	}
}

function population(city) {
	if(city.population === "") {
		return "Brak danych w bazie!";
	} else {
		return city.population;
	}
}

class Portugalia extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasMore: true,
			isLoading: false,
			cities: [],
		};
		
		window.onscroll = () => {
			const {
				loadCities,
				state: {
					isLoading,
					hasMore,
				},
			} = this;
			if(isLoading || !hasMore) return;
			// Checks that the page has scrolled to the bottom
			if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
				loadCities();
			}
		};
	}
	
	componentWillMount() {
		this.loadCities();
	}
	
	loadCities = () => {
		var data = require("./pt.json");
		console.log(data);
		const nextCity = data.map(city => (
		{
			city: city.city,
			primary: city.city,
			admin: city.admin,
			capital: capital(city),
			admin: city.admin,
			population: population(city),
		}));
		
		this.setState({
			hasMore: (this.state.cities.length < 286),
			isLoading: false,
			cities: [
				...this.state.cities,
				...nextCity,
			]
		});
	};
	
	render() {
		const {
			hasMore,
			isLoading,
			cities,
		} = this.state;
		return (
			<div style = {{display: "inline-block"}}>
			<div style = {{float: "right"}}>
			<img src = {a}/>
			</div>
			<div id = "text">
			<TextFileReader txt = {require("./PortugaliaText.txt")}/>
			{ cities.map (city => (
				<Fragment key = {city.city}>
					<hr/>
					<div>
					<p>Miasto: {city.city}</p>
					<p> {city.capital} ( {city.admin} )</p>
					<p>Ilość mieszkańców: {city.population}</p>
					</div>
				</Fragment>
			))}
			{isLoading &&
				<div>Loading...</div>
			}
			{!hasMore &&
			<hr/>
			}
			<p>Koniec strony, nie ma co rozwijać :)</p>
			</div>
			</div>
		);
	}
}
export default Portugalia;
