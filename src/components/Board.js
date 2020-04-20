import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {

  let squaresOnBoard = []
  for(let row = 0; row<squares.length; row++){
    console.log(squares[row])
    for(let col = 0; col<squares[row].length; col++){
      console.log(squares[row][col])
      console.log(squares[row][col].id)
      console.log(squares[row][col].value)
      squaresOnBoard.push(
      <Square 
        onClickCallback={onClickCallback} 
        id={squares[row][col].id} 
        value={squares[row][col].value}
        key={squares[row][col].id}
      />
      )
    }
  };
  console.log(squaresOnBoard)

  return squaresOnBoard
}

const Board = ({ squares, onClickCallback }) => {
  console.log(squares)
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log("hello");
  console.log(squareList);
  console.log("there")
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
