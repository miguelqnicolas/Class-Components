import React, {Component} from 'react';
import ToDoList from './ToDoList';

class App extends Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	
	constructor() {
		super();
		this.state = {
			task: '',
			id: Date.now(),
			completed: false
		};
	};

	// handler functions here
	// changeHandler = (event) => {
	// 	this.setState.task = event.target.value;
	// };

	render() {
		return (
			<div>
				<h2>To Do:</h2>
				<ToDoList/>
			</div>
		);
	}
}

export default App;
