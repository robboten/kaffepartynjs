import { Row, Col } from 'react-bootstrap';
import products from '../lib/products';

import { ProductCard } from '../components/Cards/product';
import Layout from '../components/Layout/layout';

function Products() {
    return (
        <Layout>
            <Row>
                {products.map(data => (
                    <Col className="mb-5" key={`${data.id}`}>
                        <ProductCard data={data} />
                    </Col>
                ))}
            </Row>
        </Layout>

    );
}

export default Products;