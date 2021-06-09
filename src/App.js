import './App.css';
import restaurant from './restaurant.jpeg'

function SecretComponent(){
  return(<h1>Super Secret Information for uthorized users only.</h1>);
}

function RegularComponent(){
  return(
    <h1>Everyone can see this Information</h1>
  );
}

function App(props) {
  /*if(props.authorized){
    return <SecretComponent/>
  }
  else{
    return <RegularComponent/>
  }*/
  return(
    <>
    {props.authorized ? <SecretComponent/>:<RegularComponent/>}
    </>
  );
}

export default App;
