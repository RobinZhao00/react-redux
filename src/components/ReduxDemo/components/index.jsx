import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducers from '../reducers/index'
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList'
import { Footer } from './Footer';

const store = createStore(combineReducers);
const ReduxDemo = () =>
  (
    <Provider store={store}>
      <div>
        <AddTodo/>
        <VisibleTodoList />
        <Footer/>
      </div>
    </Provider>
  );


export default ReduxDemo;
