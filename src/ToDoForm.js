import React, {Component} from 'react';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: ''
        }
    };
    
    changeHandler = event => {
        this.setState({
            newTask: event.target.value
        });
    };

    sumbitHandler = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({
            newTask: ''
        })
    };
    
    render() {
        return (
            <form onSubmit={this.sumbitHandler}>
                <input value={this.state.newTask} type='text' name='newTask' onChange={this.changeHandler}/>
                <button type='submit'>Add</button>
            </form>
        )
    };
};

export default ToDoForm;