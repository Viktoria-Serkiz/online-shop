import Sale from "./Sale";
import Populargoods from "./Populargoods";
import Layout from "./Layout";
import Ecocollection from "./Ecocollection";
import Background from "./Background";
import Partners from "./Partners";
import { Slider } from "../../components/Slider";
import Slider2 from "../../components/Slider2";

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
