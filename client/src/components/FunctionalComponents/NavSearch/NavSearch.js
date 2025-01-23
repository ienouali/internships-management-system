import React, { useState } from 'react';
import { Navbar as RSNavbar} from 'reactstrap';
import Input from "../../basicComponents/Input";
import {loadSearch} from './../../../actions/search/searchAction';
import {connect} from "react-redux";
import { ListGroup, ListGroupItem } from 'reactstrap';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavSearch = (props) => {
    const {t} = useTranslation();
    const {loadSearch,dataSearched} = props;
    const [val, setVal] = useState('');
    const search = (e) => {
        const {value} = e.target;
        setVal(value);
        loadSearch(value);
    };

    return (
        <div className='nv-main-content'>
            <RSNavbar color="white" light expand="md">
                <i className="fas fa-search"/>
                  <Input onChange={(e) => search(e)} type='search' placeholder={t('search')} className='mb-0 mt-2 ml-1 nv-input_search'/>
            </RSNavbar>
           <ListGroup>
                   { dataSearched ?
                    dataSearched.map(data =>
                  val !== '' ?
                   <ListGroupItem  key={data._id}>
                       <NavLink  className='nv-text-searched' to={`/stagiaires/details/${data._id}`}>
                           <p className='nv-text-searched'>
                              <strong>
                                  <span className={val === data.nom ?`nv-text-searched_color`:''}>{data.nom} </span>
                                  <span className={val === data.prenom ?`nv-text-searched_color`:''} > {data.prenom} </span>
                              </strong> &nbsp;&nbsp;
                               <span> {data.cin} </span>
                               &nbsp;&nbsp;
                               <span> {data.tel} </span>
                               &nbsp;&nbsp;
                               <span> {data.email} </span>
                               &nbsp;&nbsp;
                               <span> {data.date_naissance.split('T')[0]} </span>
                               &nbsp;&nbsp;
                               <span> {data.adresse} </span>
                           </p>
                       </NavLink>
                   </ListGroupItem> : ''
                    ) : ''
                }

            </ListGroup>

        </div>
    );
};


const mapStateToProps = ({loadSearching,dataSearched}) => {
    return ({loadSearching,dataSearched})
};

export default connect(mapStateToProps, {loadSearch} )(NavSearch);

