import Brands from './../../components/brand/Brands';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { fetchPopularBrands,
    fetchPopularBrandsSuccess,
    fetchPopularBrandsError } from '../../actions/BrandAction';


function mapStateToProps(globalState, ownProps) {
    return {
        loadedBrands: globalState.brand,
        count: ownProps.count || 0,
        search: ownProps.search || null
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPopularBrands: (count) => {
            dispatch(fetchPopularBrands(count)).then((response) => {
                isSuccess(response)
                    ? dispatch(fetchPopularBrandsSuccess(response))
                    : dispatch(fetchPopularBrandsError(response));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
