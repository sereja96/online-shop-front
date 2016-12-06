import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'react-bootstrap';
import ProductImages from '../product/ProductImages';

class ProductItem extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            count: this.props.basket.count,
            total: this.props.basket.product.price * this.props.basket.count
        };
    }

    deleteProduct () {
        this.props.removeProduct(this.props.basket.product.id);
    }

    handleCountChange (e) {
        this.setState({
            count: e.target.value,
            total: e.target.value * this.props.basket.product.price
        });

        this.props.updateCount(this.props.basket.id, e.target.value);
    }

    render () {
        const product = this.props.basket.product;
        const count = this.props.basket.count;

        return (
            <div className="basket-item" >
                <Col md={2} ><ProductImages /></Col>
                <Col md={3} >
                    <Row>
                        <h3>
                            <Link to={ ['/product', product.id].join('/') } >{product.name}</Link>
                        </h3>
                    </Row>
                    <Row>
                        <h4>{product.description}</h4>
                    </Row>
                </Col>
                <Col md={2}>
                    <h2>${product.price}</h2>
                </Col>
                <Col md={1}>
                    <input className="product-count"
                           type="number"
                           min="1"
                           defaultValue={count}
                           onChange={this.handleCountChange.bind(this)} />
                </Col>
                <Col md={2}>
                    <h2>${this.state.total}</h2>
                </Col>
                <Col md={2}>
                    <Button style={ {margin: '45px auto'} }
                            bsStyle="danger"
                            bsSize="sm"
                            onClick={this.deleteProduct.bind(this)}>Удалить</Button>
                </Col>
            </div>
        );
    }

}

export default ProductItem;
