import React from 'react';
import { Col, FormControl, Form, Button } from 'react-bootstrap';
import Discount from '../order/Discount';

class MakeOrder extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            address: '',
            phone: '',
            discount: ''
        };

        this.systemState = {
            isDiscountLoaded: false
        };
    }

    handleAddressChange (e) {
        this.setState({address: e.target.value});
    }

    handlePhoneChange (e) {
        this.setState({phone: e.target.value});
    }

    handleDiscountChange (e) {
        this.setState({discount: e.target.value});
    }

    confirmOrder () {
        console.log(this.state);

        if (this.state.address.length && this.state.phone.length) {
            this.props.confirmOrder(this.state);
        }
    }

    checkDiscount () {
        if (this.state.discount.length == 0) {
            return;
        }

        this.props.checkDiscountCode(this.state.discount);
    }

    render () {
        const orderResult = this.props.orderResult;

        if (orderResult.success && !orderResult.loading) {
            console.log('redirect!!');
            return;
        }

        const discountLoaded = this.props.discountLoaded;

        console.log(discountLoaded);
        if (!discountLoaded.loading
            && discountLoaded.error == null
            && discountLoaded.discount != null) {
            console.log("hide");
            this.systemState.isDiscountLoaded = true;
        }

        return (
            <div>
                <Col xs={10} xsOffset={1}>
                    <h3>Оформление Заказа</h3>
                </Col>

                <Col xs={10} xsOffset={1} className="order-field">
                    <FormControl
                        type="text"
                        onChange={this.handleAddressChange.bind(this)}
                        placeholder="Введите адрес доставки:" />
                </Col>

                <Col xs={10} xsOffset={1} className="order-field">
                    <FormControl type="text"
                                 onChange={this.handlePhoneChange.bind(this)}
                                 placeholder="Введите номер телефона для связи:"  />
                </Col>

                <Col xs={10}
                     style={ {display: this.systemState.isDiscountLoaded ? 'none' : ''} }
                     xsOffset={1}
                     className="order-field">
                    <Form inline>
                        <FormControl type="text"
                                     onChange={this.handleDiscountChange.bind(this)}
                                     placeholder="Введите код для скидки:" />
                        <Button bsSize="sm"
                                onClick={this.checkDiscount.bind(this)}
                                bsStyle="primary" >Проверить Код</Button>
                    </Form>
                </Col>
                <Col xs={10}
                     style={ {display: !this.systemState.isDiscountLoaded ? 'none' : ''} }
                     xsOffset={1}
                     className="order-field">
                    <Discount discount={discountLoaded.discount} />
                </Col>

                <Col xs={4} xsOffset={4} >
                    <Button style={ {width: '100%'} }
                            bsSize="lg"
                            onClick={this.confirmOrder.bind(this)}
                            bsStyle="success">Подтвердить Заказ</Button>
                </Col>
            </div>
        );
    }

}

export default MakeOrder;
