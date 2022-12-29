import Header from "./components/header";
import "./App.css";
import MainContainer from "./components/mainContainer";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <MainContainer />
      </main>
      <section>
        <About />
      </section>
    </div>
  );
}

export default App;
