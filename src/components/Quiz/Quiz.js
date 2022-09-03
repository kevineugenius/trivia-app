import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Quiz() {
    const [number, setNumber] = useState(5);

    useEffect(() => {
        setNumber( n => n + 1);
    }, []);

    return( 
        <div>
            <h2>This is where the quiz would be { number }</h2>
            <div>
                <Link to="/">go back</Link>
                <br />
                <Link to="/results">go forward</Link>
            </div>
        </div>
    );
}

export default Quiz;