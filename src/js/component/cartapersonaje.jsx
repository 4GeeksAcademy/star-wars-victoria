import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartaPersonaje = ({ id, name, gender, haircolor, eyecolor }) => {
    const { store, actions } = useContext(Context);

    function agregarFavoritos() {
        actions.añadirFavoritos(name);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cartapersonaje" style={{ width: "300px" }}>
                    <div className="m-2 mb-0 border border-3 rounded bg-white w-100">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                            className="img-thumbnail"
                            alt={name}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title text-center fs-3">{name}</h5>
                            <p className="card-text text-center my-0">Gender: {gender}</p>
                            <p className="card-text text-center my-0">Hair Color: {haircolor}</p>
                            <p className="card-text text-center my-0">Eye Color: {eyecolor}</p>
                            <div className="card-body d-flex justify-content-between">
                                <Link  to={`/info/characters/${id}`} className="btn btn-outline-primary">
                                    Learn more!
                                </Link>
                                <button onClick={agregarFavoritos} className="btn btn-outline-warning">
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};