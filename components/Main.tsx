import React from 'react'
import * as CSS from 'csstype';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedinIn , faGithubSquare , faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import styleConstants from '../styles/constants.ts'


const mainStyles : CSS.Properties = {
    border: `20px solid ${styleConstants.color.secondary[2]}`,
    width: 'calc(98vw - 30px )',
    height:'calc(98vh - 60px )',
    display: 'flex',
  }

  const sidebarStyles : CSS.Properties = {
    flexGrow : 1,
    height: '100%',
    maxWidth: '400px'
  }

  const contentStyles : CSS.Properties  = {
    flexGrow : 2,
    height:'100%',
    overflowY : 'scroll',
    overflowX : 'hidden'
  }

  const logoContainerStyles : CSS.Properties = {
      maxWidth : '400px',
      overflow : 'hidden'
  }

  const logoStyles : CSS.Properties = {
      width : '50%',
      margin : '50px 5% 30px  45%' 

  }


export default function Main (props) {
   return (
        <div className="main" style={mainStyles}>
            <div className="sidebar" style={sidebarStyles}>
                <div className="logo-container" style={logoContainerStyles}>
                    <img src="../static/LogoHor.png" style={logoStyles} alt="Parsa Safavi's logo" />
                </div>
                <nav className="navigation">
                <ul>
                    <li className="navigation-list-item"><a className="navigation-list-link current"> HomePage </a></li>
                    <li className="navigation-list-item"><a className="navigation-list-link"> AboutMe </a></li>
                    <li className="navigation-list-item"><a className="navigation-list-link"> Blog </a></li>
                    <li className="navigation-list-item"><a className="navigation-list-link"> Resume</a></li>
                    <li className="navigation-list-item"><a className="navigation-list-link"> ContactMe </a></li>
                </ul>
                </nav>
                <div className="social-links">
                <ul>
                    <li><a href="" target="_blank"> <FontAwesomeIcon icon={faTwitterSquare} /> </a></li>
                    <li><a href="" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                    <li><a href="" target="_blank"> <FontAwesomeIcon icon={faGithubSquare} /> </a></li>
                </ul>
                </div>
            </div>
            <div className="content" style={contentStyles}>
                {props.children}    
            </div>
        </div>
   )
}

    