import Layout from '../components/Layout'

export default function About({ title, description, ...props }){
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Welcome to About page!</h1>

        <p className="description">
          {description}
        </p>

        <p>
          I am a very exciting person. I know this because I'm following a very exciting tutorial, and a not-exciting person wouldn't do that.
        </p>
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
  