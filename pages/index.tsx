import Layout from '../components/Layout'
import PostList from '../components/PostList'
import matter from 'gray-matter'


export default function Home({title , description ,... props}) {

  return (
    <>
        <style jsx>{`
          .landing-content{
            position: relative;
            min-height:2000px;
          }

          .landing-page-texts{
            max-width:350px;
            position:absolute;
            top: 350px;
            left: 20%;
            font-size:1.2rem;
          }
          .landing-paragraph{
            max-width:300px;
          }

          .landing-page-graphic{
            position:absolute;
            top:100px;
            right: 20%;
            width:35%;

          }
        `}</style>
        <Layout pageTitle={`${title}`} description={description}>
          <div className="landing-content">
            <img className="landing-page-graphic" src="../static/landing.png" alt="picutre of a guy carrying messages" />
            <div className="landing-page-texts">
              <h2 className="landing-page-title"> Full-Stack Web Developer </h2>
              <p className="landing-paragraph"> I am Full-Stack Web Developer, passionate aboute solutions that bring people together; and, make communities, aiming to solve world’s problems, one at a time. </p>
            </div>
          </div>
        </Layout>
    </>
  )
}


// const postlist = <PostList  />//posts = {props.posts}


export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  // const posts = ((context) => {
  //   const keys = context.keys()
  //   const values = keys.map(context)

  //   const data = keys.map((key, index) => {
  //     let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
  //     const value = values[index]
  //     const document = matter(value.default)
  //     return {
  //       frontmatter: document.data,
  //       markdownBody: document.content,
  //       slug,
  //     }
  //   })
  //   return data
  // })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      // posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}