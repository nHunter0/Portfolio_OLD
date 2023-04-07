import "./App.css";
import {
  Navbar,
  Home,
  About,
  Projects,
  Contact,
  Resume,
  Footer,
} from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
