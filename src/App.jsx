import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Packages from "./components/Packages/Packages";
import Package from "./components/Package/Package";
import Add from "./components/Add/Add";
import EditDelete from "./components/EditDelete/EditDelete";
import EditDeleteCompleteForm from "./components/EditDeleteCompleteForm/EditDeleteCompleteForm";
import Reserved from "./components/Reserved/Reserved";
import ReservedPage from "./components/ReservedPage/ReservedPage";
import CustomAddUser from "./components/CustomAddUser/CustomAddUser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="Fiki-Journey-Gem/home" element={<Home />} />
        <Route path="Fiki-Journey-Gem/all-packages" element={<Packages />} />
        <Route path="Fiki-Journey-Gem/package/:id" element={<Package />} />
        <Route path="Fiki-Journey-Gem/add-new-package" element={<Add />} />
        <Route
          path="Fiki-Journey-Gem/edit-or-delete"
          element={<EditDelete />}
        />
        <Route
          path="Fiki-Journey-Gem/reserved-packages"
          element={<Reserved />}
        />
        <Route
          path="Fiki-Journey-Gem/package-reserved/:id"
          element={<ReservedPage />}
        />
        <Route
          path="Fiki-Journey-Gem/add-custom-package"
          element={<CustomAddUser />}
        />
        <Route
          path="Fiki-Journey-Gem/edit-or-delete/package/:id"
          element={<EditDeleteCompleteForm />}
        />
        <Route path="Fiki-Journey-Gem/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
