import Header from "../components/Header/index";
import Sale from "../components/Main/Sale";
import Populargoods from "../components/Main/Populargoods";
import Layout from "../components/Main/Layout";
import Ecocollection from "../components/Main/Ecocollection";
import Background from "../components/Main/Background";
import Partners from "../components/Main/Partners";
// import Card from "../components/Card";
import { Slider } from "../components/Main/Slider";
import Slider2 from "../components/Main/Slider2";
import Footer from "../components/Footer/index";

const Mainpage = () => {
  return (
    <>
      <Header></Header>
      <Sale></Sale>
      <Populargoods></Populargoods>
      <Slider></Slider>
      <Layout></Layout>
      <Slider2></Slider2>
      <Ecocollection></Ecocollection>
      <Background></Background>
      <Partners></Partners>
      <Footer></Footer>
      {/* <Card></Card> */}
    </>
  );
};

export default Mainpage;
