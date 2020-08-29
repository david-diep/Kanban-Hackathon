import React from 'react';
import Column from './components/column'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tasks:{
        'task-1': { id: 'task-1', title:"1", content:"Take out the garbage."},
        'task-2': { id: 'task-2', title: "2", content: "Charge my phone." },
        'task-3': { id: 'task-3', title: "3", content: "Complete the hackathon." },
        'task-4': { id: 'task-4', title: "4", content: "Get a job." }
    },
      columns:{
        'column-1':{
          id: 'column-1',
          title:"To Do",
          taskIds: ['task-1','task-2','task-3','task-4']
        },
        'column-2': {
          id: 'column-2',
          title: "In Progress",
          taskIds: []
        },
        'column-3': {
          id: 'column-3',
          title: "Done",
          taskIds: []
        }
      },
      columnOrder: ['column-1', 'column-2', 'column-3']
    }
  }

  onDragEnd = result => {
    const {destination, source, draggableId, type} = result;

    if(!destination){
      return;
    }

    if(destination.droppableId === source.droppableId &&
      destination.index === source.index
      ) {
        return;
      }

    if(type === 'column'){
      const newColumnOrder = [...this.state.columnOrder]//Array.from(this.state.columnOrder)
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId)

      this.setState({columnOrder: newColumnOrder})
      return;
    }

    const startColumn = this.state.columns[source.droppableId];
    const finishColumn = this.state.columns[destination.droppableId];
    if(startColumn === finishColumn){ //if change is inside the same column
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index,1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      this.setState({
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      });
      return;
    }

  const startTaskIds = Array.from(startColumn.taskIds);
  startTaskIds.splice(source.index,1);
  const newStartColumn = {
    ...startColumn,
    taskIds:startTaskIds
  };

  const finishTaskIds = Array.from(finishColumn.taskIds);
  finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
    ...finishColumn,
    taskIds: finishTaskIds
  };

  const newState={
  columns:{
    ...this.state.columns,
    [newStartColumn.id]: newStartColumn,
    [newFinishColumn.id]: newFinishColumn
  }
}
  this.setState(newState);
}
  render(){

    return (

        <div className="app">
          <header>
            <nav className="navbar navbar-light bg-dark">
              <h2 className="text-white navbar-brand">Kanban</h2>
            </nav>
          </header>
          <div className="p-3 app">
            <DragDropContext
              onDragEnd={this.onDragEnd}
            >
              <Droppable
                droppableId="all-columns"
                direction ="horizontal"
                type="column"
              >
                {provided => (
                  <div className="row app"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >

                    {this.state.columnOrder.map((columnId, index) =>{
                      const column= this.state.columns[columnId];
                      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                      return <Column
                        key = {column.id}
                        column = {column}
                        tasks = {tasks}
                        index = {index}
                        />
                    }
                      )}

                  </div>)}
            </Droppable>
           </DragDropContext>
          </div>
        </div>


    );
}}

export default App;
