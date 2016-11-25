import Category from './../../components/category/CategoryWithProducts';
import { connect } from 'react-redux';
import { isSuccess } from '../../actions/RequestAction';
import { fetchCategory, fetchCategorySuccess, fetchCategoryError } from '../../actions/CategoryAction';

function mapStateToProps(globalState, ownProps) {
    return {
        loadedCategory: globalState.category,
        categoryId: ownProps.id
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategory: (id) => {
            dispatch(fetchCategory(id)).then((response) => {
                isSuccess(response)
                    ? dispatch(fetchCategorySuccess(response))
                    : dispatch(fetchCategoryError(response));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
