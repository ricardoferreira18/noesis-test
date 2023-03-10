import TableRow from "./TableRow";
import React from "react";

const TableBody = ({
    data,
    active,
    handleUserClick,
    handleActive,
    changeToBoldAndUppercase,
    displayRow,
    onEdit,
    handleDelete,
    todo,
}) => {
    return (
        <tbody>
            {data &&
                data.map((item) => (
                    <TableRow
                        key={item.id}
                        item={item}
                        active={active}
                        handleUserClick={handleUserClick}
                        handleActive={handleActive}
                        changeToBoldAndUppercase={changeToBoldAndUppercase}
                        displayRow={displayRow}
                        todo={todo}
                        onEdit={onEdit}
                        handleDelete={handleDelete}
                    />
                ))}
        </tbody>
    );
};

export default TableBody;