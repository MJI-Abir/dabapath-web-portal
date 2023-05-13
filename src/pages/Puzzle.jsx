import React, { useState, useEffect } from "react";
import axios from "axios";

function Puzzle(){
    const [puzzles, setPuzzles] = useState([]);

    useEffect(() => {
      axios.get("/puzzle-data.json").then((response) => {
        setPuzzles(response.data.players);
      });
    }, []);

    return(
        <div>
            
        </div>
    )
}

export default Puzzle;