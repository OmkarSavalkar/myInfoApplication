import Header from "./components/header";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
    </div>
  );
}

export default App;
