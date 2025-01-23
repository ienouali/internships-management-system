import React, {Fragment, useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'
import './sidebar.css';
import {Badge} from "reactstrap";
import {connect} from "react-redux";
import {loadDemands} from "../../../actions/demand/demandsAction";
import {loadDemandsRefused} from "../../../actions/demand/demandsrefusedAction";
import {loadInternshipsCompleted} from "../../../actions/internship/internshipsCompletedAction";
import {loadInternshipsClosed} from "../../../actions/internship/internshipsClosedAction";
import {showSideBar} from "../../../actions/sidebar/sidebarAction";
import {hideSideBar} from "../../../actions/sidebar/sidebarAction";
import {useTranslation} from "react-i18next";
import axios from "axios";


const ChangeLang = () => {
    const {i18n} = useTranslation();
    const changeLanguage = (e, lng) => {
        e.preventDefault();
        i18n.changeLanguage(lng);
    };
    return (
        <div className='nv-btn_languages'>
            <button onClick={(e) => {
                axios.post('https://novyinternships.herokuapp.com/lang', {lang: "fr"}).then();
                changeLanguage(e, 'fr')
            }
            }>fr
            </button>
            <button onClick={(e) => {
                axios.post('https://novyinternships.herokuapp.com/lang', {lang: "en"}).then();
                changeLanguage(e, 'en')
            }}>en
            </button>
        </div>
    )
};

const Sidebar = (props) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const toggleMenu = () => {
        props.showSideBar();
        if (!toggleSidebar) {
            setToggleSidebar(true);
        }
        if (toggleSidebar) {
            setToggleSidebar(false);
        }
    };

    useEffect(() => {
        props.loadDemands();
        props.loadDemandsRefused();
        props.loadInternshipsCompleted();
        props.loadInternshipsClosed();
        return () => {
        };
    }, [props.loadDemands, props.loadDemandsRefused, props.loadInternshipsCompleted, props.loadInternshipsClosed]);

    const {t} = useTranslation();
    return (
        <Fragment>
            <span onClick={toggleMenu} className='menu-mobile'><i className="p-1 fas fa-bars fa-2x"/></span>
            <div style={!toggleSidebar || props.hide ?
                {opacity:0, visibility: 'hidden', transition: "opacity 700ms, visibility 600ms"}
                : {opacity:1,visibility: 'visible', overflow: 'scroll'}}
                 className='nv-sidebar'>
                <div className='text-capitalize nv-logo-area text-center'>Company</div>
                <ul  onClick={props.hideSideBar} className='nv-links-area list-unstyled'>
                    <li><NavLink activeClassName='nv-first-child-links_active'
                                 className='text-capitalize nv-font font-weight-normal' to='/stages/acceuil'>
                        <i className="mr-2 fas fa-home"/>{t('home')}</NavLink></li>
                    <li>
                        <NavLink to='/stages/demandes' className='text-capitalize nv-font font-weight-normal'><i
                            className="mr-2 far fa-clone"/>
                            {t('demands')}
                        </NavLink>
                        <ul className='nv-child-links list-unstyled'>
                            <li><NavLink activeClassName='nv-child-links_active'
                                         to='/stages/demande'>{t('newDemand')}</NavLink></li>
                            <li><NavLink activeClassName='nv-child-links_active'
                                         to='/stages/demandes'>{t('demandsList')}
                                {props.demands.length > 0 && typeof props.demands !== 'string' ?
                                    <Badge className='nv-badge'>{props.demands.length}</Badge> : null}
                            </NavLink></li>
                            <li><NavLink activeClassName='nv-child-links_active'
                                         to='/stages/refusés'>{t('refusedDemands')}
                                {props.refusedList.length > 0 && typeof props.refusedList !== 'string' ?
                                    <Badge className='nv-badge'>{props.refusedList.length}</Badge> : null}
                            </NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/stages/encours' className='text-capitalize nv-font font-weight-normal'><i
                            className="mr-2 fas fa-briefcase"/> {t('internships')}
                        </NavLink>
                        <ul className='nv-child-links list-unstyled'>
                            <li><NavLink activeClassName='nv-child-links_active'
                                         to='/stages/encours'>{t('internshipsInProgress')} </NavLink></li>
                            <li><NavLink activeClassName='nv-child-links_active'
                                         to='/stages/terminés'>{t('completedInternships')}
                                {props.completedList.length > 0 && typeof props.completedList !== 'string' ?
                                    <Badge className='nv-badge'>{props.completedList.length}</Badge> : null}
                            </NavLink></li>
                            <li><NavLink activeClassName='nv-child-links_active'
                                         to='/stages/fermés'>{t('closedInternship')}
                                {props.closedList.length > 0 && typeof props.closedList !== 'string' ?
                                    <Badge className='nv-badge'>{props.closedList.length}</Badge> : null}
                            </NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/stagiaires' className='text-capitalize nv-font font-weight-normal'><i
                            className="mr-2 fas fa-user-friends"/> {t('trainees')}
                        </NavLink>
                        <ul className='nv-child-links list-unstyled'>
                            <li><NavLink activeClassName='nv-child-links_active'
                                         to='/stagiaires'>{t('traineesList')}</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/encadrants' className='text-capitalize nv-font font-weight-normal'><i
                            className="mr-2 fas fa-user-tie"/> {t('supervisors')}
                        </NavLink>
                        <ul className='nv-child-links list-unstyled'>
                            <li><NavLink exact activeClassName='nv-child-links_active'
                                         to='/encadrants/ajouter'>{t('newSupervisor')}</NavLink></li>
                            <li><NavLink exact activeClassName='nv-child-links_active'
                                         to='/encadrants'>{t('supervisorsList')}</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink activeClassName='nv-first-child-links_active' className='text-capitalize nv-font'
                                 to='/parametres'><i className="mr-2 fas fa-cog"/> {t('settings')}</NavLink></li>
                </ul>
                <ul>
                    <ChangeLang/>
                </ul>
            </div>
        </Fragment>
    );
};


const mapStateToProps = ({demands, refusedList, completedList, closedList, hide}) => {
    return ({demands, refusedList, completedList, closedList, hide});
};

export default connect(
    mapStateToProps,
    {loadDemands, loadDemandsRefused, loadInternshipsCompleted,loadInternshipsClosed ,hideSideBar,showSideBar}
)(Sidebar);

