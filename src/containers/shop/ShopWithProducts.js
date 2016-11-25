import Shop from './../../components/shop/ShopWithProducts';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { fetchShop, fetchShopSuccess, fetchShopError } from '../../actions/ShopActions';


function mapStateToProps(globalState, ownProps) {
    return {
        loadedShop: globalState.shop,
        shopId: ownProps.id
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getShop: (id) => {
            dispatch(fetchShop(id)).then((response) => {
                isSuccess(response)
                    ? dispatch(fetchShopSuccess(response))
                    : dispatch(fetchShopError(response));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
