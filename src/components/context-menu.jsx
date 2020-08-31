import React from 'react'

export default class ContextMenu extends React.Component{

  render(){
    const xPos = this.props.pos.xPos
    const yPos = this.props.pos.yPos
    const id = this.props.id
    const columns = this.props.columns
    const columnsList = []
    for(const property in columns) {
      const children = columns[property].title
      if(children !== columns[id].title){
        columnsList.push(<li key={property} className="list-group-item">{children}</li>)
      }
    }
    return(
      <div
      id="context"
      className="card"
      style={{
        position: "fixed",
        top: yPos,
        left: xPos,
        zIndex: 55
      }}
      >
        <div className="p-2">
          <h6>{columns[id].title}</h6>
          <p>Move All Cards To:</p>
          <ul className="list-group">
            {columnsList.map((item) => item)}
          </ul>
        </div>
      </div>
    )
  }
}
