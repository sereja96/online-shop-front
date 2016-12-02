import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { requireAuth, requireNonAuth } from './components/AuthenticatedComponent';

import App from './containers/App';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import ProtectedView from './views/ProtectedView';
import NotFoundView from './views/NotFoundView';
import ShopsView from './views/ShopsView';
import CategoriesView from './views/CategoriesView';
import ShopView from './views/ShopView';
import CategoryView from './views/CategoryView';
import BrandsView from './views/BrandsView';
import BrandView from './views/BrandView';
import FullProductView from './views/ProductView';
import BasketView from './views/BasketView';
import OrdersView from './views/OrdersView';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeView}/>

        <Route path="login" component={LoginView} onEnter={requireNonAuth} />
        <Route path="protected" component={ProtectedView} onEnter={requireAuth} />
        <Route path="categories" component={CategoriesView} />
        <Route path="category/:id" component={CategoryView} />
        <Route path="shops" component={ShopsView} />
        <Route path="shop/:id" component={ShopView} />
        <Route path="brands" component={BrandsView} />
        <Route path="brand/:id" component={BrandView} />
        <Route path="product/:id" component={FullProductView} onEnter={requireAuth} />
        <Route path="basket" component={BasketView} onEnter={requireAuth} />
        <Route path="orders" component={OrdersView} onEnter={requireAuth} />

        <Route path="*" component={NotFoundView} />
    </Route>
);
