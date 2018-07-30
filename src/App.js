import React from 'react';
import Board from './Board';
import './App.css';

class KanbanProject extends React.Component {
	render(){
		
		return(
      <div className="space-direction">
        <h2 className="tinge-green">Kanban Board</h2>
				<Board />
      </div>
		);
	}
}

export default KanbanProject;
