import Brand from './../../components/brand/BrandWithProducts';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { fetchBrand, fetchBrandSuccess, fetchBrandError } from '../../actions/BrandAction';

function mapStateToProps(globalState, ownProps) {
    return {
        loadedBrand: globalState.brand,
        brandId: ownProps.id
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBrand: (id) => {
            dispatch(fetchBrand(id)).then((response) => {
                isSuccess(response)
                    ? dispatch(fetchBrandSuccess(response))
                    : dispatch(fetchBrandError(response));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Brand);
