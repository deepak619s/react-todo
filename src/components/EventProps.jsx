import "./EV.css";

export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };

    const handleHover = (user) => {
        alert(`Hey, ${user} Thanks for hovering me.`);
    };

    return (
        <>
            <WelcomeUser onClick={() => HandleWelcomeUser("Deepak")} onMouseEnter={() => handleHover("Deepak")}/>
        </>
    );
};

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreeting = () => {
        console.log("Hey user, Welcome");
        onClick(); 
    };

    return (
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover Me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    );
};
