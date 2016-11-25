import React from 'react';
import { Col } from 'react-bootstrap';
import Product from './Product';

class Products extends React.Component {

    render () {
        const products = this.props.products.map(function (value, key) {
            return <Col key={value.id} md={4} xs={6} >
                <Product product={value} />
            </Col>
        });

        return (
            <div>{products}</div>
        );
    }

}

export default Products;
