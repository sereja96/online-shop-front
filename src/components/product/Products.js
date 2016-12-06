import React from 'react';
import { Col } from 'react-bootstrap';
import Product from './Product';
import NoContent from '../../containers/NoContent';

class Products extends React.Component {

    render () {
        if (typeof this.props.products != 'undefined') {
            var products = this.props.products.map(function (value, key) {
                return <Col key={value.id} md={4} xs={6} >
                    <Product product={value} />
                </Col>
            });
        } else {
            products = <NoContent message="Идет Загрузка..." />;
        }


        return (
            <div>{products}</div>
        );
    }

}

export default Products;
