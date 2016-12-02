import Product from './../../components/product/FullProduct';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { fetchFullProduct, fetchFullProductSuccess, fetchFullProductError } from '../../actions/ProductAction';

function mapStateToProps(globalState, ownProps) {
    return {
        loadedProduct: globalState.product,
        productId: ownProps.id
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (id) => {
            dispatch(fetchFullProduct(id)).then((response) => {
                isSuccess(response)
                    ? dispatch(fetchFullProductSuccess(response))
                    : dispatch(fetchFullProductError(response));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

