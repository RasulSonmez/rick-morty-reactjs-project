import "./SCSS/App.scss";
import { MainProvider } from "./context/MainContext";
import { Routes, Route } from "react-router-dom";
//components
import Home from "./pages/Home";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path=":id" element={<CharacterDetail />} />
        </Routes>
        <Footer />
      </MainProvider>
    </div>
  );
}

export default App;
