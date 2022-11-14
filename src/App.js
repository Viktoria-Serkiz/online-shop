import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Headerfooter from "./components/Headerfooter";
import Mainpage from "./pages/Mainpage";
import Catalogue from "./pages/Catalogue";
import CatalogueCategory from "./pages/CatalogueCategory";
import ProductPage from "./pages/ProductPage";
import QuickView from "./pages/QuickView";
import ShoppingBag from "./pages/ShoppingBag";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Headerfooter></Headerfooter>}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/new-in" element={<Catalogue />} />
          <Route path="/category" element={<CatalogueCategory />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/view" element={<QuickView />} />
          <Route path="/shopping-bag" element={<ShoppingBag />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
