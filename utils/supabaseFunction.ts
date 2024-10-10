import {supabase} from "./supabase";

export const getAllTodos = async () => {
  const todos = await supabase.from("todo").select("*");
  return todos.data;

}


export const addTodo = async (title:string) => {
  console.log(title)
  await supabase.from("todo").insert({ title: title });

}

export const deleteTodo = async(id:number) =>
  await supabase.from("todo").delete().eq("id",id)

export const readTodo = async(id:number) => {
  const todos = await supabase.from("todo").select("*").eq("id",id);
  return todos.data
}

export const updateTodo = async(id:number,title:string) => {
  await supabase.from("todo").update({ title:title}).eq("id",id);
  
}