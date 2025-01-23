import React from 'react';
import {connect} from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MESSAGE} from "../../../actionTypes";


const Message = (props) => {
    const notify = () => {
        if(props.message.message != null &&  props.message.type === MESSAGE.MESSAGE_SUCCESS ) {
            toast.success(props.message.message, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
         if(props.message.message != null &&  props.message.type === MESSAGE.MESSAGE_ERROR ) {
            toast.error(props.message.message, {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
    };
    toast.configure({ autoClose: 3000, draggable: false });
    return (
            props.message !== null ?
            <div className='nv-main-content'>
                { notify() }
            </div> : null
    );
};


const mapStateToProps = ({message}) => {
return ({message});
};

export default connect(
    mapStateToProps,
    null
)(Message);
