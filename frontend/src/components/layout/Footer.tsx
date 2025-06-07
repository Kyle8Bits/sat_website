import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#070758] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Text Section */}
        <p className="text-sm text-center sm:text-left">
          {/* ✏️ You can change this content */}
          © 2025 RMIT Events – Empowering Future Innovators.
        </p>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/satrmitsgs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-facebook-f text-lg">Facebook</i>
          </a>
          <a
            href="https://www.instagram.com/sat_rmit_sgs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition-colors"
          >
            <i className="fab fa-instagram text-lg">Instagram</i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
