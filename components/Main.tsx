import React, { useState } from 'react'
import Sidebar from './Sidebar'
import styleConstants from '../styles/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Main (props) {

  const [isSidebarOpen , setIsSidebarOpen] = useState(false)

   return (
        <div className="main">
            <style jsx>{`
              .main{
                border: 20px solid ${styleConstants.color.secondary[2]};
                width : calc(98vw - 30px);
                height : calc(98vh - 60px);
                display : flex;
                position:relative;
                overflow:hidden;
              }

              .content{
                flex-grow:2;
                width:75%;
                height:100%;
                overflow-y: scroll;
                overflow-x: hidden;
              }
              .open-sidebar{
                position:absolute;
                top:0;
                left:0;
                width:70px;
                height:70px;
                display:none;
                z-index:100;
              }
              .open-sidebar button{
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
                .open-sidebar{
                  display:inline;
                }
              }
              
            `}</style>
            <div className="open-sidebar"> <button onClick={() => setIsSidebarOpen(true)}><FontAwesomeIcon icon={faBars} /></button> </div>
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <div className="content">
                {props.children}    
            </div>
        </div>
   )
}

    