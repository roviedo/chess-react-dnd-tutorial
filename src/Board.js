import React, { Component } from 'react';
import Square from './Square';
import Knight from './Knight';
import Rook from './Rook';
import BoardSquare from './BoardSquare';
import { canMoveKnight, canMoveRook } from './Game'

function renderSquare(i, knightPosition, rookPosition, updatePosition, canMove) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '100%' }}>
      <BoardSquare x={x} y={y} updatePosition={ updatePosition } canMove={ canMove } >
        {renderPiece(x, y, knightPosition, rookPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY], [rookX, rookY]) {
  if (x === knightX && y === knightY) {
    return <Knight position={[knightX, knightY]} />
  }

  if (x === rookX && y === rookY) {
    return <Rook position={[rookX, rookY]} />
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      knightPosition: this.props.knightPosition,
      rookPosition: this.props.rookPosition
    }
  }

  updatePosition = (position, item) => {
    console.log('im here now position', position, 'item', item);
    if (item.type === 'rook') {
      this.setState({
        rookPosition: position
      });
    } else {
      this.setState({
        knightPosition: position
      });
    }
  }

  canMove = (x, y, item) => {
    if (item.type === 'knight') {
      return canMoveKnight(x, y, this.state.knightPosition);
    } else if (item.type === 'rook') {
      return canMoveRook(x, y, this.state.rookPosition);
    }
  }

  render () {
    const squares = [];
    let squaresChunk = [];
    for (let i = 0; i < 64; i++) {
      squaresChunk.push(renderSquare(i, this.state.knightPosition, this.state.rookPosition, this.updatePosition, this.canMove));
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
