import Sale from "../components/Main/Sale";
import Populargoods from "../components/Main/Populargoods";
import Layout from "../components/Main/Layout";
import Ecocollection from "../components/Main/Ecocollection";
import Background from "../components/Main/Background";
import Partners from "../components/Main/Partners";
import { Slider } from "../components/Main/Slider";
import Slider2 from "../components/Main/Slider2";

const Mainpage = () => {
  return (
    <>
      <Sale />
      <Populargoods />
      <Slider />
      <Layout />
      <Slider2 className="glide2" />
      <Ecocollection />
      <Background />
      <Partners />
    </>
  );
};

export default Mainpage;
