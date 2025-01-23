import React, { Fragment } from 'react';
import FormUpdateTrainee from '../components/traineeForms/FormUpdateTrainee';

const ScreenUpdateTrainee = (props) => {
    return (
        <Fragment>
            <FormUpdateTrainee {...props}/>
        </Fragment>
    );
};

export default ScreenUpdateTrainee;
