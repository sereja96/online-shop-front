import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PopularCategories from '../containers/category/PopularCategories';

class CategoriesView extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleSearch (e) {
        this.setState({search: e.target.value});
    }

    render () {
        return (
            <Col xs={12} >
                <h2>Все Категории</h2>
                <hr className="underline-header" />
                <Row>
                    <Col xs={10} xsOffset={1}>
                        <input className="form-control"
                               type="text"
                               placeholder="Поиск..."
                               onChange={this.handleSearch.bind(this)} />
                    </Col>
                </Row>
                <hr className="underline-header" />
                <Row>
                    <PopularCategories search={this.state.search} />
                </Row>
            </Col>
        );
    }

}

export default CategoriesView;
