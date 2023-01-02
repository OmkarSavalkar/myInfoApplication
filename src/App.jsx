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
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Fullpage>
        <FullpageNavigation
          reverse
          style={{
            backgroundColor: "rgba(27,35,46,0.4)",
            margin: "0px 16px",
            padding: 0,
            zIndex: 1,
          }}
        />
        <FullPageSections style={{ overflow: "auto" }}>
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
          <FullpageSection className="pageSection">
            <Projects />
          </FullpageSection>
          <FullpageSection className="pageSection">
            <Contacts />
            <Footer />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default App;
