import React from 'react';
import { Col } from 'react-bootstrap';
import Category from './Category';
import NoContent from '../../containers/NoContent';

class Categories extends React.Component {

    constructor (props) {
        super(props);
    }

    componentWillUnmount() {

    }

    componentDidMount() {
        this.props.getPopularCategories(this.props.count);
    }

    render () {
        var { categories, loading, error } = this.props.loadedCategories;

        var display = '';
        if (loading) {
            display = <NoContent message={'Список категорий загружается...'} />;
        } else {
            if (categories.length) {

                const searchString = this.props.search;
                if (typeof searchString != 'undefined' && searchString && searchString.length) {
                    categories = categories.filter(function (category) {
                        return category.name.toLowerCase().match(searchString);
                    });
                }

                display = categories.map(function (value, key) {
                    return <Col key={value.id} md={4} xs={6} >
                        <Category category={value} />
                    </Col>
                });
            } else {
                display = <NoContent message={'Не найдено ни одной категории.'} />;
            }
        }

        return (
            <Col xs={12}>{ display }</Col>
        );
    }
}

export default Categories;
