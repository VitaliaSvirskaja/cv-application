import "./App.css";
import General from "./components/General";
import { Experiences } from "./components/Experiences";
import { Educations } from "./components/Education";

function App() {
  return (
    <div className="App">
      <General />
      <Experiences />
      <Educations />
    </div>
  );
}

export default App;
