import { Row, Col } from 'react-bootstrap';
import LoremIpsum from '../lorem-ipsum';

import { author, copyYear } from '../../lib/constants'

export default function Footer() {
    return (
        <footer className="p-4 container">
            <Row className="d-flex py-4 my-4 border-top text-muted">

                <Col><p><small>{`${author} ~ © ${copyYear}`}</small></p></Col>
                <Col className="col fs-6 fst-italic"><LoremIpsum p={1} /></Col>

            </Row>
        </footer>
    )
}
