import {Form, Link} from "react-router-dom";
import Trendings from "./Trendings.jsx";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Settings from "./Settings.jsx";

function Navbar() {
    return (
        <div className="navbar">
            <Link to={"/"} className="navbar__title">GIF</Link>
            <Form method="post" className="navbar__searchbar">
                <input type="text" name={"keyword"} placeholder={"Busca aqui..."}/>
                <button type="submit"><FontAwesomeIcon icon={faSearch} className="dropdown__arrow" /></button>
            </Form>
            <Trendings/>
            <Settings/>
        </div>
    );
}

export default Navbar;