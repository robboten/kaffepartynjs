import { Row, Col } from 'react-bootstrap';

import { EmployeeCard } from '../components/Cards/employee';
import Layout from '../components/Layout/layout';

import employees from '../lib/employees';

function About() {
    return (
        <Layout title="About Us">
            <Row>
                {employees.map(data => (
                    <Col className="mb-5" key={`${data.id}`}>
                        <EmployeeCard data={data} />
                    </Col>
                ))}
            </Row>
        </Layout>

    );
}

export default About;