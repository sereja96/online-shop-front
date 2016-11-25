import React from 'react';
import { API_LINK } from '../../actions/Config';

class BrandImage extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <img className="category-image"
                 src={ API_LINK + '/disk/images/' + ((this.props.src && this.props.src.link) || 'default-category.png') } />
        );
    }

}

export default BrandImage;

