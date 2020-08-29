import React from 'react';
import Task from './task';
import {Droppable, Draggable} from 'react-beautiful-dnd'

class Column extends React.Component {

  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div className={`h-80 w-25 border border-secondary m-1 bg-white ${snapshot.isDragging ? 'highlighted-task' : ''}`}
            ref = {provided.innerRef}
            {...provided.draggableProps}
            >
          <div className="w-100 border-bottom"
            {...provided.dragHandleProps}>
            <h3 className="pt-2 pl-2">{this.props.column.title}</h3>
          </div>
          <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot)=>(
              <div className={`tasklist h-80 p-1 ${snapshot.isDraggingOver ? 'bg-info':''}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
                >
                {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
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
