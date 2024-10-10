import { createContext } from "react";
import { Todo } from "../../utils/interface";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<any>;
};

const TodoContext = createContext<Props>({todos:[],setTodos:() => {}});

export default TodoContext;