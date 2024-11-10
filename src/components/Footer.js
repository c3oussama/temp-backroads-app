import SocialLink from './SocialLink';
import PageLinks from './PageLinks';
import { socialLinks } from '../data';
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" childClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id } = link;
          return <SocialLink key={id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
