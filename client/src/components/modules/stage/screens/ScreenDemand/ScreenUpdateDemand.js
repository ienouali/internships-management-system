import React, { Fragment } from 'react';
import FormUpdateDemand from '../../components/DemandForms/FormUpdateDemand';

const ScreenUpdateDemand = (props) => {
    return (
        <Fragment>
            <FormUpdateDemand {...props}/>
        </Fragment>
    );
};

export default ScreenUpdateDemand;
