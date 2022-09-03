import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div>
            <h2>Landing Page</h2>
            <div>
                <Link to="quiz">click here</Link>
            </div>
        </div>
    );
}

export default Landing;