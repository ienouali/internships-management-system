import React from 'react';
import { Table as RSTable } from "reactstrap";

const Table = ({ className, ...props }) => {
    return (
        <RSTable responsive {...props} className={`${className} nv-table`} >{props.children}</RSTable>
    );
};
export default Table;