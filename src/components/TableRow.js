import TableDataCell from "./TableDataCell";
import TableRowImage from "./TableRowImage";
import TableExtra from "./TableExtra";
import ActionButtons from "./ActionButtons";

const TableRow = ({
  item,
  active,
  handleUserClick,
  handleActive,
  changeToBoldAndUppercase,
  displayRow,
  handleDelete,
  itemId,
  onEdit
}) => {


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
      <TableDataCell data={changeToBoldAndUppercase(item.username)} />
      <TableDataCell data={changeToBoldAndUppercase(item.email)} />
      <TableDataCell data={changeToBoldAndUppercase(item.address.city)} />
      <TableDataCell data={changeToBoldAndUppercase(item.company.name)} />
      <TableDataCell data={item.website ? "true" : "False"} />
      {displayRow && <TableExtra item={item} changeToBoldAndUppercase={changeToBoldAndUppercase}  itemId={itemId} />}
      <ActionButtons item={item} handleDelete={handleDelete} onEdit={onEdit}   />
      
    </tr>
  );
};

export default TableRow;
