import React from 'react';
import { API_LINK } from '../../actions/Config';

class CategoryImage extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <img className="category-image"
                 src={ ((this.props.src && this.props.src.link) || (API_LINK + '/disk/images/' +'default-category.png')) } />
        );
    }

}

export default CategoryImage;
