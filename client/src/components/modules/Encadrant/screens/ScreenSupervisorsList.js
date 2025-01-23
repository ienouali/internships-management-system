import React, { Fragment } from 'react';
import SupervisorsList from '../components/SupervisorList/SupervisorsList'

const ScreenSupervisorsList = (props) => {
    return (
        <Fragment>
            <SupervisorsList {...props}/>
        </Fragment>
    );
};
export default ScreenSupervisorsList;
