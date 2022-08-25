import React from "react";

import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Footer from "./components/layout/Footer/Footer";
import NavBar from "./components/layout/NavBar/NavBar";

import CitiesPage from "./views/Cities/CitiesPage/CitiesPage";
import ProtectedComponent from "./components/ProtectedComponent";

function App() {
  return (
    <div className="bg-neutral min-h-screen">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ProtectedComponent component={CitiesPage} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
