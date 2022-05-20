import React from 'react';
import chicken1 from '../image/pets/курица1.jpg';
import chicken2 from '../image/pets/курица2.jpg';
import chicken3 from '../image/pets/курица3.jpg';


const Pet = () => {
    return (

            <main style={{"min-height": "70vh"}}>

                <div className="chast_1">
                    <div className="tablica1">
                        <div className="Nazva_razdel"><a><h2>Карточка животного</h2></a></div>
                    </div>
                </div>


                <div className="chast_2">
                    <div
                        className="card shadow-sm card_pet d-flex flex-wrap flex-row  card border m-lg-3 p-lg-4  mb-3 justify-content-around "
                        style={{"min-width": "400px", "width" :"60%"}} >
                        <img src={chicken1} className="w-25 p-3" style={{"min-width":"250px"}}
                             alt="Изображения животного"/>
                            <img src={chicken2} className="w-25 p-3 " style={{"min-width":"250px"}}
                                 alt="Изображения животного"/>
                                <img src={chicken3} className="w-25 p-3 " style={{"min-width":"250px"}}
                                     alt="Изображения животного"/>
                                    <div className="card-body flex-column chast_2">

                                        <div className="InCard position-relative ">

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
                                        </div>
                                    </div>
                    </div>
                </div>

    </main>

    );
};

export default Pet;