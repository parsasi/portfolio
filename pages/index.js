import Layout from '../components/Layout.tsx'
import PostList from '../components/PostList'
import matter from 'gray-matter'


export default function Home({title , description ,... props}) {

  return (
    <>
      <Layout pageTitle={`${title}`} description={description}>
        <img src="../static/landing.png" alt="picutre of a guy carrying messages" />
        <h2 className="landing-page-title"> Full-Stack Web Developer </h2>
        <p> I am Full-Stack Web Developer, passionate aboute solutions that bring people together; and, make communities, aiming to solve world’s problems, one at a time. </p>
      </Layout>
    </>
  )
}


const postlist = <PostList  />//posts = {props.posts}


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