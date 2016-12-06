import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PopularBrands from '../containers/brand/PopularBrands';

class BrandsView extends React.Component {

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
                <h2 className="block-header">Все Бренды</h2>
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
                    <PopularBrands search={this.state.search} />
                </Row>
            </Col>
        );
    }

}

export default BrandsView;

