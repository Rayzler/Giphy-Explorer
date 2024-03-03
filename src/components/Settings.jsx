import {faClose, faGear} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import ThemeModeSwitch from "./ThemeModeSwitch.jsx";

function Settings() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(prev => !prev);
    }

    return (
        <>
            <button className={`btn-settings ${active ? "" : "hidden"}`} onClick={handleClick}>
                <FontAwesomeIcon icon={faGear} className="dropdown__arrow"/>
            </button>
            <div className={`mask ${active ? "" : "hidden"}`}/>
            <div className={`settings`}>
                <button className="settings__close" onClick={handleClick}>
                    <FontAwesomeIcon icon={faClose} className="dropdown__arrow"/>
                </button>
                <ul>
                    <li>
                        <ThemeModeSwitch/>
                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        </>
    );
}

export default Settings;