import React from 'react';
import Task from './task';
import {Droppable} from 'react-beautiful-dnd'

class Column extends React.Component {

  render() {
    return (<>
      <div className="h-80 w-25 border border-secondary m-1">
        <div className="w-100 border-bottom">
          <h3 className="pt-2 pl-2">{this.props.column.title}</h3>
        </div>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot)=>(
            <div className={`tasklist h-100 p-1 ${snapshot.isDraggingOver ? 'bg-info':''}`}
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
      </div>
    </>
    );
  }
}

export default Column;
