import React from 'react'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import styleConstants from '../styles/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone , faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact({ title, description, ...props }){
  return (
    <>
      <style jsx>{`

        .contact-header{
          text-align:center;

        }
        .contact-header h2{
          font-family:${styleConstants.fonts.heading};
          font-size:1.9rem;
          margin-top:60px;
          letter-spacing:0.8rem;
        }

        .contact-content{
          width:80%;
          margin:30px auto;
        }
        .contact-info-container{
          width:100%;
          height:200px;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }
        .contact-info-item{
          width:30%;
          height:175px;
        }
        .contact-info-item-top{
          display:flex;
          flex-direction:column;
          align-items:center;
          font-size:1.5rem;
          height:75px;
          justify-content:space-evenly;
        }
        .contact-info-item-bottom{
          display:flex;
          height:100px;
          line-height:100px;
        }
        .contact-info-item-bottom p{
          margin:0 auto;
          font-size:1.2rem;
          letter-spacing:0.3rem;
        }
        .contact-form-container{
          width:100%;
        }
        .contact-form-container form{
          width:100%;
        }
        .contact-form-top{
          width:100%;
          display:flex;
          justify-content:space-between;
          margin:10px 0;
        }
        .contact-form-top input{
          width:calc(50% - 10px);
          height:50px;
          padding:10px;
          font-family:${styleConstants.fonts.paragraph};
          font-size:1.2rem;
          background:none;
          color:white;
          border:0.5px solid ${styleConstants.color.secondary[0]};
          transition:transform 0.2s;
        }
        .contact-form-top input::placeholder{
          color:${styleConstants.color.secondary[0]};
        }

        .contact-form-top input:focus{
          outline:3px solid ${styleConstants.color.secondary[0]};
        }

        .contact-form-bottom{
          width:100%;
        }
        .contact-form-bottom textarea{
          max-width:100%;
          min-width:100%;
          max-height:350px;
          min-height:300px;
          padding:10px;
          font-family:${styleConstants.fonts.paragraph};
          font-size:1.2rem;
          background:none;
          color:white;
          border:0.5px solid ${styleConstants.color.secondary[0]};
          transition:transform 0.2s;
        }

        .contact-form-bottom textarea:focus{
          outline:3px solid ${styleConstants.color.secondary[0]};
        }

        .contact-form-bottom textarea::placeholder{
          color:${styleConstants.color.secondary[0]};
        }

        .contact-form-submit{
          width:100%;
        }
        .contact-form-submit button{
          margin:20px 0;
          width:100%;
          padding:8px;
          cursor:pointer;
          font-size:1.2rem;
          background: ${styleConstants.color.secondary[0]};
          color:white;
          transition:transform 0.2s;
        }

        :focus{
          outline:none;
          transform: scale(1.02)
        }

      `}</style>
      <Layout pageTitle={`${title} | Contact Me`} description={description}>
        <div className="contact-container">
          <div className="contact-header">
            <h2> Contact Me </h2>
          </div>
          <div className="contact-content">
              <div className="contact-info-container">
                  <div className="contact-info-item">
                    <div className="contact-info-item-top">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="contact-info-item-bottom">
                      <p><a href="tel:778-522-4824">+1(778)522-3824</a></p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                     <div className="contact-info-item-top">
                          <FontAwesomeIcon icon={faAt} />
                      </div>
                      <div className="contact-info-item-bottom">
                        <p><a href="mailto:mail@parsa.pro">Mail@Parsa.Pro</a></p>
                      </div>
                  </div>
                  <div className="contact-info-item">
                        <div className="contact-info-item-top">
                              <FontAwesomeIcon icon={faLinkedin} />
                          </div>
                        <div className="contact-info-item-bottom">
                          <p><a href="https://linkedin.com/in/parsasi" target="_blank">Parsasi</a></p>
                        </div>
                  </div>
              </div>
              <div className="contact-form-container">
                <form>
                  <div className="contact-form-top">
                    <input type="email" placeholder="Email..." required />
                    <input type="text" placeholder="Subject..." />
                  </div>
                  <div className="contact-form-bottom">
                    <textarea placeholder="Message..." required></textarea>
                  </div>
                  <div className="contact-form-submit">
                    <button> Send </button>
                  </div>
                </form>
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