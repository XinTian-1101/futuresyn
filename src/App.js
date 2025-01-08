import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FG_Navbar from "./Fresh_Graduates_POV/components/FG_NavBar";
import FG_Home from "./Fresh_Graduates_POV/pages/FG_Home";
import FG_IndustryTrend from "./Fresh_Graduates_POV/pages/FG_IndustryTrend";

function App() {
  return (
    <Router>
      <FG_Navbar />

      <Routes>
        <Route path="/FG_Home" element={<FG_Home />} />
        <Route path="/FG_IndustryTrend" element={<FG_IndustryTrend />} />
      
      </Routes>
    </Router>
  );
}

export default App;

