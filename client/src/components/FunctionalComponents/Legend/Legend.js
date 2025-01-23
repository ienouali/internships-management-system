import React, {Fragment} from 'react';

const Legend = ({className, ...props}) => {
    return (
        <Fragment>
            <div className={`${className} nv-legend`}>{props.children}</div>
            <p className={`text-muted desc`}>&nbsp;{props.desc}</p>
            <hr/>
        </Fragment>

    );
};

export default Legend;