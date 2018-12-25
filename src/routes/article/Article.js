import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Author } from '../../components/author/Author';
import { Heading } from '../../components/heading/Heading';
import { Slices } from '../../components/slices/Slices';
import s from './Article.scss';

export const Article = ({ id }) => (
  <Query
    query={articleQuery}
    variables={{ id }}
  >
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return <h3>Error: {error.message}</h3>;
      const article = data.allArticle.edges.reduce((acc, { node }) => node, {});
      if (!article) return <h3>Not Found</h3>;
      const { author } = article;

      return (
        <div className={s.article}>

          {author && (
            <Author
              name={author.name}
              bio={author.bio}
              image={author.image}
            />
          )}

          <Heading>{article.title}</Heading>

          <Slices items={article.body} />
        </div>
      );
    }}
  </Query>
);


export const articleQuery = gql`
  query article(
    $id: String
  ) {
    allArticle(
      where: {
        slug: { eq: $id }
      }
    ) {
      edges {
        node {
          id
          slug
          title
          shortDescription
          publicationDate
          author {
            ... on Author {
              id
              name
              bio
              image
            }
          }
          image
          body {
            __typename
            ... on TextSlice {
              text
            }
            ... on ImageSlice {
              image
              caption
            }
          }
        }
      }
    }
  }
`;
