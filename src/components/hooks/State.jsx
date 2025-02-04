import { useState } from "react";

export const State = () => {
    // let value = 0;

    // const handleButtonClick =() => {
    //     value++;
    //     console.log(value);
    // };

    // console.log(useState());

    // let array = useState();
    // console.log(array);

    console.log("Parent Component Rendered");

    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(() => count + 1);
    };

    return (
        <>
            <section className="main-div">
                <h1 style={{margin: "0 52.5%", marginTop: "10%"}}>{count}</h1>
                <button onClick={handleButtonClick}>Increment</button>
            </section>

            <ChildComponent count={count}></ChildComponent>
        </>
    );
};


const ChildComponent = ({count}) => {
    console.log("Child Component Rendered");
    return <div className="main-div"><h2>Child Component - {count}</h2></div>
};


// export function Sibling(){
//     console.log("Sibling Component Rendered");
//     return <div className="main-div"><h2>Sibling Component</h2></div>
// };