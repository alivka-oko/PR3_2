import React from 'react';
import cat from '../image/pets/кошка.jpg'
import koza from '../image/pets/коза.jpeg'

const Profile = () => {
    return (

            <main>


                <div className="chast_1">
                    <div className="tablica1">
                        <div className="Nazva_razdel"><a><h2>Личный кабинет</h2></a></div>
                    </div>
                </div>

                <div className="chast_2">
                    <div className="tablica2">


                        <div className="test-3-code">
                            <div className="gh1"><a>id:</a></div>
                            <div className="gh2"><a>14</a></div>
                        </div>

                        <div className="test-3-d1">
                            <div className="gh1"><a>Телефон:</a></div>
                            <div className="gh2"><a>+7-911-456-78-78</a></div>
                        </div>

                        <div className="test-3-t1">
                            <div className="gh1"><a>email:</a></div>
                            <div className="gh2"><a>leonid@yandex.ru</a></div>
                        </div>

                        <div className="test-3-t2">
                            <div className="gh1"><a>Имя:</a></div>
                            <div className="gh2"><a>Леонид</a></div>
                        </div>

                        <div className="test-3-from">
                            <div className="gh1"><a>Дата регистрации:</a></div>
                            <div className="gh2"><a>26-06-2015</a></div>
                        </div>

                        <div className="test-3-to">
                            <div className="gh1"><a>Количество найденных животных:</a></div>
                            <div className="gh2"><a>2</a></div>
                        </div>

                        <div className="test-3-to">
                            <div className="gh1"><a>Количество объявлений:</a></div>
                            <div className="gh2"><a>4</a></div>
                        </div>

                    </div>
                </div>


                <div className="chast_1">
                    <div className="tablica1">
                        <div className="Nazva_razdel"><a><h2>Изменить адрес электронной почты</h2></a></div>
                    </div>
                </div>

                <div className="chast_2">
                    <div className="tablica2">


                        <form className="w-50 m-auto p-3" style={{"min-width":" 300px"}}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                                    почты</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                                    <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                            </div>

                            <a href="#" className="button7">Отправить</a>
                        </form>

                    </div>
                </div>


                <div className="chast_1">
                    <div className="tablica1">
                        <div className="Nazva_razdel"><a><h2>Изменить номер телефона</h2></a></div>
                    </div>
                </div>

                <div className="chast_2">
                    <div className="tablica2">

                        <form className="w-50 m-auto p-3" style={{"min-width": "300px"}}>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Введите номер телефона</label>
                                <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp"/>
                                    <div className="form-text">Используйте цифры, +, -.</div>
                            </div>

                            <a href="#" className="button7">Отправить</a>
                        </form>

                    </div>
                </div>

                <div className="chast_1">
                    <div className="tablica1">
                        <div className="Nazva_razdel"><a><h2>Добавленные объявления</h2></a></div>
                    </div>
                </div>

                <form>
                    <div className="container" style={{"width": "content-box"}}>

                        <div className="Cards_pets d-flex flex-row flex-wrap  ">

                            <div
                                className="card shadow-sm card_pet d-flex flex-row flex-wrap  card border m-lg-3 p-lg-4  mb-3  "
                                style={{"min-width": "300px", "width":" 45%"}}>
                                <img src={cat} className="w-100" alt="рисунок животного"/>
                                    <div className="position-absolute text-white"
                                         style={{"top": "10px", "right": " 10px", "cursor": " pointer"}}>&#10060;</div>
                                    <div className="card-body flex-column ">

                                        <div className="InCard position-relative">

                                            <div className="TxtCard">
                                                <div className="gh11"><a>id:</a></div>
                                                <div className="gh22"><a>14</a></div>
                                            </div>

                                            <div className="TxtCard">
                                                <div className="gh11"><a>Имя:</a></div>
                                                <div className="gh22"><a> Кошка </a></div>
                                            </div>

                                            <div className="TxtCard">
                                                <div className="gh11"><a>Описание:</a></div>
                                                <div className="gh22"><a>Потерялась кошка, пушистая, серая. Любит
                                                    играть, ласковая.</a></div>
                                            </div>

                                            <div className="TxtCard">
                                                <div className="gh11"><a>Номер чипа:</a></div>
                                                <div className="gh22"><a>ca-001-spb</a></div>
                                            </div>

                                            <div className="TxtCard">
                                                <div className="gh11"><a>Район:</a></div>
                                                <div className="gh22"><a>Василиостровский</a></div>
                                            </div>

                                            <div className="TxtCard">
                                                <div className="gh11"><a>Дата:</a></div>
                                                <div className="gh22"><a>24-03-2020</a></div>
                                            </div>
                                            <div className="mb-3">

                                                <a href="#" className="button7 button7_individ_3">Редактировать
                                                    объявление</a>
                                            </div>
                                        </div>

                                    </div>

                            </div>

                            <div
                                className="card shadow-sm card_pet d-flex flex-row flex-wrap  card border m-lg-3 p-lg-4  mb-3  "
                                style={{"min-width": "300px", "width":" 45%"}}>
                                <img src={koza} className="w-100 " alt="рисунок животного"/>
                                    <div className="position-absolute text-danger"
                                         style={{"top":"10px", "right": "10px", "cursor":" pointer"}}>&#10060;</div>
                                    <div className="InCard position-relative">

                                        <div className="TxtCard">
                                            <div className="gh11"><a>id:</a></div>
                                            <div className="gh22"><a>18</a></div>
                                        </div>

                                        <div className="TxtCard">
                                            <div className="gh11"><a>Имя:</a></div>
                                            <div className="gh22"><a> Коза </a></div>
                                        </div>

                                        <div className="TxtCard">
                                            <div className="gh11"><a>Описание:</a></div>
                                            <div className="gh22"><a>Потерялась коза, последний раз видели в здании
                                                Московского вокзала
                                                г. Санкт-Петербург. Коза белая, пуховая.</a></div>
                                        </div>

                                        <div className="TxtCard">
                                            <div className="gh11"><a>Номер чипа:</a></div>
                                            <div className="gh22"><a>go-011-spb</a></div>
                                        </div>

                                        <div className="TxtCard">
                                            <div className="gh11"><a>Район:</a></div>
                                            <div className="gh22"><a>Центральный</a></div>
                                        </div>

                                        <div className="TxtCard">
                                            <div className="gh11"><a>Дата:</a></div>
                                            <div className="gh22"><a>14-03-2022</a></div>
                                        </div>
                                        <div className="mb-3">

                                            <a href="#" className="button7 button7_individ_3">Редактировать
                                                объявление</a>
                                        </div>
                                    </div>

                            </div>


                        </div>
                    </div>

                </form>

                <div className="polojen_pagunatora">
                    <nav aria-label="Page navigation example " className="m-3">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>


    );
};

export default Profile;