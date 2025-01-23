import React from 'react';
import { Col as RSColumn } from "reactstrap";

 const Col = ({ className, ...props }) => {
    return (
        <RSColumn {...props} className={`${className} nv-col`} >{props.children}</RSColumn>
    );
};
export default Col;