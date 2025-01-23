import React from 'react';
import {Spinner} from 'reactstrap';

const Loader = () => (
    <div className='row'>
        <div className='offset-3 col-6 text-center'>
            <Spinner style={{width: '4rem', height: '4rem'}} color="secondary"/>
        </div>
    </div>
);

export  default Loader;