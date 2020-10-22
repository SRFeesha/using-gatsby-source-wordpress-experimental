import React from 'react'
import Layout from '../components/layout';
// import BlogRoll from '../components/blogRoll';
import { Heading, Box, Grid } from "@chakra-ui/core";
import { graphql, Link } from 'gatsby';

const BlogPage = ({ data }) => {
    const posts = data.allWpPost.nodes;

    return (
        <Layout>
            <Heading as="h1" size="xl" mb={20}>Wonderflow Blog</Heading>
            <Grid templateColumns="1fr 1fr" gap={8}>
                {posts && posts.map((post) => (
                    <Box bg="blue.900">
                        <Link to={post.link}>
                            <Heading as="h3" size="md">{post.title}</Heading>
                            <p>Author: {post.author.node.name}</p>
                            <p>{post.excerpt}</p>
                        </Link>
                    </Box>
                ))}
            </Grid>

        </Layout>
    )
}

export const query = graphql`
  {
    allWpPost(filter: {status: {eq: "publish"}}) {
      nodes {
        uri
        title
        link
        author {
          node {
            id
            name
          }
        }
        excerpt
      }
    }
  }
`

export default BlogPage;
