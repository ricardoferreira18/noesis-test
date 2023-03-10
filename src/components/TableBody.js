import TableRow from "./TableRow";
import React, {useContext} from "react";

import { GlobalContext } from "../context/GlobalState";

export const TableBody = ({
}) => {

const { user } = useContext(GlobalContext);


    return (
        <tbody>
            {user &&
                user.map((item) => (
                    <TableRow
                        key={item.id}
                        item={item}
                    />
                ))}
        </tbody>
    );
};
