import { Row, Col } from 'react-bootstrap';

import { ProductCard } from '../components/Cards/product';
import Layout from '../components/Layout/layout';

import products from '../lib/products';

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