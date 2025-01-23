import {combineReducers} from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import {loadingAddReducer} from './demand/addDemandReducer'
import {loadingReducer, demandsReducers} from "./demand/demandsReducer";
import  {loadingAuthentication,authSuccessReducers,loggedReducer} from './authentication/authenticationReducer';
import {loadSupervisorsReducer,supervisorsReducers} from './supervisor/supervisorsReducer';
import  {loadingAddSupervisor} from './supervisor/addSupervisorReducer'
import {loadDemandReducer,demandReducers} from './demand/getDemandReducer'
import {loadTraineeReducer,traineeReducers} from './trainee/getTraineeReducer'
import  {loadingAcceptReducer} from './demand/acceptDemandReducer'
import {loadTraineesReducer,traineesReducers} from './trainee/traineesReducer';
import {loadInternshipAcceptedReducer,internshipsAcceptedReducers} from './internship/internshipsAcceptedReducer'
import {loadDeleteInternshipReducer,deleteInternshipReducers} from './internship/deleteInternshipReducer'
import {loadRefuseReducer} from './demand/refuseDemandReducer';
import {loadDemandsRefusedReducer,demandsRefusedReducers} from './demand/demandsRefusedReducer'
import {loadUpdateTraineeReducer} from './trainee/updateTraineeReducer'
import {loadUpdateSupervisor} from './supervisor/updateSupervisorReducer'
import {loadSupervisorReducer,supervisorReducers} from "./supervisor/getSupervisorReducer";
import {loadDeleteSupervisorReducer,deleteSupervisorReducers} from './supervisor/deleteSupervisorReducer'
import {loadInternshipCompletedReducer,internshipsCompletedReducers} from './internship/internshipsCompletedReducer';
import {loadInternshipClosedReducer,internshipsClosedReducers} from './internship/internshipsClosedReducer';
import {loadDetailsInternshipReducer,detailsInternshipReducers} from './internship/detailsInternshipReducer'
import {loadDetailsTraineeReducer,detailsTraineeReducers} from './trainee/detailsTraineeReducer';
import {loadSearchingReducer,dataSearchedReducer} from "./search/searchReducer";
import {message} from './msg/messageReducer';
import {CVReducers, loadCVReducer} from "./trainee/getCVReducer";
import {AttestationReducers, loadAttestationReducer} from "./internship/getAttestationReducer";
import {hideSideBar} from "./sidebar/sidebarReducer";

const rootReducer = combineReducers({
    form: reduxFormReducer,

    /** Messages */
    message,

    /** action to hide sidebar in mobile view */
    hide : hideSideBar,
    /* cv */
    loadCV : loadCVReducer,
    CV : CVReducers,

    /* attestation */
    loadAttestation : loadAttestationReducer,
    attestation : AttestationReducers,

    /*Search */
    loadSearching : loadSearchingReducer,
    dataSearched : dataSearchedReducer,

    /* Auth */
    loadAuth :loadingAuthentication ,
    authSuccess :authSuccessReducers ,
    logged : loggedReducer,


    /* internships accepted list */
    loadAcceptedList : loadInternshipAcceptedReducer,
    acceptedList  :internshipsAcceptedReducers,


    /* internships completed list */
    loadCompletedList : loadInternshipCompletedReducer,
    completedList : internshipsCompletedReducers,

    /* internships closed list */
    loadClosedList : loadInternshipClosedReducer,
    closedList : internshipsClosedReducers,

    /* demands refused list */
    loadRefusedList : loadDemandsRefusedReducer,
    refusedList : demandsRefusedReducers,

    /* list demands */
    isLoading: loadingReducer,
    demands: demandsReducers,


    /* details internship */
    loadDetailsInter  : loadDetailsInternshipReducer,
    detailsInternship : detailsInternshipReducers,

    /* get demand  */
    loadingDemand : loadDemandReducer,
    demand : demandReducers,

    /* Add demand  */
    loadingAdd :loadingAddReducer,

    /* Accept & update demand  */
    loadingAcceptAndUpdating : loadingAcceptReducer,

    /* refuse demand */
    loadRefuseDemand : loadRefuseReducer,

    /* delete internship or demand */
    loadDeleteDemand : loadDeleteInternshipReducer,
    msgSuccessDeleteDemand : deleteInternshipReducers,

    /* delete supervisor */
    loadDeleteSupervisor : loadDeleteSupervisorReducer,
    msgSuccessDeleteSupervisor :deleteSupervisorReducers ,

    /* add supervisor */
    loadAddSupervisor : loadingAddSupervisor,

    /* update supervisor */
    loadUpdateSupervisor : loadUpdateSupervisor,

    /* get supervisor */
    loadSupervisor : loadSupervisorReducer,
    supervisor : supervisorReducers,

    /* list supervisor */
    loadSupervisorsList : loadSupervisorsReducer,
    supervisors : supervisorsReducers,

    /* get trainee */
    loadTrainee : loadTraineeReducer,
    trainee : traineeReducers,

    /* update trainee */
    loadUpdateTrainee : loadUpdateTraineeReducer,

    /* trainees list */
    loadTraineesList : loadTraineesReducer,
    trainees : traineesReducers,

    /* details trainee */
    loadingDetailsTrainee : loadDetailsTraineeReducer,
    detailsTrainee : detailsTraineeReducers,
});

export default rootReducer;


