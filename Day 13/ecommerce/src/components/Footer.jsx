import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/clevercoderjoy" target='_blank' className="hover:text-blue-400 transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/clevercoderjoy" target='_blank' className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="https://twitter.com/clevercoderjoy" target='_blank' className="hover:text-blue-400 transition-colors">Twitter</a>
          <a href="https://clevercoderjoy.bio.link/" target='_blank' className="hover:text-blue-400 transition-colors">Bio.Link</a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} clevercoderjoy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
