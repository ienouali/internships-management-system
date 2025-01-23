import React from 'react';
import { Container as RSContainer } from "reactstrap";


const Container = ({ className, ...props }) => {
    return (
        <RSContainer {...props} className={`${className} nv-container`} >{props.children}</RSContainer>
    );
}
export default Container;