import React from 'react';
import { Select as RSSelect} from "react-select";

 const Select = ({ className, ...props }) => {
    return (
       <RSSelect {...props} className={`${className} nv-select`} >{props.children}</RSSelect>
    );
}
export default Select;