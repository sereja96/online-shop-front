import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import PopularShops from '../containers/shop/PopularShops';

class ShopsView extends React.Component {

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
                <h2>Все Торговые Магазины <Link to="/shops/my">Мои Магазины</Link></h2>
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
                    <PopularShops search={this.state.search} />
                </Row>
            </Col>
        );
    }

}

export default ShopsView;
