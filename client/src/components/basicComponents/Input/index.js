import React from 'react';
import { Input as NVInput } from "reactstrap";

 const Input = ({  className, ...props }) => {
    return (
       <NVInput ref= {props.ref} {...props} className={`${className} nv-input`} >{props.children}</NVInput>
    );
};

export default Input;