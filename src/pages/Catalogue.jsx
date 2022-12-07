import Header from "../components/Header";
import Categories from "../components/Search/Categories";
import Size from "../components/Search/Size";
import Footer from "../components/Footer/Footer";

const Catalogue = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Categories />
        <Size />
      </div>
      <Footer />
    </>
  );
};

export default Catalogue;
