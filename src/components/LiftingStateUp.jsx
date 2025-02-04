import { useState } from "react";

export const LiftingStateUp = () => {
    const [inputValue, setInputValue] = useState("");
    return(
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue}></InputComponent>
            <DisplayComponent inputValue={inputValue}></DisplayComponent>
        </>
    );
};

const InputComponent = ({ inputValue, setInputValue }) => {
    return(
        <>
            <input type="text" placeholder="Enter Your Name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        </>
    );
};

const DisplayComponent = ({ inputValue }) => {
    return <p>The current input value is: {inputValue}</p>
};