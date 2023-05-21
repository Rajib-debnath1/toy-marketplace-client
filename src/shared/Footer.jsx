
// import logo from "../assets/icons/plastic-building-blocks-toys.jpg"
import logo from "../assets/icons/plastic-building-blocks-toys.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
            <img className="w-[50px] h-[50px]" src={logo} alt="" />
                    <p>Funny Toys<br />Providing reliable tech since 2000</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding Car</a>
                    <a className="link link-hover">Designing Car</a>
                    <a className="link link-hover">Police Car</a>
                    <a className="link link-hover">Fruity car</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Register</a>
                    <a className="link link-hover">Login</a>
                </div>
                <div>
                <span className="footer-title">Our Location</span>
                   <p>Dhaka Bangladesh</p>
                   <p>Mirpur-10</p>
                   <div>
      <FontAwesomeIcon className="mr-3" icon={faFacebook} />
      <FontAwesomeIcon className="mr-3" icon={faTwitter} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;