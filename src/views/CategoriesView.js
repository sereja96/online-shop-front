import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PopularCategories from '../containers/category/PopularCategories';

class CategoriesView extends React.Component {

    render () {
        return (
            <Col xs={12} >
                <h2>Все Категории</h2>
                <hr/>

                <Row>
                    <PopularCategories />
                </Row>
            </Col>
        );
    }

}

export default CategoriesView;
