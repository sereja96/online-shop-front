import React from 'react';
import { API_LINK } from '../../actions/Config';

class ShopImage extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <img className="shop-image"
                 src={ ((this.props.src && this.props.src.link) || (API_LINK + '/disk/images/' +'default-shop.png')) } />
        );
    }

}

export default ShopImage;
