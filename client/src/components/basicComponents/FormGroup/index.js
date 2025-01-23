import React from 'react';
import { FormGroup as RSFormGroup} from "reactstrap";

 const FormGroup = ({ className, ...props }) => {
    return (
        <RSFormGroup {...props} className={`${className} nv-form-group`} >{props.children}</RSFormGroup>
    );
};

export default FormGroup;