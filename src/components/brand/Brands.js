import React from 'react';
import { Col } from 'react-bootstrap';
import Brand from './Brand';
import NoContent from '../../containers/NoContent';

class Brands extends React.Component {

    constructor (props) {
        super(props);
    }

    componentWillUnmount() {

    }

    componentDidMount() {
        this.props.getPopularBrands(this.props.count);
    }

    render () {
        const { brands, loading, error } = this.props.loadedBrands;

        var display = '';
        if (loading) {
            display = <NoContent message={'Список брендов загружается...'} />;
        } else {
            if (brands && brands.length) {
                display = brands.map(function (value, key) {
                    return <Col key={value.id} md={4} xs={6} >
                        <Brand brand={value} />
                    </Col>
                });
            } else {
                display = <NoContent message={'Не найдено ни одного бренда.'} />;
            }
        }

        return (
            <Col xs={12}>{ display }</Col>
        );
    }
}

export default Brands;

