"use client";

import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { getAllTodos } from "../../utils/supabaseFunction";
import TodoContext from "@/context/TodoContext";

const Todoapp = () => {
  const [todos, setTodos] = useState<any>([]);
  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    };
    getTodos();
  }, []);

  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3>Todo App List</h3>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <TodoList />
      </TodoContext.Provider>
    </section>
  );
};

export default Todoapp;
