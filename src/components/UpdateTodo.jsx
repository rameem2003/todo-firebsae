import React, { useState } from "react";
import Flex from "./Flex";
import { ref, update } from "firebase/database";
import { db } from "../firebase.config";

const UpdateTodo = ({ setEdit, data }) => {
  const [updateTodo, setUpdateTodo] = useState("");

  const handleUpdate = () => {
    update(ref(db, "todos/" + data.todoID), {
      todo: updateTodo,
    });

    setUpdateTodo("");

    setEdit(false);
  };
  return (
    <Flex className="items-center gap-[11px] mt-5">
      <input
        value={updateTodo}
        onChange={(e) => setUpdateTodo(e.target.value)}
        className=" w-[60%] outline-none rounded-[10px] py-[10px] px-[15px] bg-transparent border-[1px] border-[#9E78CF] text-white"
        type="text"
        name=""
        placeholder="Add a new task"
        id=""
      />

      <button
        onClick={handleUpdate}
        className=" w-[20%] rounded-[10px] bg-[#9E78CF] py-[9px] flex items-center justify-center text-[20px] text-white"
      >
        Update
      </button>

      <button
        onClick={() => setEdit(false)}
        className=" w-[20%] rounded-[10px] bg-[#9E78CF] py-[9px] flex items-center justify-center text-[20px] text-white"
      >
        Close
      </button>
    </Flex>
  );
};

export default UpdateTodo;
