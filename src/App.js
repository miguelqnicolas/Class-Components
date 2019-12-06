import React, {Component} from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

class App extends Component {
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
		this.setState({
			tasks: this.state.tasks.map(item => {
				if (item.id === id) {
					return {...item, completed: !item.completed}
				}
				return item;
			})
		})
	};

	removeCompleted = () => {
		this.setState({
			tasks: this.state.tasks.filter(item => {
				return item.completed === false;
			})
		});
	};

	render() {
		return (
			<div>
				<h2>To Do:</h2>
				<ToDoForm addTask={this.addTask}/>
				<ToDoList state={this.state.tasks} toggleCompleted={this.toggleCompleted}/>
				<button onClick={this.removeCompleted}>Remove Completed</button>
			</div>
		);
	}
}

export default App;
