
import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,  faCar,  faGear,  faHouse, faIndustry, faPerson, faSignOut } from '@fortawesome/free-solid-svg-icons';
import {AppSVG} from '../SVG/appSVG';
import { scrollListener } from '../functions/anim';
const Layout =()=>{
    const navHovTrue = {
        sidebar:" col-sm-2 bg-primary",
        display:'inline',
        listGroup:' text-start',
        logoColour:'g-white'
    }
    const navHovFalse = {
        sidebar:" col-sm-1 bg-white",
        display:'none',
        listGroup:' text-start text-sm-center',
        logoColour:'g-primary'
    }
    const [navHover,setNavHover] = useState(navHovFalse);
    
    const handleHover = (hoverIn) =>{
       
        hoverIn?setNavHover(navHovTrue):setNavHover(navHovFalse);
    };
    const scrollHandler = (passed) =>{
        if(passed){
            const collection = document.getElementsByClassName('cbtn');
            for(var i=0;i<collection.length;i++){
                collection[i].classList.add('btn-white');
                collection[i].classList.remove('shadow-sm');
                collection[i].classList.add('shadow');
            }
        }
        else{
            const collection = document.getElementsByClassName('cbtn');
            for(var j=0;j<collection.length;j++){
                collection[j].classList.remove('btn-white');
                collection[j].classList.add('shadow-sm');
                collection[j].classList.remove('shadow');
            }
        }
    }
    scrollListener(scrollHandler);
    return(<>
        <div >
            
            <div className='row p-0 m-0 ' >
                <div id=" appBarPlaceHolder" style={{height:"3rem"}} className=" d-flex d-sm-none">
                </div>
                <div id="appBar" className='d-flex d-sm-none row fixed-top bg-white shadow m-0' style={{height:"3rem"}}>
                    <div className='col-2 h-100 d-flex align-items-center'>
                        <AppSVG width="7vw" className="g-primary"/>
                    </div>
                    <div className='col-10 d-flex align-items-center justify-content-end '>
                        <button className='p-1 m-1 d-inline rounded-circle btn btn-white btn-style2'><FontAwesomeIcon icon={faGear} className="mx-1 text-primary fa-lg"/></button>
                        <button className='p-1 d-inline rounded-circle btn btn-white btn-style2'><FontAwesomeIcon icon={faSignOut} className="mx-1 text-primary fa-lg"/></button>
                        <button className=" navbar-toggler btn btn-white btn-style1 " type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" >
                            <FontAwesomeIcon icon={faBars} className="mx-1 text-primary"/>
                        </button>
                        
                    </div>
                </div>
                <div id="sidebarPlaceHolder" className={navHover.sidebar +"bg-transparent h-100"}>
                </div>
                <div id="sidebarMenu" 
                    className={"collapse d-lg-flex collapse p-0 shadow h-sm-100 fixed-top trans justify-content-between mt-5 mt-sm-0"+navHover.sidebar} >
                    <div id="heightPlaceHolder" className="d-none d-sm-block"style={{height:'100vh'}}></div>
                    <div className='d-flex-column w-100' >
                        <div className='mb-5 text-center d-none d-sm-block'>
                           <AppSVG width="7vw" className={navHover.logoColour}/>
                        </div>
                        <div className={"list-group list-group-flush align-self-center w-100 navHov"+navHover.listGroup}>
                            <Link to="/" onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)} 
                            className="list-group-item  list-group-item-style py-2 ripple" >
                                <FontAwesomeIcon icon={faHouse} className="mx-1 text-primary"/> <span style={{display:navHover.display}}>Home</span>
                            </Link>
                            <Link to="/workers" onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)} 
                            className="list-group-item  list-group-item-style py-2 ripple" >
                                <FontAwesomeIcon icon={faPerson} className="mx-1 text-primary"/> <span  style={{display:navHover.display}}>Workers</span>
                            </Link>
                            <Link to="/companies" onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)} 
                            className="list-group-item  list-group-item-style py-2 ripple" >
                                <FontAwesomeIcon icon={faIndustry} className="mx-1 text-primary"/> <span  style={{display:navHover.display}}>Companies</span>
                            </Link>
                            <Link to="/vehicles" onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)} 
                            className="list-group-item  list-group-item-style py-2 ripple" >
                                <FontAwesomeIcon icon={faCar} className="mx-1 text-primary"/> <span  style={{display:navHover.display}}>Vehicles</span>
                            </Link>
                        
                        </div>
                    </div>
                </div>
                
                
                <div className='col-sm-10 '> 
                    <div className='row sticky-top d-none d-sm-flex'>
                       <div className='col-12 text-end align-self-center py-2 '>
                            <button className='p-1 m-1 d-inline rounded-circle shadow-sm btn  btn-style2 text-center cbtn' style={{width:'50px',height:'50px'}}><FontAwesomeIcon icon={faGear} className="mx-1 text-primary fa-lg"/></button>
                            <button className='p-1 d-inline rounded-circle btn shadow-sm  btn-style2 text-center cbtn' style={{width:'50px',height:'50px'}}><FontAwesomeIcon icon={faSignOut} className="mx-1 text-primary fa-lg"/></button>
                       </div>
                    </div>
                    <Outlet />
                   
                </div>
            </div>
            <div className='bg-img1 fixed-top' ></div>
            

        </div>
    </>);
};
export default Layout;