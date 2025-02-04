import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
    const name = "Queen of Tears";
    const rating = 8.2;
    const summary = "Queen of Tears is an upcoming South Korean drama series set to premiere in 2024. Starring Kim Soo-hyun and Kim Ji-won.";

    
    // const button = "Watch Now";
    // const canWatch = "Not Available";
    // let canWatch = "Not Available";
  
    // let age = 19;
     
    // if(age >= 18){
    //   canWatch = "Watch Now";
    // } 
      
  
    // const returnGenre = () => {
    //   const genre = "rom-com";
    //   return genre;
    // }
  
    // const canWatch = () => {
    //   if(age >= 18) {
    //     return "Watch Now";
    //   } else {
    //     return "Not Available";
    //   }
    // }
  
    //? 1st Method :- It violates DRY Condition
  
    // if(age < 18){
    //   return (
    //     <div>
    //       <div>
    //           <img src="https://tse3.mm.bing.net/th?id=OIP.iN2CJ5ndso8wvPFtR-8_0gHaE7&pid=Api&P=0&h=180" alt="queen-of-tears"></img>
    //         </div>
    
    //         <h2>Name: {name}</h2>
    //         {/* <h3>Rating: {rating}</h3> */}
    //         <h3>Rating: {5 + 3.2}</h3>
    //         <p>Summary: {summary}</p>
    //         <p>Genre: {returnGenre()}</p>
    //         <button>{canWatch}</button>
    //     </div>
    //   )
    // }
  
  
    //? 2nd Method :-
  
    // return (
    //   <div>
    //     <div>
    //         <img src="https://tse3.mm.bing.net/th?id=OIP.iN2CJ5ndso8wvPFtR-8_0gHaE7&pid=Api&P=0&h=180" alt="queen-of-tears"></img>
    //       </div>
  
    //       <h2>Name: {name}</h2>
    //       {/* <h3>Rating: {rating}</h3> */}
    //       <h3>Rating: {5 + 3.2}</h3>
    //       <p>Summary: {summary}</p>
    //       <p>Genre: {returnGenre()}</p>
    //       {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
    //       {/* <button>{canWatch}</button> */}
    //       <button>{canWatch()}</button>
    //   </div>
    // )



    return (
        <div>
            <ul className="grid grid-three-cols">
                {seriesData.map((curElem) => <SeriesCard key={curElem.id} data={curElem}></SeriesCard> )}
                {/* {seriesData.map((curElem) => <SeriesCard data={curElem}></SeriesCard> )} */}
            </ul>
        </div>
      )
};


// export default NetflixSeries;