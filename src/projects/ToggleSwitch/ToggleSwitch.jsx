import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitch } from "react-icons/pi";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };

    const checkIsOn = isOn ? "on" : "off";

    const toggleBgColor = isOn ? "#4caf50" : "";

    return(
        <>
            <h1>Toggle Switch <IoIosSwitch style={{color: "#4caf50"}} /> <PiUserSwitch /> </h1>

            <div className="toggle-switch" style={{backgroundColor: toggleBgColor}} onClick={handleToggleSwitch}>
                <div className={`switch ${checkIsOn}`}>
                    <span className="switch-state">{checkIsOn}</span>
                </div>
            </div>
        </>
    );
};