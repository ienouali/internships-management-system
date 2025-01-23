import {MESSAGE} from "../../actionTypes";


const setMessage = (message,type) => ({
    type: MESSAGE.MESSAGE,
    payload: {message,type}
});

export {setMessage};