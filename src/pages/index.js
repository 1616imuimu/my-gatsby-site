import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const PostItem = props => {
  const { title, link, pubDate } = props.post
  return (
    <li>
      <a href={link}>
        {title}
        <small>[{pubDate}]</small>
      </a>
    </li>
  )
}

const IndexPage = props => {
  return (
    <div>
      <p> Hello Gatsby </p>
      <Link to="/about">Link to About</Link>
      <ul>
        {props.data.allFeedQiita.nodes.map(post => {
          return <PostItem post={post} key={post.link} />
        })}
      </ul>
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
