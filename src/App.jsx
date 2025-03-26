import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ClientsList from "./pages/ClientsList";
import CreateClient from "./pages/CreateClient";
import EditClient from "./pages/EditClient";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="/Clients" element={<ClientsList />} />
          <Route path="/create" element={<CreateClient />} />
          <Route path="/edit/:id" element={<EditClient />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
