import React from 'react';
import { Col } from 'react-bootstrap';
import ShopWithProducts from '../containers/shop/ShopWithProducts';

class ShopView extends React.Component {

    render () {
        return (
            <Col xs={12}>
                <ShopWithProducts id={this.props.params.id} />
            </Col>
        );
    }

}

export default ShopView;
