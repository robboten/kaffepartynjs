import NavbarHead from "../Parts/navbar";
import Footer from "../Parts/footer";
import Meta from "../Parts/meta";
import PageHeader from '../Parts/page-header';

import { Container, Row, Col } from 'react-bootstrap';

export default function Layout({ children, title }) {
  return (
    <>
      <style jsx global>{`
        .pre-wrap{
          white-space: pre-wrap;
        }
      `}</style>
      <Meta />
      <NavbarHead />
      <Container>
        <PageHeader title={title} />
        <main>
          {children}
        </main>
      </Container>
      <Footer />
    </>
  );
}