import React from 'react'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

export default function Sidebar(props){

    return (
        <div className="sidebar">
            
            <style jsx>{`
                .sidebar{
                    flex-grow : 1;
                    height:100%;
                    max-width: 400px;
                }

                .logo-container{
                    max-width:400px;
                    overflow:hidden;
                }

                .logo{
                    width:50%;
                    margin: 50px 0 30px 50%;
                }
            `}</style>
            <div className="logo-container">
                <img src="../static/LogoHor.png" className="logo" alt="Parsa Safavi's logo" />
            </div>
            <Navigation />
            <SocialLinks />
        </div>
    )
}
