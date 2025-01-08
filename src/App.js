import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FG_Navbar from "./Fresh_Graduates_POV/components/FG_NavBar";
import FG_Home from "./Fresh_Graduates_POV/pages/FG_Home";
import FG_IndustryTrend from "./Fresh_Graduates_POV/pages/FG_IndustryTrend";
import EM_Home from "./Employer's POV/pages/EM_Home";
import EM_AddForm from "./Employer's POV/pages/EM_AddForm";
import EM_ViewParticipants from "./Employer's POV/pages/EM_ViewParticipants";

function App() {
  return (
    <Router>
      <FG_Navbar />

      <Routes>
        <Route path="/FG_Home" element={<FG_Home />} />
        <Route path="/FG_IndustryTrend" element={<FG_IndustryTrend />} />
        <Route path="/EM_Home" element={<EM_Home />} />
        <Route path="/EM_AddForm" element={<EM_AddForm />} />
        <Route path="/EM_ViewParticipants" element={<EM_ViewParticipants />} />
      </Routes>
    </Router>
  );
}

export default App;