import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
<div>
      <Head>
        <title>Klavio Explores</title>
        <meta name="description" content="Your landing page description" />
      </Head>

      <main>
        <Layout />
      </main>

      <footer>In progress...</footer>
    </div>
  )
}
