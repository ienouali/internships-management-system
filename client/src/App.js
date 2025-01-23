import React, {Suspense, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Message from "./components/utils/Message/Message";
import NavSearch from "./components/FunctionalComponents/NavSearch/NavSearch";
import {connect} from "react-redux";
import ScreenAuthentication from './components/modules/authentification/screens/ScreenAuthentication';
import ScreenAddDemand from './components/modules/stage/screens/ScreenDemand/ScreenAddDemand';
import ScreenDemandList from './components/modules/stage/screens/ScreenDemand/ScreenDemandList';
import ScreenAcceptDemand from './components/modules/stage/screens/ScreenDemand/ScreenAcceptDemand';
import ScreenAcceptedList from './components/modules/stage/screens/ScreenInternships/ScreenAcceptedList';
import ScreenAddSupervisor from './components/modules/Encadrant/screens/ScreenAddSupervisor';
import ScreenListTrainees from './components/modules/stagiaire/screens/ScreenListTrainees';
import ScreenSupervisorsList from './components/modules/Encadrant/screens/ScreenSupervisorsList';
import ScreenHome from "./components/modules/Home/Screens/ScreenHome";
import ScreenUpdateDemand from "./components/modules/stage/screens/ScreenDemand/ScreenUpdateDemand";
import ScreenUpdateTrainee from "./components/modules/stagiaire/screens/ScreenUpdateTrainee";
import ScreenRefusedDemand from "./components/modules/stage/screens/ScreenDemand/ScreenRefusedDemand";
import Sidebar from "./components/FunctionalComponents/Sidebar/Sidebar";
import ScreenDemandsRefusedList from "./components/modules/stage/screens/ScreenDemand/ScreenDemandsRefusedList";
import ScreenUpdateInternship from "./components/modules/stage/screens/ScreenInternships/ScreenUpdateInternship";
import ScreenUpdateSupervisor from "./components/modules/Encadrant/screens/ScreenUpdateSupervisor";
import Loader from "./components/FunctionalComponents/Loader/Loader";
import ScreenCompletedList from "./components/modules/stage/screens/ScreenInternships/ScreenCompletedList";
import ScreenClosedList from "./components/modules/stage/screens/ScreenInternships/ScreenClosedList";
import ScreenDetailsInternship from "./components/modules/stage/screens/ScreenInternships/ScreenDetailsInternship";
import ScreenDetailsTrainee from "./components/modules/stagiaire/screens/ScreenDetailsTrainee";
import ScreenSettings from "./components/modules/settings/screens/ScreenSettings";

function App(props) {
    let boolean = window.location.pathname !== '/';
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Suspense fallback={<Loader/>}>
                        {boolean ? <Fragment> <Sidebar/> <NavSearch/> </Fragment> : ''}

                        <Route exact path="/" component={ScreenAuthentication}/>

                        <Route exact path="/stages/acceuil" component={ScreenHome}/>

                        <Route exact path="/stages/demande" component={ScreenAddDemand}/>

                        <Route exact path="/demandes/edit/:id" component={ScreenUpdateDemand}/>

                        <Route exact path="/stages/demandes" component={ScreenDemandList}/>

                        <Route exact path="/stages/encours" component={ScreenAcceptedList}/>

                        <Route exact path="/stages/terminés" component={ScreenCompletedList}/>

                        <Route exact path="/stages/fermés" component={ScreenClosedList}/>

                        <Route exact path="/stages/refusés" component={ScreenDemandsRefusedList}/>

                        <Route exact path="/encadrants/ajouter" component={ScreenAddSupervisor}/>

                        <Route exact path="/encadrants/modifier/:id" component={ScreenUpdateSupervisor}/>

                        <Route exact path="/stages/accepter/:id" component={ScreenAcceptDemand}/>

                        <Route exact path="/stages/modifier/:id" component={ScreenUpdateInternship}/>

                        <Route exact path="/stages/refused/:id" component={ScreenRefusedDemand}/>

                        <Route exact path="/stagiaires" component={ScreenListTrainees}/>

                        <Route exact path="/stagiaires/edit/:id" component={ScreenUpdateTrainee}/>

                        <Route exact path="/stages/details/:id" component={ScreenDetailsInternship}/>

                        <Route exact path="/stagiaires/details/:id" component={ScreenDetailsTrainee}/>

                        <Route exact path="/encadrants" component={ScreenSupervisorsList}/>

                        <Route exact path="/parametres" component={ScreenSettings}/>
                    </Suspense>
                </Switch>
            </BrowserRouter>
            <Message/>
        </Fragment>
    );
}

const mapStateToProps = ({logged}) => {
    return {logged};
};

export default connect(
    mapStateToProps,
    null
)(App);