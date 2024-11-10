import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';
import { socialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" childClass="nav-link" />
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id } = link;
            return <SocialLink key={id} {...link} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
