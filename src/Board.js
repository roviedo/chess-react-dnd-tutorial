import React, { Component } from 'react';
import Square from './Square';
import Knight from './Knight';
import BoardSquare from './BoardSquare'

function renderSquare(i, knightPosition, updateKnightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '100%' }}>
      <BoardSquare x={x} y={y} updateKnightPosition={ updateKnightPosition }>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      knightPosition: this.props.knightPosition
    }
  }

  updateKnightPosition = (knightPosition) => {
    this.setState({
      knightPosition
    });
  }

  render () {
    const squares = [];
    let squaresChunk = [];
    for (let i = 0; i < 64; i++) {
      squaresChunk.push(renderSquare(i, this.state.knightPosition, this.updateKnightPosition));
      if ((i+1) % 8 == 0) {
        squares.push(squaresChunk);
        squaresChunk = [];
      }
    }

    const squaresToRender = squares.map((group, index) => {
      return (
        <div key={`group-${index}`} style={{display: 'flex', width: '100%', height: '12.5%'}}>
          { group }
        </div>
      );
    })

    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        { squaresToRender }
      </div>
    )
  }
}

export default Board;


// export default function Board({ knightPosition }) {
//   const squares = [];
//   let squaresChunk = [];
//   for (let i = 0; i < 64; i++) {
//     squaresChunk.push(renderSquare(i, knightPosition));
//     if ((i+1) % 8 == 0) {
//       squares.push(squaresChunk);
//       squaresChunk = [];
//     }
//   }

//   const squaresToRender = squares.map((group, index) => {
//     return (
//       <div key={`group-${index}`} style={{display: 'flex', width: '100%', height: '12.5%'}}>
//         { group }
//       </div>
//     );
//   })

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '100vh',
//         display: 'flex',
//         flexWrap: 'wrap',
//       }}
//     >
//       { squaresToRender }
//     </div>
//   )
// }
