import Mainpage1 from "../img/mainpage1.jpg";
import Mainpage2 from "../img/mainpage2.jpg";

const Layout = () => {
  return (
    <>
      <div className="container">
        <div className="layout">
          <div className="layout__photo">
            <img src={Mainpage1} alt="" width="550px" height="770px"/>
          </div>
          <div className="layout__photo">
            <img src={Mainpage2} alt="" width="550px" height="770px"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
