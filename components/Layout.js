import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, pageTitle, ...props }) {
    return (
      <>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{pageTitle}</title>
        </head>

        <Header />
        <section className="layout">
          <div className="content">{children}</div>
        </section>
        <Footer />
    </>
    )
  } 