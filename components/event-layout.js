import { Container, Row, Col, Card } from 'react-bootstrap';
import EventCard from './Cards/event'

import eventdata from '../lib/events';
import eventdataPrivate from '../lib/events-private.json';

import styles from '../styles/EventLayout.module.css';

function CardCol({ title, carddata }) {
    return (
        <Col>
            <Card className="shadow-sm" key="" >
                <Card.Header className={styles.eventCardHead}><h4>{title}</h4></Card.Header>
                <Card.Body>
                    <Container>
                        {carddata.map(data => (
                            <EventCard {...data} key={data.index} />
                        ))}
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    )
}

function EventLayout() {
    return (
        <Container>
            <Row>
                <CardCol title="Företag" carddata={eventdata} />
                <CardCol title="Privat" carddata={eventdataPrivate} />
            </Row>


        </Container>
    )

}
export default EventLayout;