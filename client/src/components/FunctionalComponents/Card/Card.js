import React from 'react';
import {Card as RSCard, CardTitle, CardText} from 'reactstrap';


const Card = ({className,...props}) => {
     if(props.counter) {
         return (
             <RSCard body className={`${className} mb-5 bg-light p-5 text-center shadow-sm border-0`}>
                 <CardTitle className='nv-card-color text-secondary'>
                     <i className={props.iconTitle}/>&nbsp;&nbsp;{props.cardTitle}
                 </CardTitle>
                 <hr/>
                 <CardText className='nv-legend nv-card-color pl-5 pr-5'> <strong>{props.counter}</strong> </CardText>
             </RSCard>
         );
     }
    return (
                <RSCard body className='text-center shadow-sm border-0'>
                    <CardTitle className='nv-card-color text-secondary'>
                        <i className={props.iconTitle}/>&nbsp;&nbsp;{props.cardTitle}
                    </CardTitle>
                    <hr/>
                    <CardText className='nv-legend pl-5 pr-5 nv-card-color'>
                        <span className='float-left'>Oujda</span>
                        <strong className='float-right '>{props.count}</strong>
                    </CardText>
                    <CardText className='nv-legend pl-5 pr-5 nv-card-color'>
                        <span className='  float-left'>Rabat</span>
                        <strong className='float-right '>{parseInt(props.count) * 2}</strong>
                    </CardText>
                    <CardText className='nv-legend pl-5 pr-5 nv-card-color'>
                        <span className='float-left'>Paris</span>
                        <strong className='float-right '>{parseInt(props.count) +9}</strong>
                    </CardText>
                </RSCard>
    );
};

export default Card;