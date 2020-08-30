import React from 'react';
import Task from './task';
import {Droppable, Draggable} from 'react-beautiful-dnd'

class Column extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    const id = e.target.id
    const splitId = id.split('-')
    if(splitId[0] === "column"){
      this.props.addCard(id)
    }
  }

  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className={`
              col-min
              overflow-y
              h-80
              w-25
              border
              border-secondary
              m-1
              bg-white
              ${snapshot.isDragging ? 'highlighted-task' : ''}
            `}
            ref = {provided.innerRef}
            {...provided.draggableProps}
            >
          <div className="w-100 border-bottom d-flex justify-content-between"
            {...provided.dragHandleProps}>
            <h3 className="pt-2 pl-2">{this.props.column.title}</h3>
            <div className={`m-2`}>
              <button
                id={this.props.column.id}
                className={`btn btn-primary`}
                onClick={this.handleClick}
              >
                +
              </button>
            </div>
          </div>
          <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot)=>(
              <div
                className={`
                  tasklist
                  h-80
                  p-1
                  ${snapshot.isDraggingOver ? 'bg-info':''}
                `}
                ref={provided.innerRef}
                {...provided.droppableProps}
                >
                {this.props.tasks.map((task, index) => (
                <Task
                key={task.id}
                task={task}
                index={index}
                changeTaskText={this.props.changeTaskText}
                changeTaskTitle={this.props.changeTaskTitle}
                 />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>)}
      </Draggable>
    );
  }
}

export default Column;
