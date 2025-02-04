// import React from "react";
// import {Fragment} from "react";

// import {NetflixSeries} from "./components/NetflixSeries";
// import "./components/Netflix.css";
// import "./components/Netflix.module.css";

// import "./components/EV.css";

// import { EventHandling } from "./components/EventHandling";

// import { EventProps } from "./components/EventProps";

// import { EventPropagation } from "./components/EventPropagation";

// import { State } from "./components/hooks/State";

// import { DerivedState } from "./components/DerivedState";

// import { LiftingStateUp } from "./components/LiftingStateUp";

// import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";

// export const App = () => {
//   return <h1>Hello Bro!!</h1>
// };


// export const App = () => {
//   return React.createElement("h1", null, "Hello, Deepak Sinha!!");
// };



{/* <h1>Hello Bro!!</h1> */}

// React.createElement("h1", null, "Hello Bro!!");



// export const App = () => {
//   return (

    //? 1st Method :-
    // <div>

    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>
  
    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>
     
    // </div>


    //? 2nd Method :-
    // <React.Fragment>
    
    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>
  
    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>
     
    // </React.Fragment>


    //? 3rd Method :-
    // <Fragment>
    
    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>
  
    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>

    //   <NetflixSeries></NetflixSeries>
     
    // </Fragment>


    //? 4th Method :-
  //   <>
    
  //     <NetflixSeries></NetflixSeries>

  //     {/* <NetflixSeries></NetflixSeries>
  
  //     <NetflixSeries></NetflixSeries>

  //     <NetflixSeries></NetflixSeries>

  //     <NetflixSeries></NetflixSeries> */}
     
  //   </>
  // )

// };




// export const App = () => {
//   return <NetflixSeries></NetflixSeries>;
// };


// export const App = () => {
//   return (
//     <section className="container">
//       {/* <h1 className="card-heading">List of best netflix series</h1> */}
//       {/* <NetflixSeries></NetflixSeries>; */}

//       {/* <EventHandling></EventHandling> */}

//       {/* <EventProps></EventProps> */}

//       {/* <EventPropagation></EventPropagation> */}

//       {/* <State></State> */}

//       {/* <Sibling></Sibling> */}

//       {/* <DerivedState></DerivedState> */}

//       {/* <LiftingStateUp></LiftingStateUp> */}

//       <ToggleSwitch></ToggleSwitch>
//     </section>
//   );
// };


// export function Sibling(){
//   console.log("Sibling Component Rendered");
//   return <div className="main-div"><h2>Sibling Component</h2></div>
// };






// Todo Project :-

import { Todo } from "./projects/Todo/Todo";


export const App = () => {
  return(
    <section>
      <Todo></Todo>
    </section>
  );
};







