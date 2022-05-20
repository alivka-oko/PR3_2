import React from 'react';
import gorilla from '../image/pets/горилла.jpg';
import koza from '../image/pets/коза.jpeg';
import cat from '../image/pets/кошка.jpg';
import mouse from '../image/pets/мышь.jpg'
import dog from '../image/pets/собака.jpg'


const Index = () => {
    return (

        <main style={{"min-height": "70vh"}}>

            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Найденные животные</h2></a></div>
                </div>
            </div>


            <div id="carouselExampleIndicators" className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
                 data-bs-ride="carousel" style={{"min-height": "400px"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={dog} className="d-block" alt="Собака" style={{"width": "300px"}}/>
                        <h2 className="text-center">Найдена собака</h2>
                        <p>Собака рыжая, была утеряна в красногвардейчком райне районе</p>
                    </div>
                    <div className="carousel-item">
                        <img src={mouse} className="d-block" alt="Мышь" style={{"width": "300px"}}/>
                        <h2 className="text-center">Найдена мышь</h2>
                        <p>Мышь серая, была утеряна в центральном районе</p>
                    </div>
                    <div className="carousel-item">
                        <img src={gorilla} className="d-block" alt="Горилла" style={{"width": "300px"}}/>
                        <h2 className="text-center">Найдена горила</h2>
                        <p>Горилла, была утеряна в красногвардейчком райне районе</p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>

            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Потерянные животные</h2></a></div>
                </div>
            </div>

            <div className="container" style={{"width": "content-box"}}>

                <div className="Cards_pets d-flex flex-row flex-wrap  ">

                    <div
                        className="card shadow-sm card_pet d-flex flex-wrap flex-row  card border m-lg-3 p-lg-4  mb-3  "
                        style={{"min-width":" 300px", "width": "45%"}}>
                        <img src={cat} className="w-100" alt="рисунок животного"/>
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
                                    <div className="gh22"><a>Потерялась кошка, пушистая, серая. Любит играть,
                                        ласковая.</a></div>
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

                            </div>

                        </div>

                    </div>

                    <div
                        className="card shadow-sm card_pet d-flex flex-row flex-wrap  card border m-lg-3 p-lg-4  mb-3  "
                        style={{"min-width":" 300px", "width": "45%"}}>
                        <img src={koza} className="w-100 " alt="рисунок животного"/>

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

                        </div>

                    </div>


                </div>
            </div>


            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Подписка на новости</h2></a></div>
                </div>
            </div>

            <form className="w-50 m-auto p-3" style={{"min-width": "300px"}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                        почты</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Подписаться</button>
            </form>
        </main>

    );
};

export default Index;