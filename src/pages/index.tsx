import type { NextPage } from "next";
import Head from "next/head";

import CurrentTime from "../components/CurrentTime";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Masai Code</title>
        <meta name="description" content="Problem solving platform" />
        <link
          rel="icon"
          href="https://d27028dliefpk3.cloudfront.net/assets/favicon/favicon.ico"
        />
      </Head>
      <CurrentTime />
    </div>
  );
};

export default Home;
