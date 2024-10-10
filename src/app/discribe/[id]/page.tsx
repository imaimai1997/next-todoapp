"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { readTodo } from "../../../../utils/supabaseFunction";
import { Todo } from "../../../../utils/interface";

const ReadTodo = () => {
  const params = useParams();
  const id: number = parseInt(params.id as string, 10);

  const [todos, setTodos] = useState<any>([]);

  // 配列をオブジェクトに変換する関数
  const convertArrayToObject = (todoArray: Todo[] | null) => {
    // 配列の最初の要素を返す（存在する場合）
    if (todoArray && todoArray.length > 0) {
      return todoArray[0];
    }
    return {}; // 空のオブジェクトを返す
  };

  useEffect(() => {
    const getTodos = async (id: number) => {
      const todosArray = await readTodo(id);
      const todoObject = convertArrayToObject(todosArray);
      setTodos(todoObject);
    };
    getTodos(id);
  }, [id]);

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div>
          <h2>TODOの詳細ページ</h2>

          <form>
            <input
              type="text"
              value={(todos as Todo).title || ""}
              readOnly
              className="bg-red-300"
            />
            <Link
              href={`/discribe/${todos.id}/edit?title=${todos.title}/`}
              className="bg-white border-2 px-1 py-1 rounded-lg"
            >
              編集する
            </Link>
          </form>

          <Link href="/">一覧に戻る</Link>
        </div>
      </section>
    </>
  );
};

export default ReadTodo;
