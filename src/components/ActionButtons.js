import React from "react";
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';

const ActionButtons = ({ item, handleDelete, onEdit }) => {

  
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
            onEdit(true, item);
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

