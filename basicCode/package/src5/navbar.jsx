
import { Link } from "react-router-dom";


function Navbar() {

    return(
<ul>
    <li>
        <Link to="/"> Home </Link>
    </li>
    <li>
        <Link to="/films"> Films </Link>
    </li>
    <li>
        <Link to="/people"> People </Link>
    </li>
</ul>    
    )
    }

    export default Navbar