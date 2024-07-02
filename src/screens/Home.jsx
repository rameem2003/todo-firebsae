import React from "react";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="w-[583px] h-[758px] rounded-[20px] bg-[#1D1825] px-[65px] py-[50px]">
      <Input />
      <TodoList />
    </div>
  );
};

export default Home;
