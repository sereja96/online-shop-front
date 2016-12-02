import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NoContent from '../../containers/NoContent';
import Product from '../../containers/basket/ProductItem';

class Basket extends React.Component {

    constructor (props) {
        super(props);
        this.props.getBasket();

        this.state = {
            totalCost: 0
        };
    }

    render () {
        const { basket, error, loading } = this.props.loadedBasket;

        var data = '';
        var total = this.state.totalCost;
        if (loading) {
            data = <NoContent />;
        } else {
            if (!error) {
                total = 0;
                data = basket.map(function (value, key) {
                    total += parseFloat(value.product.price) * parseInt(value.count);

                    return <Product key={key}
                                    basket={value} />
                });

            }
        }

        return (
            <div>
                {data}
                <Col md={8}><h1>Общая Стоимость:</h1></Col>
                <Col md={4}><h1>${total}</h1></Col>
            </div>
        );
    }

}

export default Basket;
