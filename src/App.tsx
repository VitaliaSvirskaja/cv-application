import "./App.css";
import General from "./components/General";
import { Experiences } from "./components/Experiences";
import { Educations } from "./components/Education";

function App() {
  return (
    <div className="App">
      <General></General>
      <Experiences></Experiences>
      <Educations></Educations>
    </div>
  );
}

export default App;
