import { GiMountaintop } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="name">
        <p>©2025</p>
        <p>SofieBak</p>
      </div>
      <div className="footerLogo">
        <GiMountaintop />
        <p>switzerland</p>
      </div>
      <div className="footerSocials">
        <FaInstagram />
        <FaFacebookF />
        <FaTwitter />
      </div>
    </footer>
  );
};

export default Footer;
