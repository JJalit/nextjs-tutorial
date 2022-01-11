import Head from 'next/head';
import Alert from '../components/alert';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, Welcome my World</p>
        <Alert type="success">
          <h2>경고 알림</h2>
        </Alert>
        <p>
          (This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
