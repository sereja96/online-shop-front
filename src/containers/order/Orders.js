import Orders from './../../components/order/Orders';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { getOrders, getOrdersError, getOrdersSuccess } from '../../actions/OrderAction';


function mapStateToProps(globalState, ownProps) {
    return {
        loadedOrders: globalState.order
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => {
            dispatch(getOrders()).then((response) => {
                isSuccess(response)
                    ? dispatch(getOrdersSuccess(response))
                    : dispatch(getOrdersError(response));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
