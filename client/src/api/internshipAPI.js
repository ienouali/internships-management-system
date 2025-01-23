import axios from 'axios';
import {SERVER} from '../actionTypes'
import {saveAs} from "file-saver";

const PATH = `https://novyinternships.herokuapp.com/internship`;

const fetchDemands = async () => {
    try {
        const URL = `${PATH}/demands`;
        const response = await axios.get(URL);
        const {data} = await response;
        return data.list;
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

const fetchRefusedDemands = async () => {
    try {
        const URL = `${PATH}/refused`;
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

const fetchInternshipsAccepted = async () => {
    try {
        const URL = `${PATH}/accepted`;
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

const fetchInternshipsCompleted = async () => {
    try {
        const URL = `${PATH}/completed`;
        const response = await axios.get(URL);
        const {data} = await response;
        return data.list;
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


const fetchInternshipsClosed = async () => {
    try {
        const URL = `${PATH}/closed`;
        const response = await axios.get(URL);
        const {data} = await response;
        return data.list;
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

const addDemand = async (demandData) => {
    try {
    let formData = new FormData();
        for (let demand in demandData) {
            if(demandData.hasOwnProperty(demand)) {
                formData.append(demand, demandData[demand]);
            }
        }
    formData.append('cvName', demandData.cv.name);
    const config = { headers: { "content-type": `multipart/form-data;`}};
        const URL = `${PATH}/demand`;
        const response = await axios.post(URL, formData, config);
        const {data} = await response;
        return data.message;
    } catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        }else {
            if (err.response.status >= 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};

const acceptDemand = async (demand) => {
    try {
        const {_id} = demand;
        const URL = `${PATH}/accept/${_id}`;
        const response = await axios.patch(URL, demand);
        const {data} = await response;
        return data.message;
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

const refuseDemand = async (demand) => {
    try {
        const {_id} = demand;
        const URL = `${PATH}/refuse/${_id}`;
        const response = await axios.patch(URL, demand);
        const {data} = await response;
        return data.message;
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


const getDemand = async (ID) => {
    try {
        const URL = `${PATH}/demand/${ID}`;
        const response = await axios.get(URL);
        const {data} = await response;
        const {demand, trainee} = data;
        return {...trainee, ...demand};
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


const closeInternship = async (ID) => {
    try {
        const URL = `${PATH}/close/${ID}`;
        const response = await axios.patch(URL, ID);
        const {data} = await response;
        return data.message;
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

const deleteInternshipOrDemand = async (ID) => {
    try {
        const URL = `${PATH}/delete/${ID}`;
        const response = await axios.delete(URL);
        const {data} = await response;
        return data.message;
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

const getDetailsInternship = async (id) => {
    try {
        const URL = `${PATH}/details/${id}`;
        const response = await axios.get(URL);
        const { data} = await response;
        const {details} = data;
        return details;
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

const createAttestation =  (dataAttestation) => {
    try {
        const URL = `${PATH}/attestation`;
       axios.post(URL,dataAttestation)
           .then(() => axios.get(URL,{responseType:'blob'}))
           .then((res) => {
               const fileBlob = new Blob([res.data], {type: 'application/pdf'});
               saveAs(fileBlob, `attestation-${dataAttestation.nom}-${dataAttestation.prenom}.pdf`.toUpperCase());
           });
        return null;
    }
    catch (err) {
        if (err.response === undefined) {
            throw new Error(SERVER.CONNECTION_FAIL);
        }
        else {
            if (err.response.status >= 400) {
                throw new Error(err.response.data.message);
            }
        }
    }
};


export {createAttestation,fetchDemands,fetchRefusedDemands,getDetailsInternship,fetchInternshipsCompleted,fetchInternshipsClosed, closeInternship, fetchInternshipsAccepted, addDemand, acceptDemand,refuseDemand, getDemand,deleteInternshipOrDemand};