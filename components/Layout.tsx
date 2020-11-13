import React from 'react'
import * as CSS from 'csstype';
import styleConstants from '../styles/constants.ts'
import Main from './Main.tsx'

export default function Layout({ children, pageTitle, ...props }) {
    const rootStyles : CSS.Properties  = {
        background : styleConstants.color.primary[0],
        color: styleConstants.color.secondary[2],
        height : '98vh',
        justifyContent : 'center',
        alignItems : 'center',
        display : 'flex'
    }

    return (
      <>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{pageTitle}</title>
        </head>

        <div className="root" style={rootStyles}>
          <Main>
            {children}
          </Main>
        </div>
    </>
    )
  } 