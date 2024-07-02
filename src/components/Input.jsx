import React, { useState } from "react";
import { db } from "../firebase.config";
import { ref, set } from "firebase/database";
import Flex from "./Flex";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    let todoID = uuidv4();
    set(ref(db, "todos/" + todoID), {
      todo,
      todoID,
    });

    setTodo("");
  };

  return (
    <Flex className="items-center gap-[11px]">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className=" w-[85%] outline-none rounded-[10px] py-[10px] px-[15px] bg-transparent border-[1px] border-[#9E78CF] text-white"
        type="text"
        name=""
        placeholder="Add a new task"
        id=""
      />

      <button
        onClick={handleSubmit}
        className=" w-[15%] rounded-[10px] bg-[#9E78CF] flex items-center justify-center text-[32px] text-white"
      >
        +
      </button>
    </Flex>
  );
};

export default Input;
