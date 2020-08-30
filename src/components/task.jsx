import React from 'react';
import {Draggable} from 'react-beautiful-dnd'

class Task extends React.Component {
  constructor(props){
    super(props);
    this.state={
      editTitle:false,
      editText:false,
      title: this.props.task.title,
      text: this.props.task.content
        }
    this.onTextClick = this.onTextClick.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
    this.onTitleSave = this.onTitleSave.bind(this);
    this.onTextSave = this.onTextSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
  }

  onTitleClick(event){
    this.setState({editTitle:true})
  }

  onTitleChange(event){
    this.setState({title:event.target.value})
  }

  onTitleSave(event) {
    event.preventDefault();
    this.props.changeTaskTitle(this.props.task.id, this.state.title)
    this.setState({editTitle:false})

  }

  onTextChange(event) {
    this.setState({ text: event.target.value })
  }

  onTextClick(event){
    this.setState({editText:true})
  }

  onTextSave(event){
    event.preventDefault();
    this.props.changeTaskText(this.props.task.id, this.state.text)
    this.setState({ editText: false })

  }

  render() {
    const titleForm = (
      <form className="input-group" onSubmit={this.onTitleSave}>
        <input type="text" className="form-control" value={this.state.title} onChange={this.onTitleChange} ></input>
          <div className="input-group-append">
            <button className="btn btn-primary">Save</button>
          </div>
      </form>);

    const textForm = (
      <form onSubmit={this.onTextSave}>
        <textarea className="form-control" rows="3" value={this.state.text} onChange={this.onTextChange}></textarea>
        <div className="d-flex flex-row-reverse"><button className="btn btn-primary">Save</button></div>
      </form>
    );

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
            ref = {provided.innerRef}
          >
<<<<<<< HEAD
            <div className="border-bottom" onClick={this.onTitleClick}>
              {this.state.editTitle ? titleForm : this.state.title}
            </div>
            <div onClick={this.onTextClick}>
            {this.state.editText ? textForm : <p className="p-1" >{this.state.text}</p>}
            </div>
=======
            <div className="border-bottom">{this.props.task.title}</div>
            <p className="p-1">{this.props.task.content}</p>
>>>>>>> ce98794e70a6c40aa07bb5720f75198a3272303e
          </div>
        )}
      </Draggable>
    )}

}

export default Task;
