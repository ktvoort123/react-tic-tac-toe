import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // console.log(squares)
  // const squaresOnBoard = squares.map( squareArray => {
  //   squareArray.map( square => {
  //     // console.log(square)
  //     return <Square 
  //     onClickCallback={onClickCallback} 
  //     id={square.id} 
  //     value={square.value}
  //     />
  //   })
  // })
  let squaresOnBoard = []
  for(let i = 0; i<squares.length; i++){
    console.log(squares[i])
    let tempArray = []
    for(let x = 0; x<squares[i].length; x++){
      console.log(squares[i][x])
      console.log(squares[i][x].id)
      tempArray.push(<Square 
        onClickCallback={onClickCallback} 
        id={squares[i][x].id} 
        value={squares[i][x].value}
        key={squares[i][x].id}
      />)
    }
    squaresOnBoard.push(tempArray)
  };
  console.log(squaresOnBoard[1])

  return (
    <ul>
      {squaresOnBoard}
    </ul>
  )
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
