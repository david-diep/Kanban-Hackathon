import React  from 'react'
import Column from './column'


function Board() {
    return (
      <div className="d-flex align-center">
        <Column title={'Todo'}/>
        <Column title={'In Progress'} />
        <Column title={'Done'} />
      </div>
    )


}
export default Board;
