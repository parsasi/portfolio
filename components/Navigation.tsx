import React from 'react'
import * as CSS from 'csstype';
import styleConstants from '../styles/constants'
import NavLink from './NavLink'


const navigationStyles : CSS.Properties = {
    
}


export default function Navigation(props) {
    return (
        <nav className="navigation" style={navigationStyles}>
             <style jsx>{`
                .navigation{
                    width : 100%;
                    padding-top : 20px;
                }

                .navigation-list-link{
                    display : inline-block;
                    padding: 10px;
                    text-align : right;
                    letter-spacing : 8px;
                    font-family : ${styleConstants.fonts.heading};
                    font-size : 1.5rem;
                    width:100%;
                    transition : * 0.2s;
                    -webkit-transition : all .2s;
                    cursor:pointer
                }

                .current , .navigation-list-link:hover{
                    letter-spacing : 15px !important;
                    color: ${styleConstants.color.secondary[0]}
                }
            `}</style>
            <ul>
                <li className="navigation-list-item"><NavLink href="/"><span className="navigation-list-link">HomePage</span></NavLink></li>
                <li className="navigation-list-item"><NavLink href="/portfolio"><span className="navigation-list-link">portfolio</span></NavLink></li>
                <li className="navigation-list-item"><NavLink href="/blog"><span className="navigation-list-link">Blog</span></NavLink></li>
                <li className="navigation-list-item"><NavLink href="/resume"><span className="navigation-list-link">Resume</span></NavLink></li>
                <li className="navigation-list-item"><NavLink href="/contact"><span className="navigation-list-link">ContactMe</span></NavLink></li>
            </ul>
        </nav>
    )
}