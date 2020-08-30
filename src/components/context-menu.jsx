import React from 'react'

export default class ContextMenu extends React.Component{

  render(){
    const xPos = this.props.pos.xPos
    const yPos = this.props.pos.yPos
    return(
      <div
      className="card"
      style={{
        position: "fixed",
        top: yPos,
        left: xPos,
        zIndex: 55
      }}
      >
        <h6 className="card-title">hello future context menu {this.props.id}</h6>
      </div>
    )
  }
}
