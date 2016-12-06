import React from 'react';
import { Col } from 'react-bootstrap';
import Discount from './Discount';

class Order extends React.Component {

    render () {
        return (
            <div className="order-item" >
                <Col md={2} >

                </Col>
                <Col md={3} >

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>
                    <Discount discount={this.props.order.discount} />
                </Col>
            </div>
        );
    }

}

export default Order;
