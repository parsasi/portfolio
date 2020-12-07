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
        .resume-section.experience-education{
          flex-direction:row !important;
          justify-content:space-between;
        }
        .experience{
          width:calc(70% - 10px);
        }
        .education{
          width:calc(30% - 10px);
        }
        .experience-header , .education-header{
          display:flex;
          justify-content:flex-end;
        }
        .experience-header > h3 , .education-header > h3{
          font-family:${styleConstants.fonts.heading};
          letter-spacing:0.4rem;
          font-size:1.2rem;
          color:${styleConstants.color.secondary[0]};
        }
        .experience-item{
          background-color:${styleConstants.color.secondary[2]};
          color:${styleConstants.color.primary[1]};
          padding:20px 10px;
          margin-top:20px;
        }
        .education-item{
          background-color:${styleConstants.color.secondary[2]};
          color:${styleConstants.color.primary[1]};
          padding:20px 10px;
          margin-top:20px;
        }
        .experience-top-header{
          margin-bottom:5px;
        }
        .experience-top-dates , .education-dates{
            font-size:0.9rem;
        }
        .experience-bottom{
          margin-top:10px;
        }
        .education-title{
          margin-bottom:5px;
        }
        .education-bottom{
          margin-top:10px;
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
          
            <div className="resume-section experience-education">
              <div className="experience">
                  <div className="experience-header">
                    <h3> Experience </h3>
                  </div>
                  <div className="experience-content">

                    <div className="experience-item">
                        <div className="experience-top">
                          <div className="experience-top-header">
                            <h4> Camera Speciallist </h4>
                            <h5> London Drugs - Coquitlam, BC </h5>
                          </div>
                          <div className="experience-top-dates">
                            <span> August 2019 </span> - <span> Present </span>
                          </div>
                        </div>
                        <div className="experience-bottom">
                          <p> Recommended cameras and lenses to customers, thoroughly explaining details. Built and maintained long-term relationship with customers. </p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-top">
                          <div className="experience-top-header">
                            <h4> Freelance Web Designer </h4>
                            <h5>  </h5>
                          </div>
                          <div className="experience-top-dates">
                            <span> May 2018 </span> - <span> Present </span>
                          </div>
                        </div>
                        <div className="experience-bottom">
                          <p> Targeted and engaged with potential clients, through social media and community. Performed analysis on customer's needs, during the pre-development stage. Provided the customer with thorough and comprehensive documentation. </p>
                        </div>
                    </div>

                  </div>
              </div>
              <div className="education">
                  <div className="education-header">
                    <h3> Education </h3>
                  </div>
                  <div className="education-content">

                      <div className="education-item">
                        <div className="education-top">
                            <div className="education-title">  <h4> BCIT Full-Stack Web Development </h4> </div>
                            <div className="education-dates">  <span> September 2019 </span> - <span> June 2021 </span> </div>
                        </div>
                        <div className="education-bottom">
                          <p> Earned hands-on experience with various web technologies and frameworks. Worked closely in groups, focusing on group projects. Gained knowledge about Agile Methodology, User Experiance, collaboration, etc.  </p>
                        </div>
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