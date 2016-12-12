import MakeOrder from './../../components/order/MakeOrder';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { confirmOrder, confirmOrderError, confirmOrderSuccess } from '../../actions/OrderAction';
import { checkDiscount, checkDiscountError, checkDiscountSuccess } from '../../actions/DiscountAction';

function mapStateToProps(globalState, ownProps) {
    return {
        orderResult: globalState.order,
        discountLoaded: globalState.discount
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        confirmOrder: function (data) {
            dispatch(confirmOrder(data)).then((response) => {
                isSuccess(response)
                    ? confirmOrderSuccess(response)
                    : confirmOrderError(response);
            });
        },
        checkDiscountCode: function (code) {
            dispatch(checkDiscount(code)).then((response) => {
                console.log(response);
                isSuccess(response)
                    ? checkDiscountSuccess(response)
                    : checkDiscountError(response)
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeOrder);

