import ProductItem from './../../components/basket/ProductItem';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { getBasket,
    getBasketError,
    getBasketSuccess,
    removeProduct,
    removeProductError,
    updateCount,
    updateCountError } from '../../actions/BasketAction';


function mapStateToProps(globalState, ownProps) {
    return {
        basket: ownProps.basket
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBasket: () => {
            dispatch(getBasket()).then((response) => {
                isSuccess(response)
                    ? dispatch(getBasketSuccess(response))
                    : dispatch(getBasketError(response));
            });
        },
        removeProduct: (id) => {
            dispatch(removeProduct(id)).then((response) => {
                if (isSuccess(response)) {
                    dispatch(getBasket()).then((response) => {
                        isSuccess(response)
                            ? dispatch(getBasketSuccess(response))
                            : dispatch(getBasketError(response));
                    });
                } else {
                    dispatch(removeProductError(response));
                }
            });
        },
        updateCount: (id, count) => {
            dispatch(updateCount(id, count)).then((response) => {
                if (!isSuccess(response)) {
                    dispatch(updateCountError(response));
                } else {
                    dispatch(getBasket()).then((response) => {
                        isSuccess(response)
                            ? dispatch(getBasketSuccess(response))
                            : dispatch(getBasketError(response));
                    });
                }
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
