const TodoItem = ({ todo, onChangeComplete, onDelete }) => {
  const { id, title, complete } = todo;
  return (
    <li className="py-3 px-5 flex items-center border-b first:rounded-md">
      <button
        className="w-1/12"
        onClick={() => onChangeComplete(id)}
        disabled={!onChangeComplete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${complete ? 'fill-green-800' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#c6c6c6"
          strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <span
        className={`w-10/12 ${complete ? 'line-through text-slate-400' : ''}`}>
        {title}
      </span>
      {!complete && (
        <button className="w-1/12" onClick={() => onDelete(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-0 ml-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#c6c6c6"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </li>
  );
};

export default TodoItem;
