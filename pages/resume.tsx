import React from 'react'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import styleConstants from '../styles/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone , faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Contact({ title, description, ...props }){
  return (
    <>
      <style jsx>{`

        .resume-header{
          text-align:center;

        }
        .resume-header h2{
          font-family:${styleConstants.fonts.heading};
          font-size:1.9rem;
          margin-top:60px;
          letter-spacing:0.8rem;
        }

        .resume-sections-container{
          width:100%;
          margin-top:30px;
        }

        .resume-section{
          display:flex;
          flex-direction:column;
          width:100%;
        }

        .resume-section-header{
          font-family:${styleConstants.fonts.heading};
          letter-spacing:0.4rem;
          font-size:1.2rem;
          display:flex;
          justify-content:flex-end;
        }

        .resume-section-header h4{
          color:${styleConstants.color.secondary[0]}
        }
        .resume-section-content{
          width:100%;
          display:flex;
          justify-content:space-between;
          margin:30px 0;
        }

        .projects>.resume-item{
          width:calc(50% - 20px);
          padding:20px 10px;
          background-color:${styleConstants.color.secondary[2]};
        }

        .resume-item-top{
          color:${styleConstants.color.primary[1]};
          display:flex;
          align-items:center;
        }

      `}</style>
      <Layout pageTitle={`${title} | Resume`} description={description}>
        <div className="resume-container">
          <div className="resume-header">
            <h2> Resume </h2>
          </div>
          <div className="resume-sections-container">
            <div className="resume-section projects">
              <div className="resume-section-header">
                <h4> Projects </h4>
              </div>
              <div className="resume-section-content projects">
                <div className="resume-item">
                  <div className="resume-item-top">
                    <h4> CoCode </h4>
                    <span>&nbsp;-&nbsp; </span>
                    <p> Code tutoring over a collaborative enviroment </p>
                  </div>
                </div>

                <div className="resume-item">
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout>

    </>
  )
}

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)
  
    return {
      props: {
        title: configData.default.title,
        description: configData.default.description,
      },
    }
  }