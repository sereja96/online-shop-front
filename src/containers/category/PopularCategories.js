import Categories from './../../components/category/Categories';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { fetchPopularCategories,
    fetchPopularCategoriesError,
    fetchPopularCategoriesSuccess } from '../../actions/CategoryAction';


function mapStateToProps(globalState, ownProps) {
    return {
        loadedCategories: globalState.category,
        count: ownProps.count || 0
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPopularCategories: (count) => {
            dispatch(fetchPopularCategories(count)).then((response) => {
                isSuccess(response)
                    ? dispatch(fetchPopularCategoriesSuccess(response))
                    : dispatch(fetchPopularCategoriesError(response));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
