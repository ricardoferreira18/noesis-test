import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [displayRow, setDisplayRow] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [rowInfo, setRowInfo] = useState({});
  const [active, setActive] = useState(false);

  //Fetch data
  useEffect(() => {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          setUser(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [])

  // Return true after clicking a td inside tbody.
  const handleUserClick = (rowData) => {
    setDisplayRow(rowData);
  };

  // Set the class active in the td clicked. Changes if its clicked in another one.
  const handleActive = (id) => {
    setActive(id);
  };

  // By clicking this function, gets the id of the row clicked
  // resets the user and deletes it from the list. (UI)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setUser(user.filter((data) => data.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Sets the isEditable to true.
  // Sets the setRowInfo to the value of the clicked user.
  const handleEdit = (isEditable, rowInfo) => {
    setIsEditable(isEditable);
    setRowInfo(rowInfo);
  };

  // updates the rowInfo state when the input is changed
  const handleChange = (event) => {
    setRowInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // updates the rowInfo state when the input is changed
  // in this case its a nested object inside rowInfo[path]
  const handleExtraChange = (event, path) => {
    setRowInfo((prev) => ({
      ...prev,
      [path]: {
        ...prev[path],
        [event.target.name]: event.target.value,
      },
    }));
  };

  // updates the rowInfo state when the input is changed
  // in this case its a nested object inside rowInfo[path]
  // in this case with another nested object inside rowInfo.address.geo state.
  const handleGeoChange = (event) => {
    setRowInfo((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        geo: {
          ...prev.address.geo,
          [event.target.name]: event.target.value,
        },
      },
    }));
  };

  // Sets the isEditable to false, making the display table to disappear
  const handleCancel = () => {
    setIsEditable(false);
  };

  // updates the user state with information edited by the user from one of the inputs
  // Also sets the isEditable makes it false. Making display disappear
  const handleSave = (state) => {
    const index = user.findIndex((item) => item.id === state.id);
    if (index !== -1) {
      const newData = [...user];
      newData[index] = state;
      setUser(newData);
    }
    setIsEditable(false);
  };

  // Sends the new edited information to the server
  const onSubmit = () => {
    axios.put(
      `https://jsonplaceholder.typicode.com/users/${rowInfo.id}`,
      rowInfo
    )
      .then((response) => {
        handleSave(response.data)
      })
      .catch((err) => {
        err.message = err;
      });
  };



  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        setIsEditable,
        isEditable,
        handleChange,
        handleExtraChange,
        handleGeoChange,
        handleEdit,
        rowInfo,
        handleSave,
        onSubmit,
        handleCancel,
        handleUserClick,
        handleActive,
        displayRow,
        active,
        handleDelete
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
