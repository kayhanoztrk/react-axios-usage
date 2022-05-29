import React, { useSyncExternalStore } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleCharacter from "./SingleCharacter";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        const response = await axios.get("https://rickandmortyapi.com/api/character/?page=19");
        setCharacters(response.data.results);
        console.log(response.data.results);
    }

    useEffect(() => {
        fetchCharacters();
    },[])

    return(
        <div className="character-list">
            <ul>
                {
                    characters.map((character, index) => (
                        <li>
                            <SingleCharacter character={character} id={index} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CharacterList;