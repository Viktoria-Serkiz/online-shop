import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import Mainpage from "./pages/Mainpage";
import NewIn from "./pages/NewIn";
import CatalogueCategory from "./pages/CatalogueCategory";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./pages/ShoppingCart";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./components/SignIn/ForgotPassword";

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
          <Route path="/shopping-bag" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
