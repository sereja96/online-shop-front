import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BrandImage from './BrandImage';
import { Link } from 'react-router';

class Brand extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="brand-item">
                <Col md={5} ><BrandImage src={null} /></Col>
                <Col md={7} >
                    <Row>
                        <Link to={ '/brand/' + this.props.brand.id } >
                            <h4>{this.props.brand.name}</h4>
                        </Link>
                    </Row>
                    <Row>
                        <p>
                            {
                                'Товаров: ' +
                                (this.props.brand.product_count && this.props.brand.product_count.count || 0)
                            }
                        </p>
                    </Row>
                </Col>
            </div>
        );
    }

}

export default Brand;

