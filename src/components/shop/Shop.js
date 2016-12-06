import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import ShopImage from './ShopImage';

class Shop extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="shop-item" >
                <Col md={5} ><ShopImage src={this.props.shop.image} /></Col>
                <Col md={7} >
                    <Row>
                        <Link to={ '/shop/' + this.props.shop.id } >
                            <h4>{this.props.shop.name}</h4>
                        </Link>
                    </Row>
                    <Row>
                        <p>{this.props.shop.description}</p>
                    </Row>
                    <Row>
                        <p>{'Рейтинг: ' + this.props.shop.rate + ' из 5' }</p>
                    </Row>
                    <Row>
                        <p>
                            {
                                'Товаров: ' +
                                (this.props.shop.product_count && this.props.shop.product_count.count || 0)
                            }
                        </p>
                    </Row>
                </Col>
            </div>
        );
    }

}

export default Shop;
