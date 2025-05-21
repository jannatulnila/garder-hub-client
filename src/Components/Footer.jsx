import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <nav>
                <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                <p className="text-sm">Email: support@gardenhub.com</p>
                <p className="text-sm">Phone: +1 (555) 123-4567</p>
                <p className="text-sm">Location: Sunnyvale, CA</p>
            </nav>
            <nav>
                <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                <ul className="space-y-1 text-sm">
                    <li><a href="/terms" className="link link-hover">Terms of Service</a></li>
                    <li><a href="/privacy" className="link link-hover">Privacy Policy</a></li>
                    <li><a href="/faq" className="link link-hover">FAQ</a></li>
                    <li><a href="/contact" className="link link-hover">Contact</a></li>
                </ul>
            </nav>
            <nav>
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
              <div className="flex justify-center md:justify-start gap-4 text-lg">
                <a href="https://facebook.com" className="btn btn-sm btn-circle bg-green-600 text-white hover:bg-green-700">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com" className="btn btn-sm btn-circle bg-green-600 text-white hover:bg-green-700">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" className="btn btn-sm btn-circle bg-green-600 text-white hover:bg-green-700">
                    <FaInstagram />
                </a>
                <a href="mailto:support@gardenhub.com" className="btn btn-sm btn-circle bg-green-600 text-white hover:bg-green-700">
                    <FaEnvelope />
                </a>
            </div>
            <div className="mt-10 text-sm text-center text-gray-500">
                &copy; {new Date().getFullYear()} GardenHub. All rights reserved.
            </div>
            </nav> 
        </footer >
    );
};

export default Footer;