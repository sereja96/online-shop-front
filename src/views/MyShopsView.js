import React from 'react';
import { Col, Row, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router';
import PopularShops from '../containers/shop/PopularShops';

class MyShopsView extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            search: '',
            showAddShop: false
        };

        this.addData = {
            name: '',
            description: ''
        };
    }

    handleSearch (e) {
        this.setState({search: e.target.value});
    }

    addShop () {
        this.setState({showAddShop: true});
    }

    cancelAddingShop () {
        this.setState({showAddShop: false});
        // todo
    }

    handleNameChange (e) {
        this.addData.name = e.target.value;
    }

    handleDescriptionChange (e) {
        this.addData.description = e.target.value;
    }

    saveNewShop () {
        console.log(this.addData);
    }

    render () {
        return (
            <Col xs={12} >
                <h2>Мои Магазины <Link to="/shops">Все Магазины</Link></h2>
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
                    <PopularShops search={this.state.search} myOnly={true} />
                </Row>

                <hr className="underline-header" />

                <Row style={ {display: !this.state.showAddShop ? 'none' : ''} }>
                    <Col xs={8} xsOffset={2}>
                        <Row className="order-field">
                            <h3>Создание Магазина</h3>
                        </Row>
                        <Row className="order-field">
                            <input className="form-control"
                                   onChange={this.handleNameChange.bind(this)}
                                   placeholder="Введите название магазина:" />
                        </Row>
                        <Row className="order-field">
                            <textarea placeholder="Введите описание для магазина:"
                                      onChange={this.handleDescriptionChange.bind(this)}
                                      className="form-control order-field"></textarea>
                        </Row>


                    </Col>
                </Row>

                <Row className="order-field">
                    <Col xs={4}></Col>
                    <Col xs={4}>
                        <Button bsStyle="success"
                                bsSize="lg"
                                style={ {width: '100%', display: !this.state.showAddShop ? 'none' : ''} }
                                onClick={this.saveNewShop.bind(this)}>Добавить Магазин</Button>
                    </Col>
                    <Col xs={4}></Col>
                </Row>

                <Row className="order-field">
                    <Col xs={4}></Col>
                    <Col xs={4}>
                        <Button bsStyle="primary"
                                bsSize="lg"
                                style={ {width: '100%', display: this.state.showAddShop ? 'none' : ''} }
                                onClick={this.addShop.bind(this)}>Добавить Магазин</Button>

                        <Button bsStyle="danger"
                                bsSize="lg"
                                style={ {width: '100%', display: !this.state.showAddShop ? 'none' : ''} }
                                onClick={this.cancelAddingShop.bind(this)}>Отменить Добавление</Button>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </Col>
        );
    }

}

export default MyShopsView;
