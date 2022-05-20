import React from 'react';

const Search = () => {
    return (

            <main style={{"min-height": "83.5vh"}}>
                <div  class = "chast_1">
                    <div class="tablica1">
                        <div class="Nazva_razdel"><a><h2>Поиск по объявлениям</h2></a></div>
                    </div>
                </div>

    <div class="p-3">
        <form class="w-50 m-auto border p-3" style={{"min-width":" 300px"}}>

            <div class="mb-3">
                <label for="district" class="form-label">Выберите район:</label>
                <select id="district" class="form-select">
                    <option>Приморский</option>
                    <option>Петроградский</option>
                    <option>Василиостровский</option>
                    <option>Центральный</option>
                    <option>Красногвардейский</option>
                    <option>Выборгский</option>
                    <option>Калининский</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Введите вид животного:</label>
                <input type="password" class="form-control" id="password"/>

            </div>

            <input type="submit" class="btn btn-primary"/>
        </form>
    </div>
</main>

    );
};

export default Search;