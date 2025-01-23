import React from 'react';
import { Button as RSButton } from "reactstrap";
import ScrollIntoView from "react-scroll-into-view";

const Button = ({ className, ...props }) => {
    return (
        <ScrollIntoView selector={`#element`}>
        <RSButton {...props} className={`${className} nv-button`} >{props.children}</RSButton>
        </ScrollIntoView>
    );
};
export default Button;

