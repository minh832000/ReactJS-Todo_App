import {
  ADD_TODO,
  CLEAR_COMPLETE_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_TODO_INPUT,
} from './constants';

const setTodoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    todo: payload,
  };
};

const addTodo = (payload) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000),
    title: payload,
    complete: false,
  };
  return {
    type: ADD_TODO,
    todo: newTodo,
  };
};

const completeTodo = (payload) => {
  return {
    type: COMPLETE_TODO,
    id: payload,
  };
};

const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    id: payload,
  };
};

const clearCompleteTodo = () => {
  return {
    type: CLEAR_COMPLETE_TODO,
  };
};

export { setTodoInput, addTodo, completeTodo, deleteTodo };
