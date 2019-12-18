import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./Home/Home";
import Hiszpania from "./Hiszpania/Hiszpania";
import Portugalia from "./Portugalia/Portugalia";
import Czechy from "./Czechy/Czechy";
import Dropdown from "./Dropdown";

class App extends Component {

	
	render() {
		return (
		<HashRouter>
		<div className = "top_menu">
			<ul className="top_menu_bar">
			<li><NavLink exact to = "/home">Home</NavLink></li>
			<li><NavLink to = "/czechy">Czechy</NavLink></li>
 			<li><Dropdown className = "dropdown"/></li>
			</ul>		
		</div>
		<div className="content">
			<Route exact path = "/" component = {Home}/>
			<Route exact path = "/home" component = {Home}/>
			<Route exact path = "/czechy" component = {Czechy}/>
			<Route exact path = "/hiszpania" component = {Hiszpania}/>
			<Route exact path = "/portugalia" component = {Portugalia}/>
		</div>	
		</HashRouter>
		);
	}
}

export default App;

//https://codedaily.io/tutorials/63/Create-a-Dropdown-in-React-that-Closes-When-the-Body-is-Clicked
