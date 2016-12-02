import Basket from './../../components/basket/Basket';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { getBasket,
    getBasketError,
    getBasketSuccess,
    addProduct,
    addProductError,
    addProductSuccess } from '../../actions/BasketAction';


function mapStateToProps(globalState, ownProps) {
    return {
        loadedBasket: globalState.basket
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
        addProduct: (id, count) => {
            dispatch(addProduct(id, count)).then((response) => {
                isSuccess(response)
                    ? dispatch(addProductSuccess(response))
                    : dispatch(addProductError(response));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
