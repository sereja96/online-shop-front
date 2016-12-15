import React from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';

import PopularShops from '../containers/shop/PopularShops';
import PopularCategories from '../containers/category/PopularCategories';
import PopularBrands from '../containers/brand/PopularBrands';

class HomeView extends React.Component {

    render () {
        return (
            <Col xs={12}>
                <h2 className="main-header" >Добро Пожаловать в онлайн магазин спортивыных товаров</h2>

                <Row>
                    <h3 className="block-header" >Популярные Магазины <Link to="/shops" >Все Магазины</Link></h3>
                    <hr className="underline-header" />
                    <PopularShops count={3} />
                </Row>

                <Row>
                    <h3 className="block-header" >Популярные Категории <Link to="/categories" >Все Категории</Link></h3>
                    <hr className="underline-header" />
                    <PopularCategories count={3} />
                </Row>

                <Row>
                    <h3 className="block-header" >Популярные Бренды <Link to="/brands" >Все Бренды</Link></h3>
                    <hr className="underline-header" />
                    <PopularBrands count={3} />
                </Row>

            </Col>
        );
    }

}

export default HomeView;
