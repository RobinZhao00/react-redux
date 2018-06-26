import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import Counter from '../components';
import { increment, decrement } from '../actions'
import { setCounter } from '../reducers'


const store = createStore(setCounter);

const mapStateToProps = state => ({
  value: state.count
})

const mapDispatchToProps = dispatch => ({
  onIncreaseClick: () => dispatch(increment),
  onDecreaseClick: () => dispatch(decrement)
})
const A = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export const NewCounter = () => (<Provider store={store}><A/></Provider>)

