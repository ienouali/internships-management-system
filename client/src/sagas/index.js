import { all } from "redux-saga/effects";
import demandsSaga from './demand/demandsSaga';
import addDemandSaga from "./demand/addDemandSaga";
import authenticationSaga from './authentication/authenticationSaga';
import supervisorsSaga from "./supervisor/supervisorsSaga";
import getDemandSaga from "./demand/getDemandSaga";
import getTraineeSaga from "./trainee/getTraineeSaga";
import acceptDemandSaga from "./demand/acceptDemandSaga";
import addSupervisorSaga from "./supervisor/addSupervisorSaga";
import traineesSaga from "./trainee/traineesSaga";
import internshipAcceptedSaga from "./internship/internshipAcceptedSaga";
import deleteInternshipSaga from "./internship/deleteInternshipSaga";
import refusedDemandSaga from "./demand/refuseDemandSaga";
import demandsRefusedSaga from "./demand/demandsRefusedSaga";
import updateTraineeSaga from "./trainee/updateTraineeSaga";
import updateSupervisorSaga from "./supervisor/updateSupervisorSaga";
import getSupervisorSaga from "./supervisor/getSupervisorSaga";
import deleteSupervisorSaga from "./supervisor/deleteSupervisorSaga";
import internshipsClosedSaga from "./internship/internshipsClosedSaga";
import internshipsCompletedSaga from "./internship/internshipsCompletedSaga";
import closeInternshipSaga from "./internship/closeInternshipSaga";
import detailsInternshipSaga from "./internship/detailsInternshipSaga";
import detailsTraineeSaga from "./trainee/detailsTraineeSaga";
import searchSaga from "./search/searchSaga";
import getCVSaga from "./trainee/getCVSaga";
import getAttestationSaga from "./internship/getAttestationSaga";


export default function* rootSaga() {
    yield all([
        authenticationSaga(),
        internshipAcceptedSaga(),
        detailsInternshipSaga(),
        demandsSaga(),
        demandsRefusedSaga(),
        addDemandSaga(),
        getDemandSaga(),
        acceptDemandSaga(),
        refusedDemandSaga(),
        deleteInternshipSaga(),
        getTraineeSaga(),
        traineesSaga(),
        detailsTraineeSaga(),
        updateTraineeSaga(),
        supervisorsSaga(),
        getSupervisorSaga(),
        deleteSupervisorSaga(),
        updateSupervisorSaga(),
        addSupervisorSaga(),
        internshipsClosedSaga(),
        internshipsCompletedSaga(),
        closeInternshipSaga(),
        searchSaga(),
        getCVSaga(),
        getAttestationSaga(),
    ]);
}
