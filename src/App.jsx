import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Logic from "./components/Logic";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="gradient"></div>
      <Navigation />
      <Routes>
        <Route path="/stories/:type" element={<Logic />} />
        {/* <Route path="/stories/top" element={<Logic type="top" />} />
        <Route path="/stories/job" element={<Logic type="job" />} />
        <Route path="/stories/best" element={<Logic type="best" />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
