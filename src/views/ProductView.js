import React from 'react';
import { Col } from 'react-bootstrap';
import FullProduct from '../containers/product/FullProduct';

class ProductView extends React.Component {

    render () {
        return (
            <Col xs={12}>
                <FullProduct id={this.props.params.id} />
            </Col>
        );
    }

}

export default ProductView;

