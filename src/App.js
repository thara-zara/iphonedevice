import "./App.css"
import Charge from "./components/Charge/Charge";
import Design from "./components/Design/Design";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Setup from "./components/Setup/Setup";
import Tab from "./components/Tab/Tab";
import Audio from "./components/Audi/Audio";
import Spec from "./components/Specification/Spec";
import Foot from "./components/Foot/Foot";

function App() {

  return (
    <div className="App">
        <Nav/>
        <Hero/>
        <Tab/>
        <Setup/>
        <Design/>
        <Charge/>
        <Audio/>
        <Spec/>
        <Foot/>
    </div>
  );
}

export default App;
