import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PopularShops from '../containers/shop/PopularShops';

class ShopsView extends React.Component {

    render () {
        return (
            <Col xs={12} >
                <h2>Все Торговые Магазины</h2>
                <hr/>

                <Row>
                    <PopularShops />
                </Row>
            </Col>
        );
    }

}

export default ShopsView;
