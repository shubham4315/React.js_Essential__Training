import './App.css';

function Header(){
  return(
    <h1>Eve's Kitchen</h1>
  );
}

function Main(){
  return(
    <p>we serve the most delicious food around.</p>
  );
}

function Footer(){
  return(
    <p>It's True.</p>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
