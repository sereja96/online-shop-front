import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CategoryImage from './CategoryImage';
import { Link } from 'react-router';

class Category extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="shop-item" >
                <Col md={5} ><CategoryImage src={this.props.category.image} /></Col>
                <Col md={7} >
                    <Row>
                        <Link to={ '/category/' + this.props.category.id } >
                            <h4>{this.props.category.name}</h4>
                        </Link>
                    </Row>
                    <Row>
                        <p>
                            {
                                'Товаров: ' +
                                (this.props.category.product_count && this.props.category.product_count.count || 0)
                            }
                        </p>
                    </Row>
                </Col>
            </div>
        );
    }

}

export default Category;
