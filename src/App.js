import React, { useEffect, useState } from "react";
import axios from "axios";

import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import ChangeInfo from "./components/ChangeInfo";

const header = [
  "id",
  "avatar",
  "username",
  "e-mail",
  "city",
  "company Name",
  "has website",
];

function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [displayRow, setDisplayRow] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [rowInfo, setRowInfo] = useState({});
  // const [imgs, setImgs] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, photosResponse] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/users"),
          // axios.get("https://jsonplaceholder.typicode.com/photos"),
        ]);
        setData(usersResponse.data);
        // setImgs(photosResponse.data);
      } catch (error) {
        console.log(error);
      }
      
    };
   
    fetchData();
    
  }, []);

  const handleUserClick = (rowData) => {
    setDisplayRow(rowData);
  };

  const handleActive = (id) => {
    setActive(id);
  };

  const changeToBoldAndUppercase = (text) => {
    return (
      <span style={{ fontWeight: "bold", textTransform: "uppercase", fontSize: '10px' }}>
        {text}
      </span>
    );
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setData(data.filter((data) => data.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (isEditable, rowInfo) => {
    setIsEditable(isEditable);
    setRowInfo(rowInfo);
  };

  const handleSave = (state) => {
    const index = data.findIndex((item) => item.id === state.id);
    if (index !== -1) {
      const newData = [...data];
      newData[index] = state;
      setData(newData);
    }
    setIsEditable(false);
  };

  const handleCancel = () => {
    setIsEditable(false);
  };
  

  return (
    <div>
      {isEditable ? (
        <ChangeInfo
          rowInfo={rowInfo}
          onSaved={handleSave}
          onData={handleSave}
          onCanceled={handleCancel}
        />
      ) : (
        <form>
          <table>
            <TableHeader header={header} displayRow={displayRow} />
            <TableBody
              data={data}
              active={active}
              handleUserClick={handleUserClick}
              handleActive={handleActive}
              changeToBoldAndUppercase={changeToBoldAndUppercase}
              displayRow={displayRow}
              handleDelete={handleDelete}
              onEdit={handleEdit}
            />
          </table>
        </form>
      )}
    </div>
  );
  
}

export default App;
