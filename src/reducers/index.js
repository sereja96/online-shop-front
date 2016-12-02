import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import ShopReducer from './ShopReducer';
import CategoryReducer from './CategoryReducer';
import BrandReducer from './BrandReducer';
import ProductReducer from './ProductReducer';
import BasketReducer from './BasketReducer';
import OrdersReducer from './OrdersReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    shop: ShopReducer,
    category: CategoryReducer,
    brand: BrandReducer,
    product: ProductReducer,
    basket: BasketReducer,
    order: OrdersReducer
});

export default rootReducer;
