"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { readTodo, updateTodo } from "../../../../../utils/supabaseFunction";
import { Todo } from "../../../../../utils/interface";
import PrimaryButton from "@/components/styled/Atom/Button/PrimaryButton";

const ReadTodo = () => {
  const params = useParams();
  const id: number = parseInt(params.id as string, 10);

  const [todos, setTodos] = useState<any>([]);
  const [editTitle, setEditTitle] = useState("");

  // 配列をオブジェクトに変換する関数
  const convertArrayToObject = (todoArray: Todo[] | null) => {
    // 配列の最初の要素を返す（存在する場合）
    if (todoArray && todoArray.length > 0) {
      return todoArray[0];
    }
    return {}; // 空のオブジェクトを返す
  };

  const handleEditChange = (e: any) => {
    setEditTitle(e.target.value);
  };

  const handleEditTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateTodo(id, editTitle);
    alert("入力内容を保存しました");
    window.location.href = "/";
  };

  useEffect(() => {
    const getTodos = async (id: number) => {
      const todosArray = await readTodo(id);
      const todoObject = convertArrayToObject(todosArray);
      setTodos(todoObject);
      setEditTitle((todoObject as Todo).title || "");
    };
    getTodos(id);
  }, [id]);

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div>
          <h2>TODOの編集ページ</h2>

          <form onSubmit={handleEditTodo}>
            <input
              type="text"
              value={editTitle}
              onChange={handleEditChange}
              className="bg-red-300"
            />
            <PrimaryButton>保存する</PrimaryButton>
          </form>

          <Link href="/">一覧に戻る</Link>
        </div>
      </section>
    </>
  );
};

export default ReadTodo;
