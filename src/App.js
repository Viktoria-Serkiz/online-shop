import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import Mainpage from "./pages/Mainpage";
import NewIn from "./pages/NewIn";
import CatalogueCategory from "./pages/CatalogueCategory";
import ProductPage from "./pages/ProductPage";
import QuickView from "./pages/QuickView";
import ShoppingCart from "./pages/ShoppingCart";
import NotFound from "./pages/NotFound.1";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route path="/home" element={<Mainpage />} />
          <Route path="/new-in" element={<NewIn />} />
          <Route path="/category" element={<CatalogueCategory />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/view" element={<QuickView />} />
          <Route path="/shopping-bag" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
