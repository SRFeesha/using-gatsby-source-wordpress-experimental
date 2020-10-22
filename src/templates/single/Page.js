import React from "react"
import { graphql, Link } from "gatsby"
import BlogPost from "../../components/template-parts/blog-post"

export default ({ data }) => (
<div>
<Link to="/blog">
  <h1>I am the page component — don't mind me for now: just click me and go to the blog page</h1>
  </Link>
  <BlogPost data={data} />
</div>
)

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title
      # content
      link
      featuredImage {
        node {
          remoteFile {
            ...HeroImage
          }
        }
      }
    }

    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
