import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BrandImage from './BrandImage';
import NoContent from '../../containers/NoContent';
import Products from '../product/Products';

class BrandWithProducts extends React.Component {

    constructor (props) {
        super(props);
        this.props.getBrand(this.props.brandId);
    }

    render () {
        const { brand, error, loading } = this.props.loadedBrand;

        var data = '';
        if (loading) {
            data = <NoContent message={ 'Страница загружается...' } />;
        } else {
            if (brand && !error) {
                data = <div>
                    <BrandImage src={brand.image} />
                    <h4>{brand.name}</h4>
                    <p>
                        {
                            'Товаров: ' +
                            (brand.products && brand.products.length || 0)
                        }
                    </p>

                    <h2 className="block-header">Товары</h2>
                    <hr className="underline-header" />
                    <Products products={brand.products} />
                </div>;
            } else {
                data = <NoContent message={ 'Бренд не найден!' } />;
            }
        }

        return (
            data
        );
    }

}

export default BrandWithProducts;

