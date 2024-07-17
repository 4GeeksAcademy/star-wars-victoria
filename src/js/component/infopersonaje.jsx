import React from "react";

export const InfoPersonaje = ({ id, name, gender, haircolor, eyecolor }) => {
    return (
        <div className=" text-center m-2 border border-3 rounded col-md-2">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-thumbnail" alt="..." />
            <div className="card-body text-start">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Hair Color: {haircolor}</p>
                <p className="card-text">Eye Color: {eyecolor}</p>
                <div className="card-body d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-primary">Learn more!</button>
                    <button type="button" className="btn btn-outline-warning"><i className="fas fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};