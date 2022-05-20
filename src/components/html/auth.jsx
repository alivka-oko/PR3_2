import React from 'react';

const Auth = () => {
    return (
        <div>
            <main style={{"min-height": "81.5vh"}}>

                <div className="chast_1">
                    <div className="tablica1">
                        <div className="Nazva_razdel"><a><h2>Аутентификация</h2></a></div>
                    </div>
                </div>

                <div className="chast_2">
                    <div className="tablica_individ">

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="email" className="form-control" id="email"/>
                                <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Введите пароль:</label>
                            <input type="password" className="form-control" id="password"/>
                                <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная
                                    буква, 1 - заглавная буква
                                </div>
                        </div>

                        <div className="mb-3">

                            <a href="#" className="button7 button7_individ_3">Войти</a>
                        </div>

                    </div>
                </div>


            </main>

        </div>
    );
};

export default Auth;