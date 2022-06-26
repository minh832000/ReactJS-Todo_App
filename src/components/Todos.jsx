import { useState } from 'react';
import { useMemo } from 'react';

import { useStore, actions } from '../store';
import TodoItem from './TodoItem';

const Todos = () => {
  const [store, dispatch] = useStore();
  const [status, setStatus] = useState(1);

  const { todos } = store;

  const handleChangeStatus = (e) => {
    const { id } = e.target;
    setStatus(parseInt(id));
  };

  const handleDelete = (id) => {
    dispatch(actions.deleteTodo(id));
  };

  const handleComplete = (id) => dispatch(actions.completeTodo(id));

  const todoCompleteComputed = () =>
    todos.filter((item) => item.complete === true);
  const todoNotCompleteComputed = () =>
    todos.filter((item) => item.complete !== true);

  const todoComplete = useMemo(() => todoCompleteComputed(), [todos]);
  const todoNotComplete = useMemo(() => todoNotCompleteComputed(), [todos]);

  return (
    <div className="w-full mt-7 rounded-md bg-white shadow-xl">
      {todos.length === 0 && (
        <div className="py-3 uppercase text-center">
          <div className="mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto hover:w-9 hover:h-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(110, 116, 139)"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <p className="text-slate-500">Add New Item</p>
          </div>
          <p className="text-xl tracking-wider text-slate-400">
            Your todo list is empty
          </p>
        </div>
      )}

      {todos.length > 0 && (
        <div className="rounded-md">
          {status === 1 && (
            <div className="rounded-tl-md rounded-tr-md max-h-80 overflow-y-scroll">
              {todoNotComplete.length > 0 && (
                <ul>
                  {todoNotComplete.map((item) => (
                    <TodoItem
                      key={item.id}
                      todo={item}
                      onChangeComplete={(id) => handleComplete(id)}
                      onDelete={(id) => handleDelete(id)}
                    />
                  ))}
                </ul>
              )}

              {todoComplete.length > 0 && (
                <ul>
                  {todoComplete.map((item) => (
                    <TodoItem todo={item} />
                  ))}
                </ul>
              )}
            </div>
          )}
          {status === 2 && (
            <div className="rounded-tl-md rounded-tr-md max-h-80 overflow-y-scroll">
              {todoNotComplete.length > 0 && (
                <ul>
                  {todoNotComplete.map((item) => (
                    <TodoItem
                      todo={item}
                      onChangeComplete={(id) => handleComplete(id)}
                      onDelete={(id) => handleDelete(id)}
                    />
                  ))}
                </ul>
              )}
            </div>
          )}

          {status === 3 && (
            <div className="rounded-tl-md rounded-tr-md max-h-80 overflow-y-scroll">
              {todoComplete.length > 0 && (
                <ul>
                  {todoComplete.map((item) => (
                    <TodoItem
                      todo={item}
                      onChangeComplete={(id) => handleComplete(id)}
                      onDelete={(id) => handleDelete(id)}
                    />
                  ))}
                </ul>
              )}
            </div>
          )}

          <div className="flex items-center justify-between py-2 px-3 text-sm text-slate-500">
            <div>
              <p>{todoNotComplete.length} items left</p>
            </div>
            <div>
              <button
                className={`mx-2 ${
                  status === 1 ? 'text-blue-500 font-semibold' : ''
                }`}
                type="button"
                id="1"
                onClick={handleChangeStatus}>
                All
              </button>
              <button
                className={`mx-2 ${
                  status === 2 ? 'text-blue-500 font-semibold' : ''
                }`}
                type="button"
                id="2"
                onClick={handleChangeStatus}>
                Active
              </button>
              <button
                className={`mx-2 ${
                  status === 3 ? 'text-blue-500 font-semibold' : ''
                }`}
                type="button"
                id="3"
                onClick={handleChangeStatus}>
                Completed
              </button>
            </div>
            <div>
              <button>Clear Completed</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
