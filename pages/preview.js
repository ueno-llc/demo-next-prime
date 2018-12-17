import React from 'react';
import { setVersionId } from '../src/utils/primeUtils';

export default class Preview extends React.Component {
  static async getInitialProps({ req, res }) {
    if (res) {
      const { versionId } = req.query;
      setVersionId(versionId);
      res.writeHead(302, {
        'Set-Cookie': 'prime.versionId=' + String(versionId || ''),
        Location: '/',
      });
      res.end();
    }
    return {};
  }

  render() {
    return null;
  }
}
