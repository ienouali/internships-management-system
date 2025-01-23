import React from 'react';
import { Label as RSLabel} from "reactstrap";

 const Label = ({ className, ...props }) => {
    return (
       <RSLabel {...props} className={`${className} nv-label`} >{props.children}</RSLabel>
    );
}
export default Label;