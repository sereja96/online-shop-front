import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
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
                <Col md={4} >
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
                <Col md={3}>
                    <Row>
                        <Link to={ '/shop/' + this.props.shop.id } >
                            <Button style={{margin: '5px auto'}} bsSize="sm" bsStyle="primary">Войти</Button>
                        </Link>
                    </Row>
                    <Row style={{display: !this.props.myOnly ? 'none' : ''}}>
                        <Button style={{margin: '5px auto'}} bsSize="sm" bsStyle="danger">Удалить</Button>
                    </Row>
                    <Row style={{display: !this.props.myOnly ? 'none' : ''}}>
                        <Button style={{margin: '5px auto'}} bsSize="sm" bsStyle="warning">Закрыть</Button>
                    </Row>
                </Col>
            </div>
        );
    }

}

export default Shop;
