import React from 'react';
import { Link } from 'react-router';
import ProductImages from './ProductImages';
import { Col, Row, Button } from 'react-bootstrap';
import { addProduct } from '../../actions/BasketAction';

class Product extends React.Component {

    addToBasket () {
        addProduct(this.props.product.id, 1);
    }

    render () {
        return (
            <div className="product-item" >
                <Col md={5} ><ProductImages src={this.props.product.images} /></Col>
                <Col md={7} >
                    <Row>
                        <Link to={ '/product/' + this.props.product.id } >
                            <h4>{this.props.product.name}</h4>
                        </Link>
                    </Row>
                    <Row>
                        <p>{this.props.product.description}</p>
                    </Row>
                    <Row>
                        <Button onClick={this.addToBasket.bind(this)} bsStyle="primary" >В Корзину</Button>
                    </Row>
                </Col>
            </div>
        );
    }

}

export default Product;
