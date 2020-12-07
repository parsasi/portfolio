import React from 'react'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'
import styleConstants from '../styles/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default function Sidebar(props){

    return (

        <>
            <style jsx>{`
                    .sidebar{
                        flex-grow : 1;
                        height:100%;
                        width:25%;
                        display:flex;
                        flex-direction:column;  
                        justify-content:space-evenly;
                    }
                    .sidebar-mobile{
                        display:flex;
                        flex-direction:column;  
                        justify-content:space-evenly;
                        position:absolute;
                        width:50%;
                        height:100%;
                        top:0;
                        left:-100%;
                        background-color:${styleConstants.color.primary[0]};
                        border-right:3px solid ${styleConstants.color.secondary[0]};
                        z-index:100;
                        transition:all 0.5s;
                    }

                    .sidebar-mobile.open{
                        left:0;
                        -webkit-box-shadow: 21px 0px 54px -28px rgba(255,255,255,1);
                        -moz-box-shadow: 21px 0px 54px -28px rgba(255,255,255,1);
                        box-shadow: 21px 0px 54px -28px rgba(255,255,255,1);
                    }
                    .logo-container{
                        overflow:hidden;
                    }

                    .logo{
                        width:50%;
                        margin: 50px 0 30px 50%;
                    }

                    .close-sidebar{
                        position:absolute;
                        top:0;
                        left:0;
                        width:70px;
                        height:70px;

                        z-index:100;
                      }
                      .close-sidebar button{
                        width:100%;
                        height:100%;
                        background:none;
                        border:none;
                        font-size:2.5rem;
                        display:inline-block;
                        color:${styleConstants.color.secondary[2]};
                        cursor:pointer;

                      }
        

                    @media only screen and (max-width: 1000px){
                        .sidebar{
                            display:none;
                        }
                    }

                    @media only screen and (max-width: 700px){
                        .sidebar-mobile{
                            width:100%;
                        }
                    }

            `}</style>
            <div className="sidebar">
                <div className="logo-container">
                    <img src="../static/LogoHor.png" className="logo" alt="Parsa Safavi's logo" />
                </div>
                <Navigation />
                <SocialLinks />
            </div>
            <div className={`sidebar-mobile ${props.isSidebarOpen && 'open'}`}>
                <div className="close-sidebar"> <button onClick={() => props.setIsSidebarOpen(false)}><FontAwesomeIcon icon={faTimes} /></button> </div>
                <div className="logo-container">
                    <img src="../static/LogoHor.png" className="logo" alt="Parsa Safavi's logo" />
                </div>
                <Navigation />
                <SocialLinks />
            </div>
        </>
       
    )
}
