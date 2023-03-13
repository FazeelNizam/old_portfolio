import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
