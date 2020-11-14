import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedinIn , faGithubSquare , faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks(props){
    return (
        <div className="social-links">
            <style jsx>{`
                .social-links{
                    margin-top:100px;
                }

                .social-links ul{
                    width:50%;
                    margin: 0 auto;
                    display:flex;
                    justify-content : space-evenly;
                }

                .social-links ul li{
                    list-style:none;
                }

                .social-links ul li a{
                    font-size:2rem;
                }
            `}</style>
            <ul>
                <li><a href="" target="_blank"> <FontAwesomeIcon icon={faTwitterSquare} /> </a></li>
                <li><a href="" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                <li><a href="" target="_blank"> <FontAwesomeIcon icon={faGithubSquare} /> </a></li>
            </ul>
        </div>
    )
}