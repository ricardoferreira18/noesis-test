import React, {useContext} from "react";
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { GlobalContext } from "../context/GlobalState";


const ActionButtons = ({ item }) => {

  const { handleEdit, handleDelete } = useContext(GlobalContext);

    return (
      <td>
        <button className="btn btn-delete"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(item.id);
          }}
        >
          <MdOutlineDeleteOutline 
          />Delete
        </button>
        <button className="btn btn-edit"
          onClick={(e) => {
            e.preventDefault();
            handleEdit(true, item)
          }}
        >
          <FiEdit2 
          style={{ height: '10px'}}
          />
          Edit
        </button>
      </td>
    );
  };

export default ActionButtons;

