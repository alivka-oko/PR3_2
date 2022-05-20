import React from 'react';
import logo from './image/logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html"><img src={logo}
                                                                           className="w-25 rounded-3" alt="logo"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/index'>Главная </Link></a>
                        </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/profile'>Личный кабинет</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/registration'>Регистрация</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/addpet'>Добавить объявление</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/search'>Поиск</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/auth'>Аутентификация</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/editpet'>Редактирование</Link></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link"><Link to='/pet'>Карточка животного</Link></a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Поиск"
                                       aria-label="Search"/>
                                    <button className="btn btn-primary" onClick="">Поиск</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>


        </div>
    );
};

export default Header;