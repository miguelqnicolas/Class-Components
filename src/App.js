import React, {Component} from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

class App extends Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	
	constructor() {
		super();
		this.state = {
			tasks: [
				{
					task: 'Laundry',
					id: Date.now(),
					completed: false
				}
			]
		};
	};

	addTask = task => {
		const newTask = {
			task: task,
			id: Date.now(),
			completed: false
		};
		
		this.setState({
			tasks: [...this.state.tasks, newTask]
		});
	};

	toggleCompleted = id => {
		this.setState ({
			todos: this.state.tasks.map(item => {
				if (item.id === id) {
					return {...item, completed: !item.completed}
				}
				return item;
			})
		})
	  }

	render() {
		return (
			<div>
				<h2>To Do:</h2>
				<ToDoForm addTask={this.addTask}/>
				<ToDoList state={this.state.tasks} toggleCompleted={this.toggleCompleted}/>
			</div>
		);
	}
}

export default App;
