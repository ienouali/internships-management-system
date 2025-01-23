import axios from 'axios';
import {SERVER} from "../actionTypes";

const PATH = `https://novyinternships.herokuapp.com/supervisor`;

const addSupervisor = async (supervisor) => {
    try {
        const URL = `${PATH}`;
        const response = await axios.post(URL, supervisor);
        const {data} = await response;
        return data.message;
    } catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        } else {
            if (err.response.status === 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};

const getSupervisor = async (ID) => {
    try {
        const URL = `${PATH}/${ID}`;
        const response = await axios.get(URL);
        const {data} = await response;
        return data.supervisor;
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

const updateSupervisor = async (supervisor) => {
    try {
        const {_id} = supervisor;
        const URL = `${PATH}/${_id}`;
        const response = await axios.patch(URL, supervisor);
        const {data} = await response;
        return data.message;
    } catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        } else {
            if (err.response.status >= 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};


const fetchSupervisors = async () => {
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


const deleteSupervisor = async (supervisor) => {
    try {
        const {ID} = supervisor;
        const URL = `${PATH}/delete/${ID}`;
        const response = await axios.delete(URL);
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
export {fetchSupervisors, updateSupervisor, getSupervisor, deleteSupervisor, addSupervisor};