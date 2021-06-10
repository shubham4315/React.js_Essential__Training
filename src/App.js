import './App.css';
import restaurant from './restaurant.jpeg'
import React,{useState,useEffect} from "react";

function App({login}) {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setData] = useState(null);

useEffect(()=>{
  if(!login)
  {
    return;
  }
  setLoading(true);
  fetch(`https://api.github.com/users/${login}`).then(
    response =>response.json()).then(
      setData
    ).then(
      ()=>setLoading(false)
    ).catch(
      setError()
    );
  },[login]
);

if(loading){
  return(
    <h1>Loading....</h1>
  );
}

if(error){
  return(
    <pre>{JSON.stringify(error,null,2)}</pre>
  )
}

if(!data){
  return null;
}

return(
  <div>
    <h1>{data.name}</h1>
    <p>{data.location}</p>
    <img alt="avatar" src={data.avatar_url}/>
  </div>
);
}

export default App;
