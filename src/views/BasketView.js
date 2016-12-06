import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Basket from '../containers/basket/Basket';

class BasketView extends React.Component {

    render () {
        return (
            <Col xs={12}>
                <h2 className="block-header" >Корзина</h2>
                <hr className="underline-header" />
                <Row>
                    <Basket />
                </Row>

                <Row>
                    <Col xs={4} xsOffset={4} >
                        <Link to="order">
                            <Button style={ {width: '100%'} } bsSize="lg" bsStyle="primary" >Оформить Заказ</Button>
                        </Link>
                    </Col>
                </Row>
            </Col>
        );
    }

}

export default BasketView;
