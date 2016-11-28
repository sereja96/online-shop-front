import React from 'react';
import { Col } from 'react-bootstrap';
import CategoryWithProducts from '../containers/category/CategortyWithProducts';

class CategoryView extends React.Component {

    render () {
        return (
            <Col xs={12}>
                <CategoryWithProducts id={this.props.params.id} />
            </Col>
        );
    }

}

export default CategoryView;
