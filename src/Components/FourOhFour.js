import React from "react";
import { Link } from "react-router-dom";


const FourOhFour = () => (
<div className="backgroundImage">
    <div className="fourOhFour">
<h1 className="titleFont contrastHeading">Whoops!</h1> <h2 className="titleFont contrastHeading">Something went wrong..</h2>


<Link to={`/`}>
<h2 className="titleFont">Take Me Home..</h2>
</Link>
</div>
</div>

)

export default FourOhFour;

