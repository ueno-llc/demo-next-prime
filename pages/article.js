import React from 'react';
import { withRouter } from 'next/router';
import { Article } from '../src/routes/article/Article';

export default withRouter(({ router }) => (
  <>
    <Article
      id={router.query && router.query.id}
    />
  </>
));
