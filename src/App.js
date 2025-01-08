import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FG_Navbar from "./Fresh Graduate's POV/FG_NavBar";
import FG_Home from "./Fresh Graduate's POV/FG_Home";
import FG_LearningProject from "./Fresh Graduate's POV/FG_LearningProject";
import FG_IndustryTrend from "./Fresh Graduate's POV/FG_IndustryTrend";

function App() {
  return (
    <Router>
    
      <FG_Navbar />

      <Routes>
        <Route path="/FG_Home" element={<FG_Home />} />
        <Route path="/FG_LearningProject" element={<FG_LearningProject />} />
        <Route path="/FG_IndustryTrend" element={<FG_IndustryTrend />} />
      </Routes>
    </Router>
  );
}

export default App;
