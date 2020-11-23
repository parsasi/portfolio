import React from 'react'
import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styleConstants from '../../styles/constants'
import Layout from '../../components/Layout'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  // if (!frontmatter) return (<></>)

  return (
      <>
        <style jsx>{`
          .blog-post-content{
            width:100%;
            padding:50px 0;
            overflow:hidden;
          }
          .blog-post-container{
            width:90%;
            margin:auto;
            overflow:hidden;
            background-color:${styleConstants.color.secondary[2]};
            color:${styleConstants.color.primary[0]};
            border:5px solid ${styleConstants.color.primary[1]};
            font-family:${styleConstants.fonts.paragraph} !important;     
          }
          .blog-post-header{
            overflow:hidden;
          }
          .blog-post-header-photo-container{
            max-height:70vh;
            overflow:hidden;
            text-align:center;
          }
          .blog-post-header-texts h4{
            font-size:1.8rem;
          }
          .blog-post-header-texts .blog-post-author-name{
            margin:20px auto 0 auto;
          }
          .blog-post-header-texts{
            padding:40px 30px 10px 30px;
          }

          .blog-post-body{
            margin:10px 10px;
            padding:10px 30px;
            overflow:hidden;
            font-size:1.3rem;
            line-height:1.4;

            list-style-position: inside;

          }

          .blog-post-body img{
            max-width:100%;
          }
        `}</style>
        <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
          <div className="blog-post-content">
            <div className="blog-post-container">

              <div className="blog-post-header">
                <div className="blog-post-header-photo-container">
                  <img src={frontmatter.image} alt={frontmatter.title} />
                </div>
                <div className="blog-post-header-texts">
                  <h4>{frontmatter.title}</h4>
                  <p className="blog-post-author-name">By {frontmatter.author}</p>
                </div>
              </div>
              <div className="blog-post-body">
                <ReactMarkdown source={markdownBody} />
              </div>
            </div>
          </div>
        </Layout>
      </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/posts/${slug}`)

  return {
    paths,
    fallback: false,
  }
}