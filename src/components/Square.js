import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {

  const onButtonClick = () => {
    console.log("ON BUTTON CLICK HAS RUN")
    const updatedSquare = {
        id: props.id,
        value: "",
      }
    props.onClickCallback(updatedSquare);
  };

  return <button
    className="square" onClick={onButtonClick}
  >
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
