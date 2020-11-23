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
      `}</style>
      <Layout pageTitle={`${title} | Portfolio`} description={description}>
        <div className="portfolio-container">
          <div className="portfolio-header">
              <h2> Projects </h2>
          </div>

          <div className="portfolio-projects">
            <div className="portfolio-project">
              <div className="portfolio-project-image-container">
                <img src="https://unsplash.com/photos/IKUYGCFmfw4/download?force=true&w=640" alt="Project title"/>
              </div>
              <div className="portfolio-project-content">
                <h4> Project Title </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className="portfolio-project-links-container">
                  <a href="https://github.com"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                  <a href="https://github.com"> <FontAwesomeIcon icon={faExternalLinkAlt} /> See Live </a>
                </div>
              </div>
            </div>

            <div className="portfolio-project">
              <div className="portfolio-project-image-container">
                <img src="https://unsplash.com/photos/hGV2TfOh0ns/download?force=true&w=640" alt="Project title"/>
              </div>
              <div className="portfolio-project-content">
                <h4> Project Title </h4>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <div className="portfolio-project-links-container">
                  <a href="https://github.com"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                  <a href="https://github.com"> <FontAwesomeIcon icon={faExternalLinkAlt} /> See Live </a>
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
                <img src="https://unsplash.com/photos/bYiw48KLbmw/download?force=true&w=640" alt="Project title"/>
              </div>
              <div className="portfolio-project-content">
                <h4> Project Title </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className="portfolio-project-links-container">
                  <a href="https://github.com"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                  <a href="https://github.com"> <FontAwesomeIcon icon={faExternalLinkAlt} /> See Live </a>
                </div>
              </div>
            </div>


            <div className="portfolio-project">
              <div className="portfolio-project-image-container">
                <img src="https://unsplash.com/photos/xNKy-Cu20d4/download?force=true&w=640" alt="Project title"/>
              </div>
              <div className="portfolio-project-content">
                <h4> Project Title </h4>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <div className="portfolio-project-links-container">
                  <a href="https://github.com"> <FontAwesomeIcon icon={faGithub} /> Github </a>
                  <a href="https://github.com"> <FontAwesomeIcon icon={faExternalLinkAlt} /> See Live </a>
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
  