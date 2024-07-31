import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { InfoPersonaje } from "../component/infopersonaje.jsx";
import { InfoPlaneta } from "../component/infoplaneta.jsx";

export const Info = () => {
    const { store, actions } = useContext(Context);
    const { type, id } = useParams(); // Obtenemos el tipo (personaje o planeta) y el id

    useEffect(() => {
        actions.characters();
        actions.planets();
    }, []);

    const entity = type === "characters" ? store.personajes[id - 1] : store.planetas[id - 1];

    return (
        <div>
            {type === "characters" && entity ? (
                <InfoPersonaje
                id={id}
                name={entity.name}
                birthyear={entity.birth_year}
                gender={entity.gender}
                height={entity.height}
                skincolor={entity.skin_color}
                eyecolor={entity.eye_color}
                />
            ) : null}

            {type === "planets" && entity ? (
                <InfoPlaneta
                    id={id}
                    name={entity.name}
                    climate={entity.climate}
                    population={entity.population}
                    orbitalperiod={entity.orbital_period}
                    rotationperiod={entity.rotation_period}
                    diameter={entity.diameter}
                />
            ) : null}
        </div>
    );
};
