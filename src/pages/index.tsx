import type { NextPage } from "next";
import Head from "next/head";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import styles from "../styles/Home.module.css";
import BookInfo from "../components/BookInfo";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

const Home: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>Masai Code</title>
          <meta name="description" content="Problem solving platform" />
          <link
            rel="icon"
            href="https://d27028dliefpk3.cloudfront.net/assets/favicon/favicon.ico"
          />
        </Head>
        <BookInfo />
      </div>
    </ApolloProvider>
  );
};

export default Home;
