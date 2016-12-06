import React from 'react';
import { Link } from 'react-router';
import ProductImages from './ProductImages';
import { Col, Row, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { addProduct, removeProduct } from '../../actions/BasketAction';
import { isAuth } from '../../components/AuthenticatedComponent';

class Product extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            basketStatus: this.props.product.basket_status
        };
    }

    addToBasket () {
        addProduct(this.props.product.id, 1);
        this.setState({basketStatus: true});
    }

    removeFromBasket () {
        removeProduct(this.props.product.id);
        this.setState({basketStatus: false});
    }

    render () {

        var addToBasket;
        if (this.state.basketStatus != 'undefined'
            && this.state.basketStatus != null
            && this.state.basketStatus
            && isAuth()) {

            addToBasket =
                <DropdownButton bsStyle="success"
                                title="Товар Добавлен"
                                id={`dropdown-basic-${this.props.product.id}`}>
                    <MenuItem eventKey="1"><Link to={'/basket'}>Перейти В Корзину</Link></MenuItem>
                    <MenuItem onClick={this.removeFromBasket.bind(this)} eventKey="2">Убрать Товар Из Корзины</MenuItem>
                </DropdownButton>;
        } else {
            addToBasket = <Button disabled={isAuth() ? false : true}
                                  onClick={this.addToBasket.bind(this)}
                                  bsStyle="primary" >В Корзину</Button>;
        }

        return (
            <div className="product-item" >
                <Col md={5} ><ProductImages src={this.props.product.images} /></Col>
                <Col md={7} >
                    <Row>
                        <Link to={ '/product/' + this.props.product.id } >
                            <h4>{this.props.product.name}</h4>
                        </Link>
                    </Row>
                    <Row>
                        <p>{this.props.product.description}</p>
                    </Row>
                    <Row>
                        {addToBasket}
                    </Row>
                </Col>
            </div>
        );
    }

}

export default Product;
