import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const IndexPage = props => {
  return (
    <div>
      <p> Hello Gatsby </p>
      <Link to="/about">Link to About</Link>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allFeedQiita {
      nodes {
        title
        link
        pubDate
      }
    }
  }
`

export default IndexPage
