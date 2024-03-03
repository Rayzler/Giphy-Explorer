import {useEffect, useState} from "react";

function ThemeModeSwitch() {
    const [lightMode, setLightMode] = useState(false);

    const handleClick = () => {
        setLightMode(prev => !prev);
    }

    useEffect(() => {
        const rootStyles = document.documentElement.style;
        if (lightMode) {
            rootStyles.setProperty('--color-bg', '#ededed');
            rootStyles.setProperty('--color-primary', '#FFFFFF');
            rootStyles.setProperty('--color-text', '#000000');
        } else {
            rootStyles.setProperty('--color-bg', '#313638');
            rootStyles.setProperty('--color-primary', '#282828');
            rootStyles.setProperty('--color-text', '#FFFFFF');
        }
    }, [lightMode]);

    return (
        <>
            <span style={{width: "100px"}}>{lightMode ? "Modo Claro" : "Modo Oscuro"}</span>
            <div className="toggle-switch">
                <label className="switch-label">
                    <input type="checkbox" className="checkbox" checked={lightMode} onChange={handleClick}/>
                    <span className="slider"></span>
                </label>
            </div>
        </>
    );
}

export default ThemeModeSwitch;