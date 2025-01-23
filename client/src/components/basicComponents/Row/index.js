import React from 'react';
import { Row as RSRow } from "reactstrap";

const Row = ({ className, ...props }) => {
    return (
        <RSRow {...props} className={`${className} nv-row`} >{props.children}</RSRow>
    );
}
export default Row;