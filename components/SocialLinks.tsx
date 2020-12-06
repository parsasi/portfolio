import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin , faGithubSquare , faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks(props){
    return (
        <div className="social-links">
            <style jsx>{`
                .social-links{
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
                <li><a href="http://twitter.com/parsas_si" target="_blank"> <FontAwesomeIcon icon={faTwitterSquare} /> </a></li>
                <li><a href="https://linkedin.com/in/parsasi" target="_blank"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                <li><a href="https://github.com/parsasi" target="_blank"> <FontAwesomeIcon icon={faGithubSquare} /> </a></li>
            </ul>
        </div>
    )
}