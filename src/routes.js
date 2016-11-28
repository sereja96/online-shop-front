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

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeView}/>
        <Route path="login"
               onEnter={requireNonAuth}
               component={LoginView} />
        <Route path="protected"
               component={ProtectedView}
               onEnter={requireAuth} />
        <Route path="categories" component={CategoriesView} />
        <Route path="category/:id" component={CategoryView} />

        <Route path="shops" component={ShopsView} />
        <Route path="shop/:id" component={ShopView} />

        <Route path="brands" component={BrandsView} />
        <Route path="brand/:id" component={BrandView} />

        <Route path="*" component={NotFoundView} />
    </Route>
);
