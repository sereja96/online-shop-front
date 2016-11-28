import React from 'react';
import { Col } from 'react-bootstrap';
import BrandWithProducts from '../containers/brand/BrandWithProducts';

class BrandView extends React.Component {

    render () {
        console.log(this.props.params.id);

        return (
            <Col xs={12}>
                <BrandWithProducts id={this.props.params.id} />
            </Col>
        );
    }

}

export default BrandView;

