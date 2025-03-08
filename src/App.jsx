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
import { BodyBackground } from "./styledComponents";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [seed, setSeed] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setSeed(!seed);
  }, [inView.toString()]);

  return (
    <div className="App">
      <BodyBackground bg={lightMode}>
        <Fullpage>
          <FullpageNavigation
            reverse
            style={{
              margin: "0px 16px",
              padding: 0,
              zIndex: 1,
            }}
          />
          <FullPageSections style={{ overflow: "auto" }}>
            <FullpageSection className="home-pageSection">
              <Header setLightMode={setLightMode} lightMode={lightMode} />
              <Home lightMode={lightMode} />
            </FullpageSection>
            <FullpageSection className="pageSection">
              <About lightMode={lightMode} />
            </FullpageSection>
            <FullpageSection className="pageSection">
              <div ref={ref}>
                <Skills lightMode={lightMode} key={seed} />
              </div>
            </FullpageSection>
            <FullpageSection className="pageSection">
              <Projects lightMode={lightMode} />
            </FullpageSection>
            <FullpageSection className="pageSection">
              <Contacts lightMode={lightMode} />
              <Footer lightMode={lightMode} />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </BodyBackground>
    </div>
  );
}

export default App;
