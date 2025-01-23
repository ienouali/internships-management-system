import React, { Fragment } from 'react';
import FormDemandRefused from '../../components/DemandForms/FormDemandRefused';

const ScreenRefusedDemand = (props) => {
    return (
        <Fragment>
            <FormDemandRefused {...props}/>
        </Fragment>
    );
};
export default ScreenRefusedDemand;
