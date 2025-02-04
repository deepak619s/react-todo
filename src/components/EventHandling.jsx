import "./Ev.css";

export const EventHandling = () => {

    // function handleButtonClick(){
    //     alert("Hello");
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hello");
    };

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    };

    return (
        <>
            {/* //? Function components with based components :- */}
            <button onClick={handleButtonClick}>Click Me</button>

            <br></br>

            {/* //? Function components with fat arrow Functions :- */}
            <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>

            <br></br>

            {/* //? Inline Event Handlers :- */}
            <button onClick={(event) => console.log(event)}>Inline Function</button>

            <br></br>

            {/* //? Function components with Inline arrow Functions :- */}
            <button onClick={() => alert("Hey ia ma Inline Event Function")}>Inline Arrow Function</button>

            <br></br>

            {/* //? Passing arguments to event handlers */}
            {/* <button onClick={handleWelcomeUser("Deepak")}>Click Me</button>   ❌ */}
            <button onClick={() => handleWelcomeUser("Deepak")}>Click Me</button>
            <br></br>
            <button onClick={() => handleWelcomeUser("Ram")}>Click Me</button>

            <br></br>
        </>
    );
};