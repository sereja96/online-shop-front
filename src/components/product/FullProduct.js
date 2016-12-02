import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NoContent from '../../containers/NoContent';
import ProductImages from './ProductImages';

class FullProduct extends React.Component {

    constructor (props) {
        super(props);
        this.props.getProduct(this.props.productId);
    }

    render () {
        const { product, error, loading } = this.props.loadedProduct;

        var data = '';
        if (loading) {
            data = <NoContent message={ 'Страница загружается...' } />;
        } else {
            if (error || !product) {
                data = <NoContent message={ 'Ошибка! Продукт не найден!' } />;
            } else {
                data = <div>
                    <ProductImages />
                    <h3>{ product.name }</h3>
                    <h5>{ product.description }</h5>
                </div>
            }
        }

        return (
            data
        );
    }

}

export default FullProduct;
