import React, { useEffect, useState } from "react";
import axios from "axios";

const TableTowTodo = ({ itemId }) => {

  const [todoNum, setTodoNum] = useState()

  useEffect(() => {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/users/${itemId}/todos?completed=true`)
      .then(res => {
        setTodoNum(res.data.length)
      })
  
  }
    catch(error){
      console.log(error);
    }
  }, [itemId])

  return ( 
    <>
      { 
        todoNum
      }
    </>
  );
};

export default TableTowTodo;