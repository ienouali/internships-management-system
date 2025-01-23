import axios from "axios";
import {SERVER} from "../actionTypes";

const PATH = `https://novyinternships.herokuapp.com/options`;

const fetchOptionsAgency = async () => {
    try {
        const URL = `${PATH}/agency`;
        const response = await axios.get(URL);
        const {data} = await response;
        return data.Agency;
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

export {fetchOptionsAgency};