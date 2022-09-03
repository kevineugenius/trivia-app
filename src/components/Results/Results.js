import React from "react";
import { Link } from "react-router-dom";

function Results() {
    return (<div>
        <h2>Congrats!</h2>
        <div>
                <Link to="/quiz">go back</Link>
                <br />
                <Link to="/">go to start</Link>
            </div>
    </div>)
}

export default Results;