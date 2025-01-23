import axios from "axios";
import {SERVER} from "../actionTypes";

const PATH = `https://novyinternships.herokuapp.com/trainees`;

const getTrainee = async (ID) => {
    try {
        const URL = `${PATH}/${ID}`;
        const response = await axios.get(URL);
        const {data} = await response;
        return data.trainee;
    }
    catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        } else {
            if (err.response.status >= 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};

const fetchTrainees = async () => {
    try {
        const URL = `${PATH}`;
        const response = await axios.get(URL);
        const {data} = await response;
        return data.list;
    }
    catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        } else {
            if (err.response.status >= 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};

const updateTrainee = async (trainee) => {
    try {
        const {_id} = trainee;
        const URL = `${PATH}/${_id}`;
        const response = await axios.patch(URL, trainee);
        const {data} = await response;
        return data.message;
    }
    catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        } else {
            if (err.response.status >= 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};

const getDetailsTrainee = async (id) => {
    try {
        const URL = `${PATH}/details/${id}`;
        const response = await axios.get(URL);
        const { data} = await response;
        const {details} = data;
        return details;
    }
    catch (err) {
        if (err.response.status === 404) {
            throw new Error(err.response.data.message);
        }
    }
};

const getCV = async ({nom,prenom,date}) => {
    try {
        const URL = `${PATH}/cv/${nom}-${prenom}_${date}`;
        const response = await axios.get(URL,{responseType:'blob'});
        const {data} = await response;
        return data;
    }
    catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        } else {
            if (err.response.status >= 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};

export {getCV, getTrainee, fetchTrainees, getDetailsTrainee,  updateTrainee};
