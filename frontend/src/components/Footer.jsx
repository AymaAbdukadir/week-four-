import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-amber-400 mb-4">Hami MiniMarket</h3>
          <p className="text-gray-400 text-sm">
            Your trusted local supermarket delivering fresh fruits, vegetables, and daily essentials right to your doorstep.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-amber-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-400 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-amber-400 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Products</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">About</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-amber-400 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-amber-400" /> Your City, Somalia
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-amber-400" /> +252 61 2345678
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-amber-400" /> support@hamimarket.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Hami MiniMarket. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
