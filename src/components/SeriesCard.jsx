import styles from "./Netflix.module.css";
import styled from "styled-components";

// export const SeriesCard = (props) => {
    export const SeriesCard = ({data}) => {

    // ? After Destructuring :-
    // const { data } = props;

    //? After More Destructuring :-
    // const { img_url, name, rating, description, genre, cast, watch_url } = props.data;
    const { img_url, name, rating, description, genre, cast, watch_url } = data;

    // const btn_style = {
    //     padding: "1.2rem 2.4rem", 
    //     border: "none", 
    //     fontSize: "1.6rem", 
    //     backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`, 
    //     color: "var(--btn-color)",
    //     fontWeight: "bold",
    //     cursor: "pointer",
    // }

    
    // ? Using Style Objects :-
    // const ButtonSyle = styled.button({
    //     padding: "1.2rem 2.4rem", 
    //     border: "none", 
    //     fontSize: "1.6rem", 
    //     backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`, 
    //     color: "var(--btn-color)",
    //     fontWeight: "bold",
    //     cursor: "pointer",
    // });


    // ? Using Template Lierals :-
    const ButtonStyle = styled.button`
        padding: 1.2rem 2.4rem;
        border: none;
        font-size: 1.6rem; 
        background-color: ${(props) => (props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f")}; 
        color: var(--btn-color);
        font-weight: bold;
        cursor: pointer;
    `;

    
    const Rating = styled.h3`
        font-size: 1.6rem;
        color: #7dcea0;
        text-transform: capitalize;
    `;
        

    // const ratingClass = rating >= 8.5 ? "super_hit" : "average";
    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
    
    return (
        // <li className="card">
        <li className={styles.card}>
        {/* <li key={curElem.id}> */}

            {/* //? Before Destructuring :- */}
            {/* <div>
                <img src= {props.data.img_url} alt={props.data.name} width="40%" height="40%"></img>
            </div>
    
            <h2>Name: {props.data.name}</h2>
            <h3>Rating: {props.data.rating}</h3>
            <p>Summary: {props.data.description}</p>
            <p>Genre: {props.data.genre}</p>
            <p>Cast: {props.data.cast}</p>

            <a href= {props.data.watch_url} target="_blank" alt=""><button>Watch Now</button></a> */}


            {/* //? After Destructuring :- */}
            {/* <div>
                <img src= {data.img_url} alt={data.name} width="40%" height="40%"></img>
            </div>
    
            <h2>Name: {data.name}</h2>
            <h3>Rating: {data.rating}</h3>
            <p>Summary: {data.description}</p>
            <p>Genre: {data.genre}</p>
            <p>Cast: {data.cast}</p>

            <a href= {data.watch_url} target="_blank" alt=""><button>Watch Now</button></a> */}


            {/* //? After More Destructuring :- */}
            <div>
                <img src= {img_url} alt={name} width="40%" height="40%"></img>
            </div>
    
            {/* <div className={styles.card-content}>       ❌ */}
            {/* <div className={styles['card-content']}> */}
            {/* <div className="flex flex-col gap-6 py-6 px-6"> */}
            <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
                <h2>Name: {name}</h2>

                {/* //? Adding conditional Styling + common styling :- */}
                <Rating style={{fontSize: "15px"}}>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></Rating>

                {/* //? Inline css :-  :- It violates DRY Condition that's why we don't use this  */}
                {/* <p style={{margin: "1.2rem 0"}}>Summary: {description}</p>
                <p style={{margin: "1.2rem 0"}}>Genre: {genre}</p>
                <p style={{margin: "1.2rem 0"}}>Cast: {cast}</p> */}

                
                <p className="text-3xl font-bold underline text-cyan-300">Summary: {description}</p>
                <p>Genre: {genre}</p>
                <p>Cast: {cast}</p>

                {/* <a href= {watch_url} target="_blank" alt=""><button style={btn_style}>Watch Now</button></a> */}
                {/* <a href= {watch_url} target="_blank" alt=""><ButtonStyle>Watch Now</ButtonStyle></a> */}
                <a href= {watch_url} target="_blank" alt=""><ButtonStyle rating={rating}>Watch Now</ButtonStyle></a>
            </div>
        </li>
     )
}