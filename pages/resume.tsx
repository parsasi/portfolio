import React from 'react'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import styleConstants from '../styles/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
          flex-wrap:wrap;
        }

        .projects>.resume-item{
          width:calc(50% - 10px);
          padding:20px 10px;
          background-color:${styleConstants.color.secondary[2]};
          margin:10px 0;
        }

        .resume-item-top{
          color:${styleConstants.color.primary[1]};
          display:flex;
          align-items:center;
        }

        .resume-item-top-left{
          width:80%;
          display:flex;
          align-items:center;
          font-size:1.1rem;
        }
        .resume-item-top-right{
          width:20%;
          display:flex;
          flex-direction:row;
          justify-content:space-evenly;
          align-items:flex-end;
          font-size:1.7rem;
        }
        .resume-item-bottom{
          margin-top:10px;
          width:100%;
          display:flex;
          color:${styleConstants.color.secondary[1]}
        }
        .resume-item-bottom-tech{
          margin:0 2px;
          padding:3px 4px;
          font-size:0.9rem;
          border-radius:10px;
          background-color:${styleConstants.color.primary[0]}
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
                    <div className="resume-item-top-left">
                      <h4> CoCode </h4>
                      <span>&nbsp;-&nbsp; </span>
                      <p> Code tutoring revamped </p>
                    </div>
                    <div className="resume-item-top-right">
                        <a href="https://github.com/parsasi/cocode">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="http://cocode.space">
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                    </div>
                  </div>
                  <div className="resume-item-bottom">
                    <div className="resume-item-bottom-tech"> #ReactJs </div>
                    <div className="resume-item-bottom-tech"> #NestJs </div>
                    <div className="resume-item-bottom-tech"> #WebRTC </div>
                    <div className="resume-item-bottom-tech"> #WebSockets </div>
                  </div>
                </div>

                <div className="resume-item">
                  <div className="resume-item-top">
                    <div className="resume-item-top-left">
                      <h4> CodeJar </h4>
                      <span>&nbsp;-&nbsp; </span>
                      <p> Live, collaborative coding enviroment </p>
                    </div>
                    <div className="resume-item-top-right">
                        <a href="https://github.com/parsasi/codejar">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://codejar.live">
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                    </div>
                  </div>
                  <div className="resume-item-bottom">
                    <div className="resume-item-bottom-tech"> #ReactJs </div>
                    <div className="resume-item-bottom-tech"> #NodeJs </div>
                    <div className="resume-item-bottom-tech"> #Redux </div>
                    <div className="resume-item-bottom-tech"> #WebSockets </div>
                  </div>
                </div>

                <div className="resume-item">
                  <div className="resume-item-top">
                    <div className="resume-item-top-left">
                      <h4> Lustr </h4>
                      <span>&nbsp;-&nbsp; </span>
                      <p> Web Based Dating App </p>
                    </div>
                    <div className="resume-item-top-right">
                        <a href="https://github.com/parsasi/lustr">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                  </div>
                  <div className="resume-item-bottom">
                    <div className="resume-item-bottom-tech"> #ReactJs </div>
                    <div className="resume-item-bottom-tech"> #Firebase </div>
                    <div className="resume-item-bottom-tech"> #NodeJs </div>
                  </div>
                </div>

                <div className="resume-item">
                  <div className="resume-item-top">
                    <div className="resume-item-top-left">
                      <h4> Stock Up </h4>
                      <span>&nbsp;-&nbsp; </span>
                      <p> Store Management Windows Application </p>
                    </div>
                    <div className="resume-item-top-right">
                        <a href="https://github.com/parsasi/stockup">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                  </div>
                  <div className="resume-item-bottom">
                    <div className="resume-item-bottom-tech"> #CSharp </div>
                    <div className="resume-item-bottom-tech"> #EntityFramework </div>
                    <div className="resume-item-bottom-tech"> #DotNetCore </div>
                  </div>
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