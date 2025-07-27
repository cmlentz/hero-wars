import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Mar23 from "./components/Calendar/2023/March.js";
import Apr23 from "./components/Calendar/2023/April.js";
import May23 from "./components/Calendar/2023/May.js";
import Jun23 from "./components/Calendar/2023/June.js";
import Jul23 from "./components/Calendar/2023/July.js";
import Aug23 from "./components/Calendar/2023/August.js";
import Sep23 from "./components/Calendar/2023/September.js";
import Oct23 from "./components/Calendar/2023/October.js";
import Nov23 from "./components/Calendar/2023/November.js";
import Dec23 from "./components/Calendar/2023/December.js";
import Jan24 from "./components/Calendar/2024/January.js";
import Feb24 from "./components/Calendar/2024/February.js";
import Mar24 from "./components/Calendar/2024/March.js";
import Apr24 from "./components/Calendar/2024/April.js";
import May24 from "./components/Calendar/2024/May.js";
import Jun24 from "./components/Calendar/2024/June.js";
import Jul24 from "./components/Calendar/2024/July.js";
import Aug24 from "./components/Calendar/2024/August.js";
import Sep24 from "./components/Calendar/2024/September.js";
import Oct24 from "./components/Calendar/2024/October.js";
import Nov24 from "./components/Calendar/2024/November.js";
import Dec24 from "./components/Calendar/2024/December.js";
import Jan25 from "./components/Calendar/2025/January.js";
import Feb25 from "./components/Calendar/2025/February.js";
import Mar25 from "./components/Calendar/2025/March.js";
import Apr25 from "./components/Calendar/2025/April.js";
import May25 from "./components/Calendar/2025/May.js";
import Jun25 from "./components/Calendar/2025/June.js";
import Jul25 from "./components/Calendar/2025/July.js";
import Heroes from "./Heroes.js";
import Titans from "./Titans.js";
import Tower from "./Tower.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Jul25 />} />
        <Route path='/mar23' element={<Mar23 />} />
        <Route path='/apr23' element={<Apr23 />} />
        <Route path='/may23' element={<May23 />} />
        <Route path='/jun23' element={<Jun23 />} />
        <Route path='/jul23' element={<Jul23 />} />
        <Route path='/aug23' element={<Aug23 />} />
        <Route path='/sep23' element={<Sep23 />} />
        <Route path='/oct23' element={<Oct23 />} />
        <Route path='/nov23' element={<Nov23 />} />
        <Route path='/dec23' element={<Dec23 />} />
        <Route path='/jan24' element={<Jan24 />} />
        <Route path='/feb24' element={<Feb24 />} />
        <Route path='/mar24' element={<Mar24 />} />
        <Route path='/apr24' element={<Apr24 />} />
        <Route path='/may24' element={<May24 />} />
        <Route path='/jun24' element={<Jun24 />} />
        <Route path='/jul24' element={<Jul24 />} />
        <Route path='/aug24' element={<Aug24 />} />
        <Route path='/sep24' element={<Sep24 />} />
        <Route path='/oct24' element={<Oct24 />} />
        <Route path='/nov24' element={<Nov24 />} />
        <Route path='/dec24' element={<Dec24 />} />
        <Route path='/jan25' element={<Jan25 />} />
        <Route path='/feb25' element={<Feb25 />} />
        <Route path='/mar25' element={<Mar25 />} />
        <Route path='/apr25' element={<Apr25 />} />
        <Route path='/may25' element={<May25 />} />
        <Route path='/jun25' element={<Jun25 />} />
        <Route path='/jul25' element={<Jul25 />} />
        <Route path='/heroes' element={<Heroes />} />
        <Route path='/titans' element={<Titans />} />
        <Route path='/tower' element={<Tower />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export const NotFound = () => {
  return (
    <div>
      <center>
      <h3>Error 404: Page Not Found</h3>
      <p>Please use Navigation Bar</p>
      </center>
    </div>
  )
}

export default App;