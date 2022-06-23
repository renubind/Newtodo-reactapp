import React, { useState } from "react";
import { nanoid } from 'nanoid'
import AddTodo from "./AddTodo";
import FilteredData from "./FilteredData";
import TodoList from "./TodoList";
const Todo = () => {
  const taskList = [
    { id: "01", task: "task1", isCompleted: false, isDeleted: false },
    { id: "02", task: "task2", isCompleted: false, isDeleted: false },
  ];

  const [allTodo, setAllTodo] = useState(taskList);
  const [showFilteredData, setShowFilteredData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleNewTodo = (newTodo) => {
    let newTodoObj = {
      id: nanoid(2),
      task: newTodo,
      isCompleted: false,
      isDeleted: false,
    };
    const newTodoList = [...allTodo, newTodoObj];
    setAllTodo(newTodoList);
  };
  const handleDeleteTodo = () => {
    setAllTodo([]);
  };

  const handleIsCompleted = () => {
    setShowFilteredData(true);
    const data = allTodo.filter((element) => element.isCompleted === true);
    setFilteredData(data);
  };

  const handleRemoveTasks = () => {
    setShowFilteredData(true);
    const tasks = allTodo.filter((element) => element.isDeleted === true);
    setFilteredData(tasks);
  };

  const handleViewAllTask = () => {
    setShowFilteredData(true);
    setFilteredData(allTodo);
  };

  const handleDeleteItem = (todoId) => {
    const itemList = allTodo.map((element) => {
      if (element.id === todoId) {
        const deleteItemList = { ...element, isDeleted: true };
        return deleteItemList;
      }
      return element;
    });
    setAllTodo(itemList);
  };

  const handleMarkComplete = (todoId) => {
    const newItemList = allTodo.map((element) => {
      if (element.id === todoId) {
        const newValue = { ...element, isCompleted: true };
        return newValue;
      }
      return element;
    });
    setAllTodo(newItemList);
  };
  return (
    <>
        <div className="header text-center ">
          <h1 className="text-black text-4xl font-serif my-10 ">TodoApp</h1>
        </div>
        <AddTodo
          handleNewTodo={handleNewTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        <div className="main-container">
        <div className="btn text-center ">
          <button
          type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => setShowFilteredData(false)}
          >
            Active
          </button>
          <button
          type="submit"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleRemoveTasks}
          >
            Remove All
          </button>
          <button
          type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleViewAllTask}
          >
            All Task
          </button>
          <button
          type="submit"
            className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleIsCompleted}
          >
            Mark Completed
          </button>
          
            <div className="bg-blue-900 border-2 border-blue-400 w-1/2 mx-auto rounded-lg py-8">
          {showFilteredData === true ? (
            <FilteredData filteredData={filteredData} />
          ) : (
            <TodoList
              handleMarkComplete={handleMarkComplete}
              handleDeleteItem={handleDeleteItem}
              AllTodo={allTodo}
            />
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
