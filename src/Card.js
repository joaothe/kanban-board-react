import React from 'react'

class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapsed: true,
		}
	}

	render() {
		return (
			<div
				className="card-style"
				draggable={true}
				onDragEnd={(e) => {this.props.onDragEnd(e, this.props.task)}}
			>
				<div><h4>{this.props.task.name}</h4></div>
				{(this.state.collapsed)
					? null
					: (<div><span>Description: </span><small>{ this.props.task.description }</small></div>)
				}
				<div
					
					onClick={(e) => {this.setState({collapsed: !this.state.collapsed})}}
				> 
					{(this.state.collapsed) ? String.fromCharCode('43') : String.fromCharCode('45')}
				</div>
			</div>
		)
	}
}

export default Card