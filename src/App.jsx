import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Fotter from "./component/Fotter";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Service from "./component/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Contact />
      <Fotter />
    </div>
  );
}

export default App;
