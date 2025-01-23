import axios from 'axios';
import {SERVER} from '../actionTypes'

const PATH = `https://novyinternships.herokuapp.com/users`;

const authentication = async (user) => {
    try {
        const URL = `${PATH}/login`;
        const response = await axios.post(URL, user);
        const {data} = await response;
        return data.token;
    } catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        }else {
            if (err.response.status === 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};

export {authentication};