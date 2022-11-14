import Sale from "../components/Sale";
import Populargoods from "../components/Populargoods";
import Layout from "../components/Layout";
import Ecocollection from "../components/Ecocollection";
import Background from "../components/Background";
import Partners from "../components/Partners";
import Card from "../components/Card";
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";

const Mainpage = () => {
  return (
    <>
      <Sale></Sale>
      <Populargoods></Populargoods>
      <Slider></Slider>
      <Layout></Layout>
      <Slider2></Slider2>
      <Ecocollection></Ecocollection>
      <Background></Background>
      <Partners></Partners>
      {/* <Card></Card> */}
      
    </>
  );
};

export default Mainpage;
