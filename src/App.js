import React from 'react';
import Board from './components/board'
// import Column from './components/board'

function App() {


  return (
    <>
      <h1 className="text-center">Kanban</h1>
      <Board />
      {/* <Column title={'test'} /> */}
    </>);
}

export default App;
