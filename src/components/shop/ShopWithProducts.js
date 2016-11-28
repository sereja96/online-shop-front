import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ShopImage from './ShopImage';
import NoContent from '../../containers/NoContent';
import Products from '../product/Products';

class ShopWithProducts extends React.Component {

    constructor (props) {
        super(props);
        this.props.getShop(this.props.shopId);
    }

    render () {
        const { shop, error, loading } = this.props.loadedShop;

        var data = '';
        if (loading) {
            data = <NoContent message={ 'Страница загружается...' } />;
        } else {
            if (shop) {
                data = <div>
                    <ShopImage src={shop.image} />
                    <h4>{shop.name}</h4>
                    <p>{shop.description}</p>
                    <p>{'Рейтинг: ' + shop.rate + ' из 5' }</p>
                    <p>
                        {
                            'Товаров: ' +
                            (shop.products && shop.products.length || 0)
                        }
                    </p>

                    <h2 className="block-header">Товары</h2>
                    <hr className="underline-header" />
                    <Products products={shop.products} />
                </div>;
            } else {
                data = <NoContent message={ 'Магазин не найден!' } />;
            }
        }

        return (
            data
        );
    }

}

export default ShopWithProducts;
