import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PopularBrands from '../containers/brand/PopularBrands';

class BrandsView extends React.Component {

    render () {
        return (
            <Col xs={12} >
                <h2 className="block-header">Все Бренды</h2>
                <hr className="underline-header" />

                <Row>
                    <PopularBrands />
                </Row>
            </Col>
        );
    }

}

export default BrandsView;

