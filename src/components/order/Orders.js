import React from 'react';
import Order from './Order';
import NoContent from '../../containers/NoContent';
import { Col } from 'react-bootstrap';

class Orders extends React.Component {

    constructor(props) {
        super(props);

        this.props.loadOrders();
    }

    render () {
        const { orders, error, loading } = this.props.loadedOrders;

        var data = <tr>
            <td colSpan={7}>
                Не найдено ни одной записи
            </td>
        </tr>;

        if (!loading && !error) {
            data = orders.map(function(value, key) {
                return <Order key={key} order={value} />;
            });
        }

        return (
            <table className="order-table">
                <thead>
                    <tr>
                        <td>
                            Статус
                        </td>
                        <td>
                            Адрес
                        </td>
                        <td>
                            Номер Тел.
                        </td>
                        <td>
                            Количество Товаров
                        </td>
                        <td>
                            Стоимость без скидки
                        </td>
                        <td>
                            Скидка
                        </td>
                        <td>
                            Стоимость со скидкой
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        );
    }

}

export default Orders;
