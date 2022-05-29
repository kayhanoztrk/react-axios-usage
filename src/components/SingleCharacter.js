import React from "react";

const SingleCharacter = (props) => {


    return(
    <div className="single-character" id={props.character.id}> 
        <img src={props.character.image} alt=""/>
        <div className="user-info">
        <h4>Name: {props.character.name}</h4>
        <p className="character-gender">
            Gender: {props.character.gender}
            </p>
        </div>
    </div>
    )
}

export default SingleCharacter