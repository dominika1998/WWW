import React from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";

class Dropdown extends React.Component {
constructor(){
	super();
	this.state = {
		displayMenu: false,
	};

	this.showDropdownMenu = this.showDropdownMenu.bind(this);
	this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
}

hideDropdownMenu() {
	this.setState({ displayMenu: false }, () => {
		document.removeEventListener('click', this.hideDropdownMenu);
    });
}

render() {
	return (
		<div className="dropdown" style={{textAlign: "center"}, {cursor: "pointer"}}>
        <div className="button"onClick={this.showDropdownMenu} style = {{padding: "15px"}}> Państwo </div>
		{
		this.state.displayMenu ? (
			<ul>
				<li><NavLink to = "/hiszpania" style={{width: "90px"}}>Hiszpania</NavLink></li>
				<li><NavLink to = "/portugalia" style={{width: "90px"}}>Portugalia</NavLink></li>
			</ul>
		):(
          null
        )}
       </div>
    );
  }
}

export default Dropdown;
