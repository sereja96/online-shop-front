import React from 'react';
import { Col, Row, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router';
import Basket from '../containers/basket/Basket';
import MakeOrder from '../containers/order/MakeOrder';

class BasketView extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            showOrderForm: false
        };
    }

    showOrderForm () {
        this.setState({showOrderForm: true});
    }

    render () {
        return (
            <Col xs={12}>
                <h2 className="block-header" >Корзина</h2>
                <hr className="underline-header" />
                <Row>
                    <Basket />
                </Row>

                <Row style={ {display: this.state.showOrderForm ? '' : 'none'} } >
                    <MakeOrder />
                </Row>

                <Row style={ {display: !this.state.showOrderForm ? '' : 'none'} }>
                    <Col xs={4} xsOffset={4} >
                        <Button onClick={this.showOrderForm.bind(this)}
                                style={ {width: '100%'} }
                                bsSize="lg"
                                bsStyle="primary">Оформить Заказ</Button>
                    </Col>
                </Row>
            </Col>
        );
    }

}

export default BasketView;
