import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function Dropdown({title, children}) {
    const [checked, setChecked] = useState(false);

    document.addEventListener("click", (evt) => {
        if (!evt.target.closest(".dropdown")) {
            setChecked(false);
        }
    });

    return (
        <>
            <div className="dropdown">
                <input type="checkbox" id="dropdown" checked={checked} onChange={() => setChecked(prev => !prev)}/>

                <label className="dropdown__face" htmlFor="dropdown">
                    <div className="dropdown__text">{title}</div>
                    <FontAwesomeIcon icon={faChevronDown} className="dropdown__arrow" />
                </label>

                <ul className="dropdown__items">
                    {children}
                </ul>
            </div>
        </>
    );
}

export default Dropdown;
