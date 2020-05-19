import React from "react";

const Pets = (props) => {
    return(
      <h1>My Pet is a {props.type} called {props.name}, who belongs to the {props.species} species. They are {props.age} years old, thier favourite food is {props.food} and they like {props.hobby}.</h1>
    )
}

export default Pets;