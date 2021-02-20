//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  
  // You'll need one for the home score and another for the away score.
  const [homeScore, updatehomeScore] = useState(32)
  const [awayScore, updateawayScore] = useState(0)
  const [quarter, updatequarter] = useState(0)

  const handleQuarter=()=>{
    if (quarter < 4){
      updatequarter(quarter+1)
    }
    else {
      updatequarter(0)
    }
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>


 {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow 
        // Left side matches component we're passing to. 
        // Right side matches component we are in.
        quarter={quarter}
        handlequarter={handleQuarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* To use JS in JSX tags, we hug it with curly braces */}
          <button onClick={()=>{updatehomeScore(homeScore + 7)}} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={()=>{updatehomeScore(homeScore + 3)}} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={()=>{updateawayScore(awayScore + 7)}} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={()=>{updateawayScore(awayScore + 3)}} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
