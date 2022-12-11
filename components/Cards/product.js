import { Card, Badge, Button } from 'react-bootstrap';

export function ProductCard({ data }) {
    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" className="pt-4" src={data.image} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                    <Badge pill className="mb-1 align-middle" variant="warning">{data.group}</Badge>
                </div>
                <Card.Text className="text-dark">{data.desc}</Card.Text>
                <Button className="mt-auto font-weight-bold" variant="outline-dark">
                    {data.price} SEK
                </Button>
            </Card.Body>
        </Card>
    )
}