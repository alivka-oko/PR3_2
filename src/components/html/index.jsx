import React from 'react';
import Card from "../module/Card";
import Sliders from "../module/Sliders";
import News from "../module/News";

const Index = () => {
    return (

        <main style={{"min-height": "70vh"}}>
            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Найденные животные</h2></a></div>
                </div>
            </div>
            <Sliders/>
            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Потерянные животные</h2></a></div>
                </div>
            </div>
            <div className="container" style={{"width": "content-box"}}>
                <Card/>
            </div>
            <div className="chast_1">
                <div className="tablica1">
                   <News/>
                </div>
            </div>
            <form className="w-50 m-auto p-3" style={{"min-width": "300px"}}>
                <div className="mb-3">
                </div>
            </form>
        </main>
    );
};

export default Index;