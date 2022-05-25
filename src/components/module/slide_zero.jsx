import React from 'react';

const SliderZero = (props) => {
    return (
        <div className="carousel-item active">
            <img src={'http://pets.сделай.site/'+props.slider.image} className="img-thumbnail rounded mx-auto d-block"
                 style={{"max-width":" 300px"}} alt="рисунок животного"/>


            <p className="text-center" style={{minWidth: '300px'}}><h2 className="text-center">{props.slider.kind}</h2></p>

            <p className=" text-center" style={{minWidth: '300px'}}>{props.slider.description}</p>
        </div>

    );
};

export default SliderZero;