"use client";

import React, { useState } from "react";
import { addTodo, getAllTodos } from "../../../utils/supabaseFunction";
import Link from "next/link";
import PrimaryButton from "@/components/styled/Atom/Button/PrimaryButton";

const AddTodo = () => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (title === "") return;
    await addTodo(title);
    const todos = await getAllTodos();
    // setTodos(todos);
    setTitle("");
    alert("新しいTODOが追加されました。");
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div>
          <h2>TODOを追加する</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="bg-red-300"
            />
            <PrimaryButton>Add</PrimaryButton>
          </form>
          <Link href="/">一覧に戻る</Link>
        </div>
      </section>
    </>
  );
};

export default AddTodo;

// export default page;
