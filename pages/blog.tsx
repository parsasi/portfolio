import Layout from '../components/Layout'
import PostList from '../components/PostList'
import matter from 'gray-matter'
import styleConstants from '../styles/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default function Blog({ title, description, ...props }){
  return (
    <>
      <style jsx>{`
        .blog-container{

        }
        .blog-header{
          text-align:center;

        }
        .blog-header h2{
          font-family:${styleConstants.fonts.heading};
          font-size:1.9rem;
          margin-top:60px;
          letter-spacing:1rem;
        }

        .blog-projects{
          padding:50px;
          overflow:hidden;

          width: 100%;
          overflow: hidden;
          margin-bottom: -1.875em;
          -webkit-column-count: 2;
          -webkit-column-gap: 1.875em;
          -webkit-column-fill: auto;
          -moz-column-count: 2;
          -moz-column-gap: 1.875em;
          -moz-column-fill: auto;
          column-count: 2;
          column-gap: 1.875em;
          column-fill: auto;
        }

        
      `}</style>
      <Layout pageTitle={`${title} | Blog`} description={description}>
        <div className="blog-container">
          <div className="blog-header">
              <h2> Blog </h2>
          </div>

          <div className="blog-projects">
            <PostList posts={props.posts} />

          </div>       
        </div>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)
  
    const posts = ((context) => {
      const keys = context.keys()
      const values = keys.map(context)
  
      const data = keys.map((key, index) => {
        let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
        const value = values[index]
        const document = matter(value.default)
        return {
          frontmatter: document.data,
          markdownBody: document.content,
          slug,
        }
      })
      return data
    })(require.context('../posts', true, /\.md$/))
  
    return {
      props: {
        posts,
        title: configData.default.title,
        description: configData.default.description,
      },
    }
  }