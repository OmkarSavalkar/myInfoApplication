import Header from "./components/header";
import "./App.css";
import MainContainer from "./components/mainContainer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <MainContainer />
      </main>
    </div>
  );
}

export default App;
