import './App.css';
import restaurant from './restaurant.jpeg'
import React,{useState} from "react";
function App() {
  //const what = useState("Happy");
  const [emotion,setEmotion] = useState("Happy");
  return(
    <>
    <h1>Current Emotion is {emotion}.</h1>
    <button onClick={() => setEmotion("Happy")}>Happy</button>
    <button onClick={() => setEmotion("Frustrated")}>frustrated</button>
    <button onClick={() => setEmotion("Enthusiastic")}>Enthuse</button>
    </>
  );
}

export default App;
