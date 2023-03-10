import React from "react";
import TableRowTodo from "./TableRowTodo";
import { BoldUppercase } from "../services/BoldUppercase";

const TableExtra = ({ item }) => {
  return (
      <>
        <td>{BoldUppercase(`${item.address.street} ${item.address.suite} ${item.address.street} ${item.address.city} ${item.address.zipcode} 
                                          geo: lat: ${item.address.geo.lat} lng: ${item.address.geo.lng}`)}</td>
        <td>{BoldUppercase(item.phone)}</td>
        <td>{BoldUppercase(item.name)}</td>
        <td>{BoldUppercase(item.website)}</td>
        <td>{BoldUppercase(item.company.name)}</td>
        <td>{BoldUppercase(item.company.bs)}</td>
        <td>{BoldUppercase(item.company.catchPhrase)}</td>
        <td><TableRowTodo itemId={item.id} /></td>
      </>
    );
  };
  
export default TableExtra;