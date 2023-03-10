import { useContext } from "react";

import TableDataCell from "./TableDataCell";
import TableRowImage from "./TableRowImage";
import TableExtra from "./TableExtra";
import ActionButtons from "./ActionButtons";
import { GlobalContext } from "../context/GlobalState";
import { BoldUppercase } from "../services/BoldUppercase";

const TableRow = ({
  item,
  itemId,
}) => {
  const { handleUserClick, handleActive, displayRow, active } = useContext(GlobalContext);


  return (
    <tr
      className={active === item.id ? "active" : ""}
      onClick={() => {
        handleUserClick(item);
        handleActive(item.id);
      }}
    >
      <TableDataCell data={item.id} />
      <TableRowImage 
       itemId={item.id} />
      <TableDataCell data={BoldUppercase(item.username)} />
      <TableDataCell data={BoldUppercase(item.email)} />
      <TableDataCell data={BoldUppercase(item.address.city)} />
      <TableDataCell data={BoldUppercase(item.company.name)} />
      <TableDataCell data={item.website ? "true" : "False"} />
      {displayRow && <TableExtra item={item}  itemId={itemId} />}
      <ActionButtons item={item}   />
      
    </tr>
  );
};

export default TableRow;
