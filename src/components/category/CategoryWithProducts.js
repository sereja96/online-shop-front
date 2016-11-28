import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CategoryImage from './CategoryImage';
import NoContent from '../../containers/NoContent';
import Products from '../product/Products';

class ShopWithProducts extends React.Component {

    constructor (props) {
        super(props);
        this.props.getCategory(this.props.categoryId);
    }

    render () {
        const { category, error, loading } = this.props.loadedCategory;
        console.log(this.props.loadedCategory);

        var data = '';
        if (loading) {
            data = <NoContent message={ 'Страница загружается...' } />;
        } else {
            if (category) {
                data = <div>
                    <CategoryImage src={category.image} />
                    <h4>{category.name}</h4>
                    <p>
                        {
                            'Товаров: ' +
                            (category.products && category.products.length || 0)
                        }
                    </p>

                    <h2 className="block-header">Товары</h2>
                    <hr className="underline-header" />
                    <Products products={category.products} />
                </div>;
            } else {
                data = <NoContent message={ 'Категория не найдена!' } />;
            }
        }

        return (
            data
        );
    }

}

export default ShopWithProducts;
