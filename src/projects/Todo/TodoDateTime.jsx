import { useEffect, useState } from "react";

export const TodoDateTime =() => {
    const [ dateTime, setDateTime ] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const curDate = new Date();
            const formatedDate = curDate.toLocaleDateString();
            const formatedTime = curDate.toLocaleTimeString();
    
            setDateTime(`${formatedDate} - ${formatedTime}`);
        }, 1000);

        return () =>  clearInterval(interval);

    }, []);

    return <h2 className="date-time">{dateTime}</h2>
};