import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <p> Hello Gatsby </p>
      <Link to="/about">Link to About</Link>
    </div>
  )
}

export default IndexPage
