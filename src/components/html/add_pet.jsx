import React from 'react';

const AddPet = () => {
    return (
        <div>
            <main style={{"min-height" : "70vh"}}>

                <div className="chast_1">
                    <div className="tablica1">
                        <div className="Nazva_razdel"><a><h2>Добавление нового объявления</h2></a></div>
                    </div>
                </div>

                <div className="chast_2">
                    <div className="tablica_individ_2">


                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Введите ваше имя</label>
                            <input type="text" className="form-control" id="name"/>
                                <div className="form-text">Используйте кириллические буквы.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Введите свой телефон:</label>
                            <input type="email" className="form-control" id="phone"/>
                                <div className="form-text">Используйте цифры, +, -.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="email" className="form-control" id="email"/>
                                <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="kind" className="form-label">Введите вид животного:</label>
                            <input type="text" className="form-control" id="kind"/>
                                <div className="form-text">Обязательное поле</div>
                        </div>

                        <div className="mb-3 form-check border p-3 ocryglen_ramcu">
                            <input type="checkbox" className="form-check-input m-3" id="exampleCheck1"/>
                                <label className="form-check-label m-3" htmlFor="exampleCheck1">Пройти автоматическую
                                    регистрацию</label>
                                <label htmlFor="password" className="form-label hidden">Введите пароль:</label>
                                <input type="password" className="form-control hidden" id="password"/>
                                    <div className="form-text hidden">Не менее 7 символов, обязательно: 1 - цифра, 1 -
                                        строчная буква, 1 - заглавная буква
                                    </div>
                                    <label htmlFor="confirm_password" className="form-label hidden">Повторите пароль
                                        пароль:</label>
                                    <input type="password" className="form-control hidden" id="confirm_password"/>


                        </div>

                        <div className="mb-3 p-3 border ocryglen_ramcu">
                            <label htmlFor="image1" className="form-label">Выберите файлы изображений:</label>
                            <input type="file" className="form-control" id="image1" />
                                <div className="form-text">Обязательное поле</div>
                                <input type="file" className="form-control mb-3" id="image2"
                                     />
                                    <input type="file" className="form-control mb-3" id="image3" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="chip" className="form-label">Электронный чип:</label>
                            <input type="text" className="form-control" id="chip"/>
                                <div className="form-text">Обязательное поле.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Описание:</label>
                            <textarea className="form-control" id="description"/>
                            <div className="form-text">Обязательное поле.</div>
                        </div>

                        <div className="mb-3 form-check p-3">
                            <input type="checkbox" className="form-check-input" id="check1"/>
                                <label className="form-check-label" htmlFor="check1">Подтвердить согласие на обработку
                                    персональных данных</label>
                        </div>
                        <div className="mb-3 polojen_knop_2">
                            <a href="#" className="button7 button7_individ_3">Добавить</a>
                        </div>

                    </div>
                </div>


            </main>
        </div>

    );
};

export default AddPet;