import React, { Component, Fragment } from "react";
import TextFileReader from "../TextFileReader";
import './Home.css';
import { render } from "react-dom";
import request from "superagent";
import axios from 'axios';

class Home extends Component {
	render() {
		return (
			<div id = "text">
			<TextFileReader txt = {require("./HomeText.txt")}/>
			
			</div>
		);
	}
}

export default Home;
