import {
  ADD_TODO,
  CLEAR_COMPLETE_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_TODO_INPUT,
} from './constants';

const initialState = {
  todoInput: '',
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.todo,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case COMPLETE_TODO:
      console.log('Complete');
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, complete: true } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case CLEAR_COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.complete !== true),
      };
    default:
      return state;
  }
};

export { initialState };
export default reducer;
