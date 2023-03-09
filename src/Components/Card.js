import React from "react";

const Card = (props) => {
  console.log(props.country);
  return (
    <li className="card">
      <img
        src={props.country.flags.svg}
        alt={"Flag " + props.country.translations.cym.common}
      />
      <div className="infos">
        <h2>{props.country.name.common}</h2>
        <h4>Capital : {props.country.capital}</h4>
        <p>{"Pop : " + props.country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
