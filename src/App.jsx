import Header from "./components/header";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

function App() {
  return (
    <div className="App">
      <Fullpage>
        <FullPageSections>
          <FullpageSection className="home-pageSection">
            <Header />
            <Home />
          </FullpageSection>
          <FullpageSection className="pageSection">
            <About />
          </FullpageSection>
          <FullpageSection className="pageSection">
            <Skills />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default App;
