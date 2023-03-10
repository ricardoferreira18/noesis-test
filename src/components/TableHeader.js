import React from "react";

const TableHeader = ({ header, displayRow }) => {
  return (
    <thead className="table-head">
      <tr>
        {header.map((title) => (
          <td key={title}>{title}</td>
        ))}
        {displayRow && (
          <>
            <td>address</td>
            <td>Phone Number</td>
            <td>Name</td>
            <td>Website</td>
            <td>Company Name</td>
            <td>Company BS</td>
            <td>Company Catch Phrase</td>
            <td>Todo</td>
            <td>Actions</td>
          </>
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;