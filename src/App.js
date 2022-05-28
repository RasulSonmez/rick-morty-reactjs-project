import "./Scss/App.scss";
import Main from "./components/Main";
import { MainProvider } from "./context/MainContext";
import CharacterDetail from "./components/CharacterDetail";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Main" element={<Main />}></Route>
          <Route path=":id" element={<CharacterDetail />} />
        </Routes>
        <Footer />
      </MainProvider>
    </div>
  );
}

export default App;
