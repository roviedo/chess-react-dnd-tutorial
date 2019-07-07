import React from 'react';
import logo from './logo.svg';
import Board from './Board';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function App() {
  return (

  <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Board knightPosition={[7, 4]} />
    </div>
  </DndProvider>
  );
}

export default App;
