import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase.config";

const TodoList = () => {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, "todos/");
    onValue(starCountRef, (snapshot) => {
      //   const data = snapshot.val();
      let array = [];
      snapshot.forEach((todo) => {
        array.push(todo.val());
      });

      setAllTodos(array);
    });
  }, []);

  return (
    <div className="mt-[80px]">
      <h2 className=" text-4xl text-white">TodoList</h2>
      <div className="mt-8">
        {allTodos.map((singleTodo) => (
          <Todo data={singleTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
