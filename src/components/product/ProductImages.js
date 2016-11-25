import React from 'react';
import { API_LINK } from '../../actions/Config';

class ProductImages extends React.Component {

    render () {
        return (
            <img className="shop-image"
                 src={ API_LINK + '/disk/images/' + ('default-category.png') } />
        );
    }

}

export default ProductImages;
