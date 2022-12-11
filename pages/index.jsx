import { Container } from 'react-bootstrap';

import { mainPageHeaders, host } from '../lib/constants';

import SimpleRow from '../components/simple-row';
import Layout from '../components/Layout/layout';
import QuoteRow from '../components/quote-row';

export async function getStaticProps() {
  const res = await fetch(`${host}/api/quote`)
  const json = await res.json()

  return {
    props: {
      quote: json[0].q,
      src: json[0].a,
    }
  }
}

function Home({ quote, src }) {
  return (
    <Layout title="Kaffeparty">
      <QuoteRow quote={quote} src={src} />
      <Container>
        {mainPageHeaders.map(data => (
          <SimpleRow key={data.title} title={data.title} align={data.align} span={data.span} src={data.src} />
        ))}
      </Container>
    </Layout>
  );
}

export default Home;
