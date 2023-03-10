import React, {  useContext } from "react";

import {TableBody} from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import EditInfo from "./components/EditInfo";
import { GlobalContext } from "./context/GlobalState"

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
  const { isEditable } = useContext(GlobalContext);
  return (
    <>
      {isEditable ? (
        <EditInfo
        />
      ) : (
        <form>
          <table>
            <TableHeader header={header} 
             />
            <TableBody
            />
          </table>
        </form>
      )}
    </>
  );
  
}

export default App;
