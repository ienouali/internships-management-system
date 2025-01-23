import React from 'react';
import { FormText as RSFormText} from "reactstrap";

 const FormText = ({ className, ...props }) => {
    return (
       <RSFormText {...props} className={`${className} nv-form-text`}>{props.children}</RSFormText>
    );
}

export default FormText;
