import React from 'react';
import { Link } from 'react-router';
import { isAuth } from '../components/AuthenticatedComponent';
import { logoutAndRedirect } from '../actions/UserActions';

class Navigation extends React.Component {

    render () {
        return (
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Главная</Link>
                    </div>
                    <div id="navbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/shops">Поиск Магазинов</Link></li>
                            <li><Link to="/categories">Поиск Категорий</Link></li>
                            <li><Link to="/brands">Поиск Брендов</Link></li>
                            {isAuth() ? <li><Link to="/orders">Мои Заказы</Link></li> : null}
                            {isAuth() ? <li><Link to="/basket">Корзина</Link></li> : null}
                            {
                                isAuth()
                                    ? <li onClick={logoutAndRedirect}><Link>Выход</Link></li>
                                    : <li><Link to="/login">Вход</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;
