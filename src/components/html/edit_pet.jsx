import React from 'react';

const EditPet = () => {
    return (
        <div>
            <main style={{"min-height": "70vh"}}>
                <div className="chast_1">
                    <div className="tablica1">
                        <div className="Nazva_razdel"><a><h2>Редактирование объявления</h2></a></div>
                    </div>
                </div>

                <div className="chast_2">
                    <div className="p-3 tablica_individ ">
                        <div className="p-3 m-2 ">
                            <label htmlFor="kind" className="form-label">Введите вид животного:</label>
                            <input type="text" className="form-control" id="kind"/>
                                <div className="form-text">Обязательное поле</div>
                        </div>


                        <div className="mb-3 p-3 border ocryglen_ramcu">
                            <label htmlFor="image1" className="form-label">Выберите файлы изображений:</label>
                            <input type="file" className="form-control" id="image1" />
                                <div className="form-text">Обязательное поле</div>
                                <input type="file" className="form-control mb-3" id="image2"
                                      />
                                    <input type="file" className="form-control mb-3" id="image3"
                                          />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="chip" className="form-label">Электронный чип:</label>
                            <input type="text" className="form-control" id="chip"/>
                                <div className="form-text">Обязательное поле.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Описание:</label>
                            <textarea className="form-control" id="description"></textarea>
                            <div className="form-text">Обязательное поле.</div>
                        </div>

                        <div className="mb-3 ">
                            <a href="#" className="button7 button7_individ_3" >Отправить</a>
                        </div>

                    </div>
                </div>


            </main>

        </div>
    );
};

export default EditPet;