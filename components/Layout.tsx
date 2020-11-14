import React from 'react'
import * as CSS from 'csstype';
import styleConstants from '../styles/constants'
import Main from './Main'

export default function Layout({ children, pageTitle, ...props }) {

    return (
      <>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{pageTitle}</title>
        </head>

        <div className="root">

          <style jsx>{`
            .root{
              background-color : ${styleConstants.color.primary[0]};
              color : ${styleConstants.color.secondary[2]};
              height : 98vh;
              justify-content : center;
              align-items: center;
              display: flex;
            }      
          `}</style>

          <Main>
            {children}
          </Main>
        </div>
    </>
    )
  } 