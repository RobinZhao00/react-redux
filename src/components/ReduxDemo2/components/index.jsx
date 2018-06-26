import React from 'react';
import PropTypes from 'prop-types';


const Counter = ({ value, onIncreaseClick, onDecreaseClick }) =>
  (
    <div>
      <button onClick={onIncreaseClick}>+</button>
      <span>{value}</span>
      <button onClick={onDecreaseClick}>-</button>
    </div>
  );

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired
};

export default Counter;
