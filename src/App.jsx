import TodoInput from './components/TodoInput';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <div className="relative w-full h-full top-0 left-0">
        <div className="absolute z-0 top-0 right-0 left-0 h-72 overflow-hidden">
          <img
            src="/src/assets/images/hero_image.jpg"
            alt=""
            className="w-full h-full block object-cover object-center"
          />
        </div>
        <div className="absolute z-10 bg-gradient-to-r from-pink-400 top-0 left-0 right-0 h-72"></div>
      </div>
      <div className="absolute z-20 top-11 left-1/2 -translate-x-1/2 lg:w-1/2 md:w-2/3 sm:w-3/4 w-11/12">
        <p className="text-4xl font-medium uppercase text-white tracking-[37px] mb-7">
          Todo
        </p>
        <TodoInput />
        <Todos />
      </div>
    </div>
  );
};

export default App;
