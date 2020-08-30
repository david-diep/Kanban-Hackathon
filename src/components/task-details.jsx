import React from 'react'

export default class TaskDetails extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      title: this.props.task.title,
      content: this.props.task.content
    }

  }

  handleClick(e){
    if(e.target.id === 'overlay'){
      this.closeModal()
    }
    if(e.target.id === 'save'){
      this.props.changeTaskData(this.props.task.id, this.state.title, this.state.content)
      this.closeModal()
    }
  }

  handleDelete(){
    this.closeModal();
    this.props.deleteTask(this.props.task.id)
  }

  closeModal(){
    this.props.displayTaskDetails(false, null)
  }

  handleChange(e){
    const id = e.target.id
    const value = e.target.value
    this.setState({
      [id]: value
    })
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
              <input
              type="text"
              id="title"
              className="form-control-lg"
              value={this.state.title}
              onChange={this.handleChange}/>
              <textarea
                className="form-control text-dark"
                value={this.state.content}
                placeholder="Type here to add a description"
                onChange={this.handleChange}
                id="content"
              />
              <button
                id="save"
                onClick={this.handleClick}
                className="btn btn-primary"
              >
                Save
              </button>
              <button
                className="btn btn-danger"
                onClick={this.handleDelete}
                >
                Delete
              </button>
          </div>
        </div>
      </div>
      )
  }

}
