import React from 'react';
import { Col } from 'react-bootstrap';
import Discount from './Discount';

class Order extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            totalCost: 0
        };
        this.getTotalCost();
    }

    getTotalCost () {
        const products = this.props.order.products;
        const discount = this.props.order.discount;

        var cost = 0;

        if (products.length) {
            for (var i = 0; i < products.length; i++)
            {
                const value = products[i];
                const productCount = parseFloat(value.count);
                const productPrice = parseFloat(value.product.price);
                cost += (productCount * productPrice);
            }
        }

        this.state.totalCost = cost;

        if (discount
            && discount.discount
            && discount.type
            && cost > 0) {

            if (discount.type == 'percent'
                && discount.discount > 0
                && discount.discount <= 100) {

                cost -= ((parseFloat(discount.discount) / 100) * cost);

            } else if (discount.type == 'cash'
                && discount.discount <= cost) {

                cost -= parseFloat(discount.discount);

            }
        }

        this.state.totalCostWithDiscount = cost;
    }

    render () {
        return (
            <tr>
                <td>
                    {this.props.order.status}
                </td>
                <td>
                    {this.props.order.address}
                </td>
                <td>
                    {this.props.order.phone}
                </td>
                <td>
                    {this.props.order.products.length}
                </td>
                <td>
                    {this.state.totalCost}$
                </td>
                <td>
                    <Discount discount={this.props.order.discount} />
                </td>
                <td>
                    {this.state.totalCostWithDiscount}$
                </td>
            </tr>
        );
    }

}

export default Order;
