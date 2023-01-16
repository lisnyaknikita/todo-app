import {ITodo} from "../types/types";

interface GreetingProps {
    todos: ITodo[]
}
function Greeting({todos}: GreetingProps) {
    return (
      <div className="todo__greeting  p-5 mb-10 rounded-xl max-w-[800px] mx-auto text-center">
        <h1 className="todo__greeting-title font-bold font-sans text-3xl text-zinc-700 mb-3">Hello, Nikita</h1>
        <p className="todo__greeting-text font-sans text-xl text-zinc-600">You have {todos.length} tasks:</p>
      </div>
    );
  }
  
  export default Greeting;