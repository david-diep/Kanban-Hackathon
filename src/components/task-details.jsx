import React from 'react'

export default class TaskDetails extends React.Component{
  constructor(props){
    super(props)
    this.handleClick= this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      title: this.props.task.title,
      content: this.props.task.content
    }
  }

  handleClick(e){
    if(e.target.id === 'overlay' || e.target.id=== 'save'){
      this.closeModal()
    }
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

  handleSubmit(e){
    e.preventDefault()
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
            <form>
              <input
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}/>
              <textarea
                className="form-control"
                value={this.state.content}
                placeholder="Type here to add a description"
                onChange={this.handleChange}
                id="content"
              />
              <button
                type="submit"
                onSubmit={this.handleSubmit}
                className="btn btn-primary"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      )
  }

}
