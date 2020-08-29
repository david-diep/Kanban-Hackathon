import React from 'react';
import {Draggable} from 'react-beautiful-dnd'

class Task extends React.Component {


  render() {

    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className={`
              border
              p-2
              m-2
              bg-light
              ${snapshot.isDragging ? 'highlighted-task':''}`
            }
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="border-bottom">{this.props.task.title}</div>
            <p className="p-1">{this.props.task.content}</p>
          </div>
        )}


      </Draggable>
    );
  }
}

export default Task;
