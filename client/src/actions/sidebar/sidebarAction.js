import {SIDEBAR} from "../../actionTypes"

const hideSideBar = () => ({type: SIDEBAR.HIDE});
const showSideBar = () => ({type: SIDEBAR.SHOW});

export {hideSideBar,showSideBar};