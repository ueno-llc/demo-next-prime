import React from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Button } from '../../components/button/Button';
import { Columns } from '../../components/columns/Columns';
import { Column } from '../../components/columns/Column';
import { Articles } from './components/articles/Articles';
import { Hero } from './components/hero/Hero';
import { Cta } from './components/cta/Cta';

export const Homepage = () => (
  <Query
    query={homepageQuery}
  >
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return <h3>Error: {error.message}</h3>
      const { Homepage } = data;
      return (
        <div>
          <Hero carousel={Homepage.carousel} />

          <Columns
            heading={Homepage.columnTitle}
            subline={Homepage.columnSubheading}
          >
            {[].concat(Homepage.contentColumns || []).map((item, i) => (
              <Column
                key={i}
                title={item.title}
                text={item.text}
              />
            ))}
          </Columns>

          <Articles
            title={Homepage.articlesTitle}
            subheading={Homepage.articlesSubheading}
            articles={Homepage.featuredArticles}
            show={4}
          />

          <Cta>
            <p>Want to talk more.</p>
            <Button to="/contact" large stroke>Contact us</Button>
          </Cta>
        </div>
      );
    }}
  </Query>
);

export const homepageQuery = gql`
  query {
    Homepage(id:"0KnXMjlEGo") {
      id

      carousel {
        title
        text
        color
      }

      columnTitle
      columnSubheading
      contentColumns {
        title
        text
      }

      articlesTitle
      articlesSubheading
      featuredArticles {
        article {
          id
          slug
          title
          shortDescription
          publicationDate
          author {
            id
            name
            bio
            image
          }
        }
      }
    }
  }
`;
