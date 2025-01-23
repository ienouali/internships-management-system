import React from 'react';
import { Form as RSForm} from "reactstrap";

 const Form= ({ className, ...props }) => {
    return (
        <RSForm  {...props} className={`${className} nv-form`} >{props.children}</RSForm>
    );
};
export default Form;