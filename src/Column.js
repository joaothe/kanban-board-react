import React from 'react'
import Card from './Card'

class Column extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({ 
			mouseHover: false,
			hideButtons: true,
		})		
	}

	componentWillReceiveProps(nextProps) {
		this.state = ({ mouseHover: false, hideButtons: true })
	}

	createCards() {
		const tasks = [...this.props.tasks]
		return tasks.map((task) => {
			return (
				<Card
					task={task}
					onDragEnd={this.props.onDragEnd}
				/>
			)
		})
	}

	render() {
		return  (
	  <div		
				className="kanban-column"
				onDragEnter={(e) => {this.setState({ mouseHover: true }); this.props.onDragEnter(e, this.props.stage);}}
				onDragExit={(e) => {this.setState({ mouseHover: false });}}
			>
				<h3>{this.props.name}</h3>
				<button className={this.state.hideButtons ? '' : 'hide-new-task'} onClick={() => this.setState({hideButtons: false})}>Add new task</button>
				<input type="text" name="name" placeholder = "Task Name..." className={this.state.hideButtons ? 'hide-new-task' : ''} onChange={(e) => this.props.setField(e, this.props.stage)}/>
				<input type="text" name="description" placeholder = "Task Description..." className={this.state.hideButtons ? 'hide-new-task' : ''}  onChange={(e) => this.props.setField(e, this.props.stage)}/>
				<br/>
				<button className={this.state.hideButtons ? 'hide-new-task' : ''} onClick = {this.props.createTask}>Add</button>
				<button className={this.state.hideButtons ? 'hide-new-task' : 'cancel-task'} onClick = {() => this.setState({hideButtons: true})}>Cancel</button>
				{this.createCards()}
				<br/>
      </div>);
	}
}

export default Column;