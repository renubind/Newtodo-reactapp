import React, { useState } from "react";

const AddTodo = ({ handleNewTodo, handleDeleteTodo }) => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewTodo(inputData);
    setInputData("");
  };

  const handleInput=(event)=>{
    setInputData(event.target.value);
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="w-full mx-auto ">
          <div className="flex gap-2 mb-6 justify-center ">
            <input
              class="bg-gray-50 border text-gray-900 w-1/3 border-gray-600 text-lg font-serif font-bold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              type="text"
              placeholder="Add Task..."
              value={inputData}
              onChange={handleInput}
            />
            <div className="btn ">
              <button
                type="submit"
                className="text-white  text-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
                dark:focus:ring-blue-800 font-medium rounded-lg 
                 px-5 py-2.5 text-center mr-2 mb-2"
              >
                Add +
              </button>
            </div>

            <div className="btn">
              <button
                type="submit"
                className="text-white  text-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleDeleteTodo}
              >
                Delete All x
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddTodo;
