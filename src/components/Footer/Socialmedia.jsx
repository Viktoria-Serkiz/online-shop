import { Link } from "react-router-dom";
import Instagramicon from "../../img/instagram.svg";
import Facebook from "../../img/facebook.svg";
import Pinteresticon from "../../img/pinterest.svg";
import Twittericon from "../../img/twitter.svg";
import Youtubeicon from "../../img/youtube.svg";

const Socialmedia = () => {
  return (
    <div className="footer__icons">
      <Link href="/" className="footer__icons_link">
        <img src={Instagramicon} alt="" />
      </Link>
      <Link href="/" className="footer__icons_link">
        <img src={Facebook} alt="" />
      </Link>
      <Link href="/" className="footer__icons_link">
        <img src={Twittericon} alt="" />
      </Link>
      <Link href="/" className="footer__icons_link">
        <img src={Pinteresticon} alt="" />
      </Link>
      <Link href="/" className="footer__icons_link">
        <img src={Youtubeicon} alt="" />
      </Link>
    </div>
  );
};

export default Socialmedia;
