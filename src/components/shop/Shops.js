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
        if (this.props.myOnly) {
            this.props.getMyShops(this.props.count);
        } else {
            this.props.getPopularShops(this.props.count);
        }
    }

    render () {
        var { shops, loading, error } = this.props.loadedShops;

        var shopsDisplay = '';
        if (loading) {
            shopsDisplay = <h3>Список магазинов загружается...</h3>
        } else {
            if (shops.length) {

                const searchString = this.props.search;
                if (typeof searchString != 'undefined' && searchString && searchString.length > 0) {
                    shops = shops.filter(function (shop) {
                        return shop.name.toLowerCase().match(searchString);
                    });
                }

                const isMy = this.props.myOnly;
                shopsDisplay = shops.map(function (value, key) {
                    return <Col key={value.id} md={4} xs={6} >
                        <Shop myOnly={isMy} shop={value} />
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
