import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostTags from '../components/postTags'
import { PostWrapper } from '../components/postwrapper'
import { Disqus } from 'gatsby-plugin-disqus'

const StyledTag = styled.span`
  font-style: italic;
`

export default ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <PostWrapper>
        <span className="datetime">{post.frontmatter.date}</span>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <p>
          <StyledTag>Tags</StyledTag>: <PostTags tags={post.frontmatter.tags} />
        </p>
      </PostWrapper>
      <Disqus 
        identifier={post.id}
        title={post.title}
        url={`https://www.ramonlence.com/${location.pathname}`}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
      }
    }
  }
`
