import Shops from './../../components/shop/Shops';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { fetchPopularShops,
    fetchPopularShopsError,
    fetchMyShops,
    fetchPopularShopsSuccess } from '../../actions/ShopActions';

function mapStateToProps(globalState, ownProps) {
    return {
        loadedShops: globalState.shop,
        count: ownProps.count || 0,
        search: ownProps.search || null,
        myOnly: ownProps.myOnly || false
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPopularShops: (count) => {
            dispatch(fetchPopularShops(count)).then((response) => {
                isSuccess(response)
                    ? dispatch(fetchPopularShopsSuccess(response))
                    : dispatch(fetchPopularShopsError(response));
            });
        },
        getMyShops: (count) => {
            dispatch(fetchMyShops(count)).then((response) => {
                isSuccess(response)
                    ? dispatch(fetchPopularShopsSuccess(response))
                    : dispatch(fetchPopularShopsError(response));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shops);
