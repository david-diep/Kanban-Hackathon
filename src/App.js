import React from 'react';
import Column from './components/column'
import  { DragDropContext, Droppable} from 'react-beautiful-dnd'
import TaskDetails from './components/task-details'
import ContextMenu from './components/context-menu'
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this)
    this.addColumn = this.addColumn.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.displayTaskDetails = this.displayTaskDetails.bind(this)
    this.changeTaskData = this.changeTaskData.bind(this);
    this.showDeleteColumn = this.showDeleteColumn.bind(this);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.displayContext = this.displayContext.bind(this)
    this.moveTasksColumn = this.moveTasksColumn.bind(this);
    this.state={
      taskSerial: 5,
      tasks:{
        'task-1': { id: 'task-1', title:"Take out the garbage.", content:""},
        'task-2': { id: 'task-2', title: "Charge my phone.", content: "" },
        'task-3': { id: 'task-3', title: "Complete the hackathon.", content: "" },
        'task-4': { id: 'task-4', title: "Get a job.", content: "" }
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
      taskDetails:{
        display: false,
        taskId: null
      },
      deleteColumnButton: false,
      displayContext:{
        display: false,
        contextId: null,
        pos:{}
      }
    }


  }



  changeTaskData(id, title, content){
    const newTasks = JSON.parse(JSON.stringify(this.state.tasks))
    const newTask = { id: id, title: title, content: content}
    newTasks[id]=newTask;
    this.setState({ tasks: newTasks }, () => toast.success("Task Updated!"))

  }

  displayContext(display, contextId, xPos, yPos){
    this.setState({
      displayContext:{
        display: display,
        contextId: contextId,
        pos: {
          xPos: xPos,
          yPos: yPos
        }
      }
    })
  }


  componentDidUpdate(prevState){
    if(this.state !== prevState){
      const appState = JSON.stringify(this.state)
      localStorage.savedState= appState
    }
  }

  displayTaskDetails(bool, taskId){
    const newTaskDetails = {
      display: bool,
      taskId: taskId
    }
    this.setState({taskDetails: newTaskDetails})
  }

  deleteTask(id){
    const newTasks = JSON.parse(JSON.stringify(this.state.tasks))
    delete newTasks[id];
    const newColumns = JSON.parse(JSON.stringify(this.state.columns))
    for(let column in newColumns){
      const deleteIndex = newColumns[column].taskIds.findIndex((taskId)=>taskId===id)
      if(deleteIndex>=0){
        newColumns[column].taskIds.splice(deleteIndex,1)
        break;
      }
    }
    this.setState({ tasks: newTasks, columns: newColumns }, () => toast.error("Task Deleted :("))
  }

  moveTasksColumn(originId, targetId) {
    const newColumns = JSON.parse(JSON.stringify(this.state.columns))
    const ToMoveTasks = newColumns[originId].taskIds
    newColumns[originId].taskIds = [];
    const targetTasks = newColumns[targetId].taskIds.concat(ToMoveTasks)
    newColumns[targetId].taskIds = targetTasks;
    this.setState({ columns: newColumns })
  }

  componentDidMount(){
    let savedState = localStorage.savedState
    if(!savedState){
      const state = JSON.stringify(this.state)
      localStorage.savedState = state
      return
    } else {
      savedState = JSON.parse(savedState)
      this.setState({
        taskSerial: savedState.taskSerial,
        tasks: savedState.tasks,
        columnSerial: savedState.columnSerial,
        columns: savedState.columns,
        columnOrder: savedState.columnOrder,
        taskDetails: {display: false, taskId: null},
        displayContext: {
          display: false,
          contextId: null,
          pos: {}
        }
      })
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

  addCard(column){
    let taskSerial = this.state.taskSerial
    const newTaskSerial = taskSerial + 1
    const newTasks = JSON.parse(JSON.stringify(this.state.tasks))
    newTasks.[`task-${taskSerial}`] = {
      id: `task-${taskSerial}`,
      title: `Click to edit New Card`,
      content: ""
    }
    const newColumns = JSON.parse(JSON.stringify(this.state.columns))
    newColumns[column].taskIds.unshift(`task-${taskSerial}`)
    this.setState({
      taskSerial: newTaskSerial,
      tasks: newTasks,
      columns: newColumns
    }, () => toast.info("New Task Added!"))

  }


  handleClick(e){
    if(e.target.id === "add-column"){
      this.addColumn()
    }
    let inContext = false
    let node = e.target
    while (node){
      if(node.id === 'context'){
        inContext = true
        break
      }
      node = node.parentNode
    }
    if(!inContext){
      this.setState({
        displayContext: {
          display: false,
          contextId: null,
          pos: {}
        }
      })
    }
  }

  deleteColumn(id){
    const newColumns = JSON.parse(JSON.stringify(this.state.columns))
    const newTasks = JSON.parse(JSON.stringify(this.state.tasks))
    const newColumnOrder=[...this.state.columnOrder]
    const deleteOrderIndex= newColumnOrder.findIndex((col)=>col===id)
    newColumnOrder.splice(deleteOrderIndex,1)
    const deleteToTasks=newColumns[id].taskIds;
    for(let i=0; i<deleteToTasks.length; i++){
      delete newTasks[deleteToTasks[i]]
    }
    delete newColumns[id];
    this.setState({
      columns:newColumns,
      tasks:newTasks,
      columnOrder:newColumnOrder
    }, () => toast.error("Column Deleted :("))

  }

  showDeleteColumn(){
    if (!this.state.deleteColumnButton) {
      toast.warn("Columns can now be deleted?!");
    }
    this.setState(prevState=>{
      return {deleteColumnButton:!prevState.deleteColumnButton}
    })
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
    }, () => toast.info("New Column Added!"))

  }

  render(){

    return (<>

        <div className="app overflow-x" onClick={this.handleClick}>
          {this.state.displayContext.display ?
            <ContextMenu
              moveTasksColumn={this.moveTasksColumn}
              displayContext={this.displayContext}
              columns={this.state.columns}
              pos={this.state.displayContext.pos}
              id={this.state.displayContext.contextId}
            /> :
            <></>}
          <header>

            <nav className={`
              navbar
              navbar-light
              nav-z
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
                  className="btn btn-primary"
                  id="add-column"
                >
                <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              <button className="btn btn-danger ml-3" onClick={this.showDeleteColumn}><h5>Toggle Column Delete</h5></button>
              </div>
            </nav>
            <div className="navbar-space"></div>
          </header>

          {this.state.taskDetails.display &&
          <TaskDetails
            changeTaskData={this.changeTaskData}
            displayTaskDetails={this.displayTaskDetails}
            task={this.state.tasks[this.state.taskDetails.taskId]}
            deleteTask={this.deleteTask}
          /> }
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
                        displayContext={this.displayContext}
                        addCard={this.addCard}
                        key = {column.id}
                        column = {column}
                        tasks = {tasks}
                        index = {index}
                        displayTaskDetails= {this.displayTaskDetails}
                        deleteColumn={this.deleteColumn}
                        deleteColumnButton={this.state.deleteColumnButton}
                        />
                    })}
                    {provided.placeholder}
                  </div>)}
            </Droppable>
          </DragDropContext>
          </div>
        </div>
      <ToastContainer autoClose={1500} position="bottom-right" hideProgressBar={true} transition={Slide}/>
</>

    );
}}

export default App;
