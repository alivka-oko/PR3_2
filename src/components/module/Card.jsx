import React, {useEffect, useId, useState} from 'react';
import cat from "../image/pets/кошка.jpg";

const Card = (props) => {
    function my_request(setSlides) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders

        };
        let res = fetch("http://pets.сделай.site/api/pets", requestOptions)
            .then(response=>response.json())
            .then(response=>setPets(response))

    }
    let [orders, setPets] = useState({data:{orders:[]}});
    useEffect(() => my_request(()=>setPets(), orders), [])

    let Cards_pets=orders.data.orders.map((pet, index)=>{
        return (
        <div className="card shadow-sm card_pet d-flex flex-wrap flex-row  card border m-lg-3 p-lg-4  mb-3  "
             style={{"min-width":" 300px", "width": "45%"}}>
            <img  src={"http://pets.сделай.site/"+pet.photos}className="w-100" alt="рисунок животного"/>
            <div className="card-body flex-column ">

                <div className="InCard position-relative">

                    <div className="TxtCard">
                        <div className="gh11"><a>id:</a></div>
                        <div className="gh22"><a>{pet.id}</a></div>
                    </div>

                    <div className="TxtCard">
                        <div className="gh11"><a>Имя:</a></div>
                        <div className="gh22"><a> {pet.name} </a></div>
                    </div>

                    <div className="TxtCard">
                        <div className="gh11"><a>Описание:</a></div>
                        <div className="gh22"><a>{pet.description}</a></div>
                    </div>

                    <div className="TxtCard">
                        <div className="gh11"><a>Номер чипа:</a></div>
                        <div className="gh22"><a>{pet.mark}</a></div>
                    </div>

                    <div className="TxtCard">
                        <div className="gh11"><a>Район:</a></div>
                        <div className="gh22"><a>{pet.district}</a></div>
                    </div>

                    <div className="TxtCard">
                        <div className="gh11"><a>Дата:</a></div>
                        <div className="gh22"><a>{pet.date}</a></div>
                    </div>

                </div>
            </div>
        </div>
        )
     });
let [buttons, setButtons]=useState([])

    return (
        <div className="Cards_pets d-flex flex-row flex-wrap  ">

                  {Cards_pets}
              </div>


    );
};

export default Card;