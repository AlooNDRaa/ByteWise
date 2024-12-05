import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterScreen from "./assets/components/RegisterScreen";
import HomeScreen from "./assets/components/HomeScreen";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./App.css";
import HomeS from "./assets/components/home";
import Footer from "./assets/components/generals/footer";
import Navbar from "./assets/components/generals/header";
import Transacciones from "./assets/components/Transacciones";
import TareasHabitos from "./assets/components/TareasHabitos";

function App() {
  const WIP_MESSAGE = "Página aún en construcción...";
  const ERROR_MESSAGE = "¡UPS! Esa página no existe...";

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen user={{ name: "Alondra" }} />} />

          <Route path="/register" element={<RegisterScreen />} />

          <Route path="/dashboard" element={<HomeS />} />
          <Route path="/transactions" element={<Transacciones />} />
          <Route path="/tareasYhabitos" element={<TareasHabitos />} />

          <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
