import { Container, Row, Col } from 'react-bootstrap';
import { author, copyYear, latin, shortLatin } from '../../lib/constants'
import  LoremIpsum  from '../lorem-ipsum';
import QuoteRow from '../quote-row';

export default function Footer() {
    return (
        <Container>
            <footer className="p-4">
                <Row className="d-flex py-4 my-4 border-top text-muted">
                    
                    <Col><p><small>{`${author} ~ © ${copyYear}`}</small></p></Col>
                    <Col className="col fs-6 fst-italic"><LoremIpsum p={1} /></Col>
                    
                </Row>
            </footer>
            </Container>
    )
}
