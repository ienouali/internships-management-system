import React, { Fragment } from 'react';
import FormAddDemand from '../../components/DemandForms/FormAddDemand';
const ScreenAddDemand = (props) => {
    return (
        <Fragment>
            <FormAddDemand {...props} />
        </Fragment>
    );
};

export default ScreenAddDemand;
