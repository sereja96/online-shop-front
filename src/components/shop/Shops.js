import React from 'react';
import { Col } from 'react-bootstrap';
import Shop from './Shop';

class Shops extends React.Component {

    constructor (props) {
        super(props);
    }

    componentWillUnmount() {

    }

    componentDidMount() {
        this.props.getPopularShops(this.props.count);
    }

    render () {
        const { shops, loading, error } = this.props.loadedShops;

        var shopsDisplay = '';
        if (loading) {
            shopsDisplay = <h3>Список магазинов загружается...</h3>
        } else {
            if (shops.length) {
                shopsDisplay = shops.map(function (value, key) {
                    return <Col key={value.id} md={4} xs={6} >
                        <Shop shop={value} />
                    </Col>
                });
            } else {
                shopsDisplay = <h3>Не найдено ни одного магазина.</h3>
            }
        }

        return (
            <Col xs={12}>{ shopsDisplay }</Col>
        );
    }
}

export default Shops;
