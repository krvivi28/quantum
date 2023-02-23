// import Login from "./pages/login/login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/components/header/navbar";
import Create from "./pages/create/create";
import Apply from "./pages/apply/apply";
import Home from "./pages/home/home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Create />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/" element={<Home />} />

        {/* <Route path="/products/:productname/:productid" element={<ProductDetail/>} /> */}
      </Routes>
    </>
  );
};
export default App;
