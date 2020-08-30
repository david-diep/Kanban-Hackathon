import React from 'react'

export default class TaskDetails extends React.Component{
  constructor(props){
    super(props)
    this.handleClick= this.handleClick.bind(this)
  }

  handleClick(e){
    if(e.target.id === 'overlay' || e.target.id=== 'save'){
      this.props.displayTaskDetails(false, null)
    }
  }

  render(){
    return(
      <div>
        <div
        id="overlay"
        onClick={this.handleClick}
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'black',
          opacity: 0.5,
          zIndex: 99
        }}
        >
        </div>
        <div style={{
          position: 'fixed',
          zIndex: 100,
          top: '50%',
          left: '50%',
          right: '50%',
          transform: 'translate(-50%, -50%)'
        }}
          className="card w-75"
          tabIndex="0">
          <div className="card-body">
            <h3 className="card-title">{this.props.task.title}</h3>
            <p className="card-text">{this.props.task.content}</p>
            <button onClick={this.handleClick} id="save" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
      )
  }

}
