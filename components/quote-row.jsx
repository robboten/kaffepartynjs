import { Row} from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';

function QuoteRow({quote, src }) {
    return (
        <Row className='text-center pb-4'>
        <Figure>
            <blockquote className="blockquote text-muted">
            <p>{quote}</p>
            </blockquote>
            <Figure.Caption className="blockquote-footer">
                By <cite title="Source Title">{src}</cite>
            </Figure.Caption>
        </Figure>
    </Row>
    )
}

export default QuoteRow;