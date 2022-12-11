
import { Container, Row, Col } from 'react-bootstrap';
import LoremIpsum from './lorem-ipsum';
import { DividerSm } from './style-parts';


function TitleRow({ h }) {
    return (
        <Row>
            <Col md={8} className="mx-auto text-center">
                <h5>{h}</h5>
                <DividerSm />
            </Col>
        </Row>
    )
}

function ContentRow({ align, src, span }) {
    //flip the columns depending on align
    let firstCol = align ? 1 : 2;
    let secondCol = align ? 2 : 1;

    return (
        <Row className="fs-6 py-4">
            <Col className={"order-" + firstCol}><img className="img-thumbnail img-fluid" alt="..." src={src} /></Col>
            <Col md={span} className={"order-" + secondCol}><LoremIpsum p={2} /></Col>
        </Row>
    )
}

function SimpleRow({ title, src, align, span }) {
    return (
        <Container>
            <TitleRow h={title} />
            <ContentRow align={align} src={src} span={span}/>
        </Container>
    )
}

export default SimpleRow
