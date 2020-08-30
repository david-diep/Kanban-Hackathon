import React from 'react';
import Column from './components/column'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'

class App extends React.Component {
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this)
    this.addColumn = this.addColumn.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state={
      taskSerial: 5,
      tasks:{
        'task-1': { id: 'task-1', title:"1", content:"Take out the garbage."},
        'task-2': { id: 'task-2', title: "2", content: "Charge my phone." },
        'task-3': { id: 'task-3', title: "3", content: "Complete the hackathon." },
        'task-4': { id: 'task-4', title: "4", content: "Get a job." }
      },
      columnSerial: 4,
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
      columnOrder: ['column-1', 'column-2', 'column-3'],
      deleteColumnButton: false
    }
    this.changeTaskTitle=this.changeTaskTitle.bind(this);
    this.changeTaskText=this.changeTaskText.bind(this);
    this.showDeleteColumn=this.showDeleteColumn.bind(this)
    this.deleteColumn=this.deleteColumn.bind(this)
  }

  changeTaskTitle(id,title){
    const newTasks = {...this.state.tasks}
    const newTask = { id: id, title: title, content: newTasks[id].content}
    newTasks[id]=newTask;
    this.setState({tasks:newTasks})
  }

  changeTaskText(id,content){
    const newTasks = {...this.state.tasks}
    const newTask = { id: id, title: newTasks[id].title, content: content }
    newTasks[id] = newTask;
    this.setState({ tasks: newTasks })
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

  addCard(column){
    let taskSerial = this.state.taskSerial
    const newTaskSerial = taskSerial + 1
    const newTasks = JSON.parse(JSON.stringify(this.state.tasks))
    newTasks.[`task-${taskSerial}`] = {
      id: `task-${taskSerial}`,
      title: `${taskSerial}`,
      content: "New Card"
    }
    const newColumns = JSON.parse(JSON.stringify(this.state.columns))
    newColumns[column].taskIds.unshift(`task-${taskSerial}`)
    this.setState({
      taskSerial: newTaskSerial,
      tasks: newTasks,
      columns: newColumns
    })
  }

  handleClick(e){
    if(e.target.id === "add-column"){
      this.addColumn()
    }
  }

  deleteColumn(id){
    const newColumns={...this.state.columns}
    const newTasks={...this.state.tasks}
    const newColumnOrder=[...this.state.columnOrder]
    const deleteOrderIndex= newColumnOrder.findIndex((col)=>col===id)
    newColumnOrder.splice(deleteOrderIndex,1)
    const deleteTasks=newColumns[id].taskIds;
    for(let i=0; i<deleteTasks.length; i++){
      delete newTasks[deleteTasks[i]]
    }
    delete newColumns[id];
    this.setState({columns:newColumns,tasks:newTasks,columnOrder:newColumnOrder})
  }

  showDeleteColumn(){
    this.setState(prevState=>{return {deleteColumnButton:!prevState.deleteColumnButton}})
  }

  addColumn(){
    const columnSerial = this.state.columnSerial
    const newColumnSerial = columnSerial + 1
    const newColumns = JSON.parse(JSON.stringify(this.state.columns))
    const newColumnOrder = this.state.columnOrder.splice(0)
    newColumns[`column-${columnSerial}`] = {
      id: `column-${columnSerial}`,
      title: 'New Column',
      taskIds: []
    }
    newColumnOrder.push(`column-${columnSerial}`)
    this.setState({
      columns: newColumns,
      columnSerial: newColumnSerial,
      columnOrder: newColumnOrder
    })
  }

  render(){

    return (

        <div className="app overflow-x">
          <header>
            <nav className={`
              navbar
              navbar-light
              bg-dark
              d-flex
              navbar-horizontal-fixed
              justify-content-between
              align-items-center
            `}
            id="navbar"
            >
              <h2 className="text-white navbar-brand">Kanban</h2>
              <div>
                <h5 className="text-white navbar-brand">Add New Column</h5>
                <button
                  onClick={this.handleClick}
                  className="btn btn-primary"
                  id="add-column"
                >
                <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              <button className="btn btn-danger ml-3" onClick={this.showDeleteColumn}><h5>Toggle Column Delete</h5></button>
              </div>
            </nav>
            {/* this is hacky and should be replaced with a better solution */}
            <div className="navbar-space"></div>
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
                  <div
                    className="row flex-nowrap"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {this.state.columnOrder.map((columnId, index) =>{
                      const column= this.state.columns[columnId];
                      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                      return <Column
                        addCard={this.addCard}
                        key = {column.id}
                        column = {column}
                        tasks = {tasks}
                        index = {index}
                        changeTaskText = {this.changeTaskText}
                        changeTaskTitle = {this.changeTaskTitle}
                        deleteColumn={this.deleteColumn}
                        deleteColumnButton={this.state.deleteColumnButton}
                        />
                    })}
                  </div>)}
            </Droppable>
          </DragDropContext>
          </div>
        </div>


    );
}}

export default App;
