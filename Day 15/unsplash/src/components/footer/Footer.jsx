import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="https://github.com/clevercoderjoy" target='_blank' rel="noopener noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/clevercoderjoy" target='_blank' rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/clevercoderjoy" target='_blank' rel="noopener noreferrer">Twitter</a>
          <a href="https://clevercoderjoy.bio.link/" target='_blank' rel="noopener noreferrer">Bio.Link</a>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} clevercoderjoy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
