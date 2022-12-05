import Header from "../components/Header";
import Categories from "../components/Search/Categories";
import Size from "../components/Search/Size";
import Footer from "../components/Footer/Footer";
import { ReduxTest } from "../components/ReduxTest.jsx";

const Catalogue = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Categories />
        <Size />
        <ReduxTest />
      </div>
      <Footer />
    </>
  );
};

export default Catalogue;
