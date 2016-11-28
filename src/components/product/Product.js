import React from 'react';
import { Link } from 'react-router';
import ProductImages from './ProductImages';
import { Col, Row } from 'react-bootstrap';

class Product extends React.Component {

    render () {
        return (
            <Link to={ '/product/' + this.props.product.id } >
                <div className="product-item" >
                    <Col md={5} ><ProductImages src={this.props.product.images} /></Col>
                    <Col md={7} >
                        <Row>
                            <h4>{this.props.product.name}</h4>
                        </Row>
                        <Row>
                            <p>{this.props.product.description}</p>
                        </Row>
                    </Col>
                </div>
            </Link>
        );
    }

}

export default Product;
