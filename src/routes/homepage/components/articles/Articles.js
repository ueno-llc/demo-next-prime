import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { format } from 'date-fns';
import { AuthorBlock } from '../../../../components/author/AuthorBlock';
import s from './Articles.scss';

export class Articles extends Component {

  static propTypes = {
    title: PropTypes.string,
    subheading: PropTypes.string,
    articles: PropTypes.array,
    show: PropTypes.number,
  }

  render() {
    const { title, subheading, articles, show } = this.props;

    if (articles.length === 0) {
      return null;
    }

    return (
      <div className={s.articles}>
        <div className={s.articles__container}>
          <div className={s.articles__row}>
            <div className={s.articles__header}>
              <h2 className={s.articles__headerTitle}>{title}</h2>
              <h2 className={s.articles__headerTitle}>{subheading}</h2>
            </div>

            {articles && (
              <ul className={s.articles__list}>
                {articles.slice(0, show).map(({ article = {} }) => {
                  if (!article) {
                    return null;
                  }

                  const url = `/articles/${article.slug}`;
                  const date = article.publicationDate;
                  const author = article.author;

                  return (
                    <li key={article.id} className={s.articles__item}>
                      <Link href={url}>
                        <a className={s.articles__link}>
                          {date && (
                            <p className={s.articles__date}>{format(date, 'DD MMMM')}</p>
                          )}

                          <div className={s.articles__inner}>
                            <div className={s.articles__lead}>
                              <h2 className={s.articles__title}>{article.title}</h2>
                              {author && (
                                <div className={s.articles__author}>
                                  <AuthorBlock
                                    name={author.name}
                                    bio={author.bio}
                                    image={author.image}
                                  />
                                </div>
                              )}
                            </div>
                            <p className={s.articles__description}>{article.shortDescription}</p>
                            <span className={s.articles__button}>Read more</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    );
                  })}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}
