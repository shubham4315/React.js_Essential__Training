import './App.css';

function Header(props){
  return(
    <h1>{props.name}'s Kitchen</h1>
  );
}

function Main(props){
  return(
    <section>
      <p>we serve the most {props.adjective} food around.</p>
      <ul style={{textAlign:"left"}}>
        {props.Dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </section>
    
  );
}

function Footer(props){
  return(
    <p>Copyright {props.year}</p>
  );
}

const Dishes = ["Pasta" , "Salmon" , "Fish" , "Dosa"];
const dishObjects = Dishes.map((dish,i) => ({id:i,title:dish}));
console.log(dishObjects);
Dishes.map((dish)=>console.log(dish));

function App() {
  return (
    <div className="App">
      <Header name="cindy"/>
      <Main adjective="AMAZING" Dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
