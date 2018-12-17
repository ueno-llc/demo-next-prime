import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../src/utils/with-apollo-client';
import { AppLayout } from '../src/components/app-layout/AppLayout';
import { Header } from '../src/components/header/Header';
import { Footer } from '../src/components/footer/Footer';
import { PrimePreview } from '../src/components/prime-preview/PrimePreview';

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <AppLayout>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <PrimePreview />
          </AppLayout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp)
