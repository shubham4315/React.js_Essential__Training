import './App.css';
import restaurant from './restaurant.jpeg'
import React,{useState,useEffect} from "react";
function App() {
  //const what = useState("Happy");
  const [emotion,setEmotion] = useState("Happy");
  const [secondary,setSecondary] = useState("Tired");
  useEffect(
    ()=>{
      console.log(`It's ${emotion} around here!`);
    },[emotion]
  )

  useEffect(
    ()=>{
      console.log(`It's ${secondary} around here!`);
    },[secondary]
  )
  return(
    <>
    <h1>Current Emotion is {emotion} and {secondary}.</h1>
    <button onClick={() => setEmotion("Happy")}>Happy</button>
    <button onClick={() => setEmotion("Frustrated")}>frustrated</button>
    <button onClick={() => setEmotion("Enthusiastic")}>Enthuse</button>
    <button onClick={() => setSecondary("Crabby")}>Set Crabby</button>
    </>
  );
}

export default App;
