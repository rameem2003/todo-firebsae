import React, { useState } from "react";
import Flex from "./Flex";
import { ref, remove } from "firebase/database";
import { db } from "../firebase.config";
import UpdateTodo from "./UpdateTodo";

const Todo = ({ data }) => {
  const [edit, setEdit] = useState(false);
  console.log(data.todoID);

  const deleteTodo = (id) => {
    remove(ref(db, "todos/" + id));
  };
  return (
    <div className="mb-5">
      <Flex className="items-center justify-between rounded-[10px]  py-[27px] px-[21px] bg-[#15101C]">
        <h2 className="text-base text-[#9E78CF]">{data.todo}</h2>
        <Flex className=" items-center gap-2">
          <button
            onClick={() => setEdit(true)}
            className="text-base text-[#9E78CF]"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(data.todoID)}
            className="text-base text-[#9E78CF]"
          >
            Delete
          </button>
        </Flex>
      </Flex>

      {edit && <UpdateTodo setEdit={setEdit} data={data} />}
    </div>
  );
};

export default Todo;
