import React, { Fragment } from 'react';
import DemandsList from '../../components/InternshipLists/DemandsList';

const ScreenDemandList = (props) => {
    return (
        <Fragment>
            <DemandsList {...props}/>
        </Fragment>
    );
};
export default ScreenDemandList;
