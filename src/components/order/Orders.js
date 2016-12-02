import React from 'react';
import Order from './Order';
import NoContent from '../../containers/NoContent';

class Orders extends React.Component {

    render () {
        const { orders, error, loading } = this.props.loadedOrders;

        var data = <NoContent />;
        if (!loading && !error) {
            data = orders.map(function(value, key) {
                return <Order key={key} order={value} />;
            });
        }

        return (
            data
        );
    }

}

export default Orders;
