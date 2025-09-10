import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./dashboard/DashBoard";

 function App() {
  return <div>
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  </div>
}

export default App;