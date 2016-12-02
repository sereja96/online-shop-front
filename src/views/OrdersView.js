import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Orders from '../containers/order/Orders';

class OrdersView extends React.Component {

    render () {
        return (
            <Col xs={12}>
                <h2 className="block-header" >Мои Заказы</h2>
                <hr className="underline-header" />
                <Row>
                    <Orders />
                </Row>
            </Col>
        );
    }

}

export default OrdersView;

