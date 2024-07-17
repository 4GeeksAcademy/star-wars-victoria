import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CartaPersonaje } from "../component/cartapersonaje.jsx";
import { CartaPlaneta } from "../component/cartaplaneta.jsx";

export const Home = () => { 
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.characters();
        actions.planets();
    }, []);

    return (
            <div>
            <h1 className="text-danger text-start">Characters</h1>
            <div className="container-fluid">
                <div className="d-flex overflow-auto ">
                    {store.personajes.map((item, index) => (
                        <CartaPersonaje 
                            key={index}
                            id={index+1}
                            name={item.name}
                            gender={item.gender}
                            haircolor={item.hair_color}
                            eyecolor={item.eye_color}
                        />
                    ))}
                </div>
            </div>
            <h1 className="text-danger text-start">Planets</h1>
            <div className="container-fluid">
                <div className="d-flex overflow-auto ">
                    {store.planetas.map((item, index) => (
                        <CartaPlaneta 
                            key={index}
                            id = {index+1} 
                            name={item.name}
                            population={item.population}
                            terrain={item.terrain}
                        />
                    ))}
                </div>
            </div>
        </div> 
    );
};