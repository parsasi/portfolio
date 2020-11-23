import Layout from '../components/Layout'
import PostList from '../components/PostList'
import matter from 'gray-matter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import styleConstants from '../styles/constants'
import { applyParallax } from '../helpers/parallax'
import Link from 'next/link'


export default function Home({title , description ,... props}) {

  useEffect(() => {
    const content = document.querySelector('.content')
    const paragraph = document.querySelector('.landing-page-about')
    const title = document.querySelector('.landing-page-about-container ')
    const illustration = document.querySelector('.landing-page-graphic')
    const texts = document.querySelector('.landing-page-texts')
    content.addEventListener('scroll' , e => {
        applyParallax(title , -0.2 , e)
        applyParallax(paragraph , -0.1 , e)
        applyParallax(illustration , -8 , e)
        applyParallax(texts , +8 , e)
    })
  } , [])

  return (
    <>
        <style jsx>{`
          .landing-content{
            position: relative;
            min-height:2000px;
          }
          .landing-content-first{
            position:absolute;s
            top:0;
            left:0;
            width:100%;
            height:1000px;
            overflow:hidden;
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

          .landing-arrow{
            position:absolute;
            width:10px;
            text-align:center;
            left:calc(50% - 10px);
            top:650px;
          }
          
          .landing-content-second{
            position:absolute;
            top:1000px;
            left:0;
            width:100%;
            height:1000px;
            display:flex;
            overflow:hidden;
          }
          .landing-page-left , .landing-page-right{
            width:50%;
            height:100%;
          }
          .landing-page-left{
            display:flex;
            justify-content:center;
            align-items:center;
          }
          .landing-photo-container{
            border-radius:50%;
            width: 200px;
            height:200px;
            border:15px solid ${styleConstants.color.secondary[2]};
            overflow:hidden;
            margin-top:-1000px;
          }
          .landing-photo-container img{
            width:100%;
          }
          .landing-page-right-noteffective{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
          }
          .landing-page-right{
            position:relative;
          }
          .landing-page-about-title{
            font-family : ${styleConstants.fonts.heading};
            font-size:2rem;
          }
          .landing-page-about-container{
            position:absolute;
            left:0;
            top:700px;
            min-height:
          }
          .landing-page-about{
            font-size:1.3rem;
            max-width:70%;
            line-height:1.5rem;
            margin-top:30px;
            margin-bottom:0px;
            margin-top:600px;
          }
          .landing-cta{
            text-align:center;
            display:inline-block;
            border-radius:1px;
            padding:10px 30px;
            background-color:${styleConstants.color.primary[1]};
          }
        `}</style>
        <Layout pageTitle={`${title}`} description={description}>
          <div className="landing-content">
            <div className="landing-content-first">
              <img className="landing-page-graphic" src="../static/landing.png" alt="picutre of a guy carrying messages" />
              <div className="landing-page-texts">
                <h2 className="landing-page-title"> Full-Stack Web Developer </h2>
                <p className="landing-paragraph"> I am Full-Stack Web Developer, passionate aboute solutions that bring people together; and, make communities, aiming to solve world’s problems, one at a time. </p>
              </div>
              <div className="landing-arrow"> <FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
            <div className="landing-content-second">
              <div className="landing-page-left">
                  <p className="landing-page-about"> 
                      I started coding at 12 years old. I remember reading a ASP.NET MVC during classes at school. Teachers did not like that! Anyways, I have been coding for the last 8 years, and I have loved every second of it.
                  </p>
              </div>
              <div className="landing-page-right">
                <h3 className="landing-page-about-container">
                  <h3 className="landing-page-about-title">All passion, no luck</h3>
                  <Link href="/contact"><a className="landing-cta"> Contact Me </a></Link>
                </h3>
              </div>
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