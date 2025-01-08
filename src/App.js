import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FG_Navbar from "./Fresh_Graduates_POV/components/FG_NavBar";
import FG_Home from "./Fresh_Graduates_POV/pages/FG_Home";
import FG_IndustryTrend from "./Fresh_Graduates_POV/pages/FG_IndustryTrend";
import ProjectDetails from "./Fresh_Graduates_POV/components/FG_Home_ProjectDetails";
import FG_Available from "./Fresh_Graduates_POV/pages/FG_Available"; 
import FG_InProgress from "./Fresh_Graduates_POV/pages/FG_InProgress";
import FG_Completed from "./Fresh_Graduates_POV/pages/FG_Completed"; 
import InProgressProjectDetails from "./Fresh_Graduates_POV/components/FG_InProgressDetails";
import InProgressUploadPage from "./Fresh_Graduates_POV/components/FG_Home_InProgressUpload";
import CompletedProjectDetails from "./Fresh_Graduates_POV/components/FG_Home_CompleteProjectDetails";
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
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/InprogressProject/:id" element={<InProgressProjectDetails />} />
        <Route path="/FG_Available" element={<FG_Available />} />
        <Route path="/FG_InProgress" element={<FG_InProgress />} />
        <Route path="/FG_Completed" element={<FG_Completed />} />
        <Route path="/UploadProjectPage" element={< InProgressUploadPage/>} />
        <Route path="/CompletedProject/:id" element={< CompletedProjectDetails/>} />
        <Route path="/EM_Home" element={<EM_Home />} />
        <Route path="/EM_AddForm" element={<EM_AddForm />} />
        <Route path="/EM_ViewParticipants" element={<EM_ViewParticipants />} />
      </Routes>
    </Router>
  );
}

export default App;
