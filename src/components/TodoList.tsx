import React, { useContext } from "react";
import { deleteTodo, getAllTodos } from "../../utils/supabaseFunction";
import Link from "next/link";
import TodoContext from "@/context/TodoContext";
import PrimaryButton from "./styled/Atom/Button/PrimaryButton";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    const todos = await getAllTodos();
    setTodos(todos);
  };

  return (
    <ul className="mt-2 mb-2 p-2">
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between bg-orange-200 mb-2">
          <li>✅{todo.title}</li>
          <div>
            <Link
              href={`/discribe/${todo.id}?title=${todo.title}`}
              className="bg-white"
            >
              詳細
            </Link>
            <PrimaryButton onClick={() => handleDelete(todo.id)}>
              削除
            </PrimaryButton>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
