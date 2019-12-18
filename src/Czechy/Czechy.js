import React from "react";   
import a from './1.jpg';
import b from './2.jpg';
import c from './3.jpg';
import d from './4.jpg';
import e from './5.jpg';
import f from './6.jpg';
import g from './7.jpg';
import h from './8.jpg';
import "./Czechy.css";
import TextFileReader from "../TextFileReader";

const CommentForm = ({addTodo}) => {
    //Input Tracker
    let input;
    //Return JSX
    return (
        <form onSubmit = {(e) => {
            e.preventDefault();
            addTodo(input.value);
            input.value = '';
        }}>
		<label>Twój komentarz:</label>
        <input className="form-control" style = {{marginLeft: "10px"}} ref={node => {
                input = node;}}/>
        <br/>
        </form>
    );
};

const Comment = ({comment}) => {
    // Each Todo
    return (<p>{comment.text}</p>);
}

const CommentList = ({comments, remove}) => {
    // Map through the comments
    // Tworzy tablicę koponentów Todo
    const commentNode = comments.map((comment) => {
        return (<Comment comment={comment} key={comment.id}/>)
    });

    return (commentNode);
}

window.id = 0;
class Czechy extends React.Component{

	constructor(props) {
		super(props);
		this.done = 0
        this.state = {
            im1: [],
			im2: [],
			im3: [],
			im4: [],
			im5: [],
			im6: [],
			im7: [],
			im8: [],
        }
		
	}
	
	componentDidMount(){
        this.setState({im1: this.state.im1});
		this.setState({im2: this.state.im2});
		this.setState({im3: this.state.im3});
		this.setState({im4: this.state.im4});
		this.setState({im5: this.state.im5});
		this.setState({im6: this.state.im6});
		this.setState({im7: this.state.im7});
		this.setState({im8: this.state.im8});
    }
    // Add Comment handler
    // Taki sposób definiowania funkcji addTodo sprawia, że `this` jest w niej prawidłowo ustawiony
    addTodo = (val) => {
        // Assemble im1
        // Update im1
		var varSliced = val.slice(1);
		const comment = {text: varSliced, id: window.id++};
		if(val[0] === "1") {
			this.setState({im1: this.state.im1.concat([comment])});
		} else if(val[0] === "2") {
			this.setState({im2: this.state.im2.concat([comment])});
		} else if(val[0] === "3") {
			this.setState({im3: this.state.im3.concat([comment])});
		} else if(val[0] === "4") {
			this.setState({im4: this.state.im4.concat([comment])});
		} else if(val[0] === "5") {
			this.setState({im5: this.state.im5.concat([comment])});
		} else if(val[0] === "6") {
			this.setState({im6: this.state.im6.concat([comment])});
		} else if(val[0] === "7") {
			this.setState({im7: this.state.im7.concat([comment])});
		} else if(val[0] === "8") {
			this.setState({im8: this.state.im8.concat([comment])});
		}
    }
	
	
	render() {
		return (
		
			<div>
			<div id = "text">
			<TextFileReader txt = {require("./CzechyTekst.txt")}/>
			<br></br>
			<CommentForm addTodo = {this.addTodo}/>
			<br></br>
			</div>
			<ul className = "zawartosc">
			<li style = {{display: "inline-block"}}>
				<ul>
					<li>
						<img alt='icon' src={a}/>
						<p>Zdjęcie 1.</p>
						
					</li>
					<li>
						<img alt='icon' src={b}/>
						<p>Zdjęcie 2.</p>
					</li>
					<li>
						<img alt='icon' src={c}/>
						<p>Zdjęcie 3.</p>
					</li>
					<li>
						<img alt='icon' src={d}/>
						<p>Zdjęcie 4.</p>
					</li>
					<li>
						<img alt='icon' src={e}/>
						<p>Zdjęcie 5.</p>
					</li>
					<li>
						<img alt='icon' src={f}/>
						<p>Zdjęcie 6.</p>
					</li>
					<li>
						<img alt='icon' src={g}/>
						<p>Zdjęcie 7.</p>
					</li>
					<li>
						<img alt='icon' src={h}/>
						<p>Zdjęcie 8.</p>
					</li>
				</ul>
				</li>
				<li>
				<p>Komentarze do Zdjęcia1:</p>
				<CommentList comments = {this.state.im1}/>
				<p>Komentarze do Zdjęcia2:</p>
				<CommentList comments = {this.state.im2}/>
				<p>Komentarze do Zdjęcia3:</p>
				<CommentList comments = {this.state.im3}/>
				<p>Komentarze do Zdjęcia4:</p>
				<CommentList comments = {this.state.im4}/>
				<p>Komentarze do Zdjęcia5:</p>
				<CommentList comments = {this.state.im5}/>
				<p>Komentarze do Zdjęcia6:</p>
				<CommentList comments = {this.state.im6}/>
				<p>Komentarze do Zdjęcia7:</p>
				<CommentList comments = {this.state.im7}/>
				<p>Komentarze do Zdjęcia8:</p>
				<CommentList comments = {this.state.im8}/>
				</li>
				</ul>
			</div>
		);
	}
}

export default Czechy;