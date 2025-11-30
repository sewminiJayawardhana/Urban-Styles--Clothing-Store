import React from 'react'
import '../pages/styles/Footer.css'
import { MapPin,PhoneCall,Mail} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    
    <div class="footer">
        <div class="footer-left">
            <h2>Contact Us</h2>
            <p> <MapPin color="#DBA400" size={25} /> 123 Fashion Avenue, Style District, New York, NY 10001</p>
            <p><PhoneCall color="#DBA400" size={25}  />   +1 (94) 123-4567</p>
            <p><Mail color="#DBA400" size={25} />info@urbanstyleboutique.com</p>
        </div>

        <div class="footer-right">
            <h2>Follow Us</h2>
            <div className="social-icons">
                <a href="#"><FaFacebookF size={28} style={{ color: "black" }} /></a>
                <a href="#"><FaInstagram size={28} style={{ color: "#000000ff" }} /></a>
                <a href="#"><FaTwitter size={28} style={{ color: "#000000ff" }} /></a>
            </div>
        </div>
    </div>
    
  )
}

export default Footer
