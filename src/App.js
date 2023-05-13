import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./componnents/Header";
import MyForm from "./componnents/MyForm";
import Incidents from "./componnents/Incidents";
import Footer from "./componnents/Footer";
function App() {
  return (
    <div className="App min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<MyForm />} />
        <Route path="/incidents" element={<Incidents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
