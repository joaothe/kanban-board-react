import React from 'react'
import Column from './Column'


class Board extends React.Component {
	constructor(props) {
		super(props)
		this.state = ({
			isLoading: true,
			dragCol: 0,
			tasks: [
				{
					name: 'Task1',
					description: 'This is a kanban project done with ReactJS. I hope you like it. Thank you very much!',
					task_stage: 1
				},
				{
					name: 'Task2',
					description: 'This is a kanban project done with ReactJS. I hope you like it. Thank you very much!',
					task_stage: 1
				},
				{
					name: 'Task3',
					description: 'This is a kanban project done with ReactJS. I hope you like it. Thank you very much!',
					task_stage: 2
				},
				{
					name: 'Task4',
					description: 'This is a kanban project done with ReactJS. I hope you like it. Thank you very much!',
					task_stage: 2
				},
				{
					name: 'Task5',
					description: 'This is a kanban project done with ReactJS. I hope you like it. Thank you very much!',
					task_stage: 3
				},
				{
					name: 'Task6',
					description: 'This is a kanban project done with ReactJS. I hope you like it. Thank you very much!',
					task_stage: 3
				},
				{
					name: 'Task7',
					description: 'This is a kanban project done with ReactJS. I hope you like it. Thank you very much!',
					task_stage: 4
				},
			],
		})

		this.setField = this.setField.bind(this)
		this.createTask = this.createTask.bind(this)
		this.handleDragEnter = this.handleDragEnter.bind(this)
		this.handleDragEnd = this.handleDragEnd.bind(this)


		this.item = {
				name: '',
				description: '',
				task_stage: 1
			}	
			
	

		this.columns = [
			{name: 'Backlog', stage: 1},
			{name: 'To Do', stage: 2},
			{name: 'In Progress', stage: 3},
			{name: 'Testing', stage: 4},
			{name: 'Done', stage: 5},
		]
	}

	componentWillMount() {
		this.setState({isLoading: false })
	}

	
	handleDragEnter(e, stageVal) {
		this.setState({ dragCol: stageVal })
	}

	createTask = () => {
		if(this.item.name){
			this.setState({
				tasks: [...this.state.tasks, this.item]
			})
		}
	}

	setField = (e, val) => {
		this.item = {...this.item, 
			[e.target.name]: e.target.value,
			task_stage: val
		}
	}
	
	handleDragEnd(e, task) {
		const updatedTasks = [...this.state.tasks]
		updatedTasks.find((obj) => { return obj.name === task.name }).task_stage = this.state.dragCol
		this.setState({ tasks: updatedTasks })
	}

	render() {
		if (this.state.isLoading) {
			return (<h4>Keep calm, Loading...</h4>);
		}

		return  (
      <div>
				{this.columns.map((column) => {
					return (
						<Column
							name={ column.name }
							stage={ column.stage }
							tasks={this.state.tasks.filter((task) => {return parseInt(task.task_stage, 10) === column.stage}) }
							onDragEnd={ this.handleDragEnd }
							onDragEnter={ this.handleDragEnter }
							createTask={this.createTask}
							setField={this.setField}
							key={ column.stage }
						/>
					)
				})}
      </div>
		);
	}
}

export default Board;