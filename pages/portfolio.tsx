import Layout from '../components/Layout'
import styleConstants from '../styles/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio({ title, description, ...props }){
  return (
    <>
      <style jsx>{`
        .portfolio-container{

        }
        .portfolio-header{
          text-align:center;

        }
        .portfolio-header h2{
          font-family:${styleConstants.fonts.heading};
          font-size:1.9rem;
          margin-top:60px;
          letter-spacing:1rem;
        }

        .portfolio-projects{
          padding:50px;
          overflow:hidden;

          width: 100%;
          overflow: hidden;
          margin-bottom: -1.875em;
          -webkit-column-count: 3;
          -webkit-column-gap: 1.875em;
          -webkit-column-fill: auto;
          -moz-column-count: 3;
          -moz-column-gap: 1.875em;
          -moz-column-fill: auto;
          column-count: 3;
          column-gap: 1.875em;
          column-fill: auto;
        }

        .portfolio-project{
          overflow:hidden;
          border-radius:1px;
          color:  ${styleConstants.color.primary[0]};

          margin-bottom: 1.875em;
          -webkit-column-break-inside: avoid;
          -moz-column-break-inside: avoid;
          column-break-inside: avoid;

          border-bottom-right-radius:10px;
          border-bottom-left-radius:10px;
        }
        .portfolio-project-image-container{
          width:100%;
          overflow:hidden;
          z-index:-1;
        }
        .portfolio-project-image-container img{
          width:100%;
        }
        .portfolio-project-content{
          width:100%;
          padding:25px 15px 20px 15px;
          border-top-right-radius:10px;
          border-top-left-radius:10px;
          background-color: ${styleConstants.color.secondary[2]};
          z-index:10;
          position:relative;
          margin-top:-15px;

          -webkit-box-shadow: 0px -16px 62px -32px rgba(62,78,80,1);
          -moz-box-shadow: 0px -16px 62px -32px rgba(62,78,80,1);
          box-shadow: 0px -16px 62px -32px rgba(62,78,80,1);
        }
        .portfolio-project-content p{
          margin-top:10px;
          line-height:1.3;
        }
        .portfolio-project-links-container{
          width:100%;
          display:flex;
          justify-content:space-evenly;
          margin-top:20px;
        }
        .portfolio-project-links-container a{
          width:40%;
          display:inline-block;
          padding:4px;
          border-radius:20px;
          border:2px solid;
          text-align:center; 
        }

        @media only screen and (max-width: 1300px){
          .portfolio-projects{

            -webkit-column-count: 2 !important;
            -moz-column-count: 2 !important;
            column-count: 2 !important;

          }
        }

        @media only screen and (max-width: 900px) {
          .portfolio-projects{

            -webkit-column-count: 1 !important;
            -moz-column-count: 1 !important;
            column-count: 1 !important;

          }
        
        }
      `}</style>
      <Layout pageTitle={`${title} | Portfolio`} description={description}>
        <div className="portfolio-container">
          <div className="portfolio-header">
              <h2> Projects </h2>
          </div>

          <div className="portfolio-projects">
            <div className="portfolio-project">
              <div className="portfolio-project-image-container">
                <img src="../static/cocode.png" alt="Project title"/>
              </div>
              <div className="portfolio-project-content">
                <h4> CoCode </h4>
                <p>CoCode is a one-on-one tutoring application geared towards those who are interested in, or pursuing, the field of development/programming.</p>
                <div className="portfolio-project-links-container">
                  <a href="https://github.com/parsasi/cocode"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                  <a href="http://cocode.space"> <FontAwesomeIcon icon={faExternalLinkAlt} /> See Live </a>
                </div>
              </div>
            </div>


            <div className="portfolio-project">
              <div className="portfolio-project-image-container">
                <img src="https://unsplash.com/photos/DErxVSSQNdM/download?force=true&w=640" alt="Project title"/>
              </div>
              <div className="portfolio-project-content">
                <h4> Project Title </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className="portfolio-project-links-container">
                  <a href="https://github.com"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                  <a href="https://github.com"> <FontAwesomeIcon icon={faExternalLinkAlt} /> See Live </a>
                </div>
              </div>
            </div>


            <div className="portfolio-project">
              <div className="portfolio-project-image-container">
                <img src="../static/codejar.png" alt="Project title"/>
              </div>
              <div className="portfolio-project-content">
                <h4> CodeJar </h4>
                <p>Code Jar is the tool for live coding demonstrations. It provides you with IntelliSense, go-offline key, and much more!</p>
                <div className="portfolio-project-links-container">
                  <a href="https://github.com"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                  <a href="https://github.com"> <FontAwesomeIcon icon={faExternalLinkAlt} /> See Live </a>
                </div>
              </div>
            </div>


            <div className="portfolio-project">
              <div className="portfolio-project-image-container">
                <img src="../static/stockup.png" alt="Project title"/>
              </div>
              <div className="portfolio-project-content">
                <h4> Stock Up </h4>
                <p> Stock Up is a Windows Form Application store management application. It utilizes Entity Framework and layer-based programming to ensure security and scalability. </p>
                <div className="portfolio-project-links-container">
                  <a href="https://github.com/parsasi/stockup"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                  {/* <a href="https://github.com"> <FontAwesomeIcon icon={faExternalLinkAlt} /> See Live </a> */}
                </div>
              </div>
            </div>


            <div className="portfolio-project">
              <div className="portfolio-project-image-container">
                <img src="../static/lustr.png" alt="Project title"/>
              </div>
              <div className="portfolio-project-content">
                <h4> Lustr </h4>
                <p>Just like Lustr, each time the relationship seems to be progressing, hidden information is made visible. This way you build a longer lasting relationship.</p>
                <div className="portfolio-project-links-container">
                  <a href="https://github.com/parsasi/lustr"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                  {/* <a href="https://github.com"> <FontAwesomeIcon icon={faExternalLinkAlt} /> See Live </a> */}
                </div>
              </div>
            </div>


          </div>       
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps(){
    const configData = await import(`../siteconfig.json`)
  
    return {
      props : {
        title : configData.title,
        description : configData.description
      }
    }
  }
  