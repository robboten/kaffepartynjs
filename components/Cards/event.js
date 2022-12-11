import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from '../../styles/EventCard.module.css';
import { FaCalendarAlt } from 'react-icons/fa';

function EventCard( data ) {
    return (
        <Row  className={styles.eventrow}>
            <Col className={styles.dateholder} md={4}>
                <div className={styles.icon}><FaCalendarAlt /></div>
                <div className={styles.date}>
                    <span>{data.date}</span><br />
                    <span>{data.location}</span>
                </div>
            </Col>
            <Col md={8} className={styles.eventcontent}>
                <h5>{data.name}</h5>
                <p>{data.description}</p>
            </Col>
        </Row>
    )
}
export default EventCard