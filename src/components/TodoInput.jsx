import { useStore, actions } from '../store';

const TodoInput = () => {
  const [state, dispatch] = useStore();
  const { todoInput } = state;

  const handleTodoInput = (e) => {
    const { value } = e.target;
    dispatch(actions.setTodoInput(value));
  };

  const handleTodoSubmit = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(''));
  };

  return (
    <input
      type="text"
      className="w-full py-4 px-5 bg-white border-2 border-white rounded-md outline-none text-lg focus:border-pink-600 placeholder:text-slate-400 placeholder:text-base placeholder:uppercase placeholder:text-center placeholder:tracking-wider"
      placeholder="Add your new task"
      value={todoInput}
      onChange={handleTodoInput}
      onKeyPress={handleTodoSubmit}
    />
  );
};

export default TodoInput;
