import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import './App2.css';
import Scroll from '../components/Scroll';

class App2 extends React.Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		// console.log("constructor");
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users=> this.setState({robots: users}));
		// this.setState({robots: robots});
		// console.log("Comp did mount");
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
		// const filteredRobots = this.state.robots.filter(robots => {
		// 	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// }) 
		//console.log(filteredRobots);
		// console.log(event.target.value);
	}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
			<h1>Loading</h1> :
			(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
	}
}

export default App2;
