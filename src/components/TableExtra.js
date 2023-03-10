import React from "react";
import TableRowTodo from "./TableRowTodo";

const TableExtra = ({ item,changeToBoldAndUppercase}) => {
  return (
      <>
        <td>{changeToBoldAndUppercase(`${item.address.street} ${item.address.suite} ${item.address.street} ${item.address.city} ${item.address.zipcode} 
                                          geo: lat: ${item.address.geo.lat} lng: ${item.address.geo.lng}`)}</td>
        <td>{changeToBoldAndUppercase(item.phone)}</td>
        <td>{changeToBoldAndUppercase(item.name)}</td>
        <td>{changeToBoldAndUppercase(item.website)}</td>
        <td>{changeToBoldAndUppercase(item.company.name)}</td>
        <td>{changeToBoldAndUppercase(item.company.bs)}</td>
        <td>{changeToBoldAndUppercase(item.company.catchPhrase)}</td>
        <td><TableRowTodo itemId={item.id} /></td>
      </>
    );
  };
  
export default TableExtra;