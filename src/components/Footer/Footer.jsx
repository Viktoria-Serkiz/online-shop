import Socialmedia from "./Socialmedia";
import { Footercopyright } from "./Footercopyright";
import { FooterForm } from "./FooterForm";
import { FooterNav } from "./FooterNav";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <FooterNav />
          <div className="footer__info">
            <p className="footer__info_text">
              Sign up today for email exclusives including early access to Sale,
              the latest trends and arrivals from your favorite designers and
              can’t miss promotions.
            </p>
            <FooterForm />
            <Socialmedia />
          </div>
        </div>
      </div>
      <Footercopyright />
    </footer>
  );
};

export default Footer;
