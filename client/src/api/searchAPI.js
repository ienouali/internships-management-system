import axios from "axios";
import {SERVER} from '../actionTypes'

const PATH = `https://novyinternships.herokuapp.com/search`;

const search = async (val) => {
    try{
            if(val !== '') {
                console.log({val});
                const URL = `${PATH}/${val}`;
                const response = await axios.get(URL);
                const {data} = await response;
                const {values} = data;
                return values;
            } else {
                return null;
            }
    }
    catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        }else {
            if (err.response.status >= 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};

export  {search};