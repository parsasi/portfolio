import React from 'react'
import Sidebar from './Sidebar'
import styleConstants from '../styles/constants'



export default function Main (props) {
   return (
        <div className="main">
            <style jsx>{`
              .main{
                border: 20px solid ${styleConstants.color.secondary[2]};
                width : calc(98vw - 30px);
                height : calc(98vh - 60px);
                display : flex
              }

              .content{
                flex-grow:2;
                height:100%;
                overflow-y: scroll;
                overflow-x: hidden;
              }

            `}</style>
            <Sidebar />
            <div className="content">
                {props.children}    
            </div>
        </div>
   )
}

    