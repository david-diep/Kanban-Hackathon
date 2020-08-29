import React from 'react'

function Column(props) {
  let todos = 0;
  const addTodo = () => {
    todos++;
    console.log(todos)
  }
  const editColName = () => {
    console.log('click worked')
  }

  return (
    <div className="row bg-danger m-4 column">

      <div className="col-sm " >
        <button
          className="btn btn-danger"
          onClick={editColName}
          >{props.title}</button>
        </div>
      <div className="col-sm">
        <button
          className="btn btn-primary"
          onClick={addTodo}
          >Add Todo</button>
      </div>
    </div>
    )
  }
export default Column;
