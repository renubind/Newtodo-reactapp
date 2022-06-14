const TodoItem=({
    taskValue,
    taskId,
    handleMarkComplete,
    handleDeleteItem,
    isCompleted,
  })=> {
    const taskStyle = {
      textDecorationLine: isCompleted === true ? "line-through" : "none",
      color: isCompleted === true ? "blue-800" : "black",
      fontWeight: "bold",
      fontSize: "20px",
    };
  
    return (
      <>
        <div
          className="flex justify-between mx-auto  p-2 w-200 m-1 bg-gray-300  
          border-2 border-solid max-w-lg  border-gray-600  px-5 py-3 rounded-xl "
        >
          <h1 className=" " style={taskStyle}>
            {taskValue}
          </h1>
  
          <div>
            <button
              onClick={() => handleMarkComplete(taskId)}
              className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
             ✓
            </button>
            <button
              type="button"
              onClick={() => handleDeleteItem(taskId)}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              X
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default  TodoItem;