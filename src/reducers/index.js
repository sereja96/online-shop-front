import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import ShopReducer from './ShopReducer';
import CategoryReducer from './CategoryReducer';
import BrandReducer from './BrandReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    shop: ShopReducer,
    category: CategoryReducer,
    brand: BrandReducer
});

export default rootReducer;
