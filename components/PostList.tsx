import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import styleConstants from '../styles/constants'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <>
      <style jsx>{`
        .blog-project{
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
        .blog-project-image-container{
          width:100%;
          overflow:hidden;
          z-index:-1;
        }
        .blog-project-image-container img{
          width:100%;
        }
        .blog-project-content{
          width:100%;
          padding:25px 25px 20px 25px;
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
        .blog-project-content p{
          margin-top:10px;
          line-height:1.3;
        }
        .blog-project-links-container{
          width:100%;
          display:flex;
          justify-content:space-evenly;
          margin-top:20px;
        }
        .blog-project-link{
          width:80%;
          display:inline-block;
          padding:4px;
          border-radius:20px;
          text-align:center;
          background-color:${styleConstants.color.primary[1]};
          color: ${styleConstants.color.secondary[1]};
        }
      `}</style>
      {!posts && <div>No posts!</div>}
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.slug} className="blog-project">
                <div className="blog-project-image-container">
                  <img src={post.frontmatter.image} alt={post.frontmatter.title}/>
                </div>
                <div className="blog-project-content">
                  <h4> {post.frontmatter.title}</h4>
                  <p>{post.frontmatter.summery}</p>
                  <div className="blog-project-links-container">
                    <Link href={{pathname : `/posts/${post.slug}`}}><a className="blog-project-link"><FontAwesomeIcon icon={faBookOpen} /> Read More </a></Link>
                  </div>
                </div>
              </div>

          )})}
    </>
  )
}

{/* <li key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <>
                    <a>{post.frontmatter.title}</a>
                    <img src={post.frontmatter.image}/>
                  </>
                </Link>
              </li> */}