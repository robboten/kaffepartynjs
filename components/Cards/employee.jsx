import { Card, Button } from 'react-bootstrap';
import { LoremIpsum, fullname, Avatar } from 'react-lorem-ipsum';

export function EmployeeCard({ data }) {
    return (
        <Card className="h-100 border-white" key={data.id}>
            <Avatar gender={data.gender} className="align-self-center avatar rounded-circle my-4" width="200" height="200" alt="Avatar" />
            <Card.Body className="d-flex flex-column text-center">
                <Card.Title as="h4">{fullname(data.gender)}</Card.Title>
                <Card.Subtitle as="h5" className="text-muted mb-2">{data.role}</Card.Subtitle>
                <LoremIpsum p={1} avgSentencesPerParagraph={3} />
                <Button variant="outline-dark" className='mt-auto mx-4' href="mailto:foo@bar.baz">
                    Mail me!
                </Button>
            </Card.Body>
        </Card>
    )
}

