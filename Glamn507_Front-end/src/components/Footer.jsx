import React from 'react';
import './Footer.css';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="logoEng">GLAMN 507</p>
        <p className="logoKor">(주)글램앤507</p>
        <div className="footer-sns">
          <a href="https://www.youtube.com/@glamn507" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: '#FFFFFF' }}>
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/glamn507_official/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: '#FFFFFF' }}
          >
            <FaInstagram size={37} />
          </a>

        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-line">
          <p>본사 ㅣ 전라남도 나주시 그린로 317-13, 4층</p>
          <p className="contact">070 8883 5120</p>
        </div>
        <div className="footer-line">
          <p>자사 ㅣ 서울시 강서구 마곡서로 205-21, 3층 / 205-21, Magokseo-ro, Gangseo-gu, Seoul</p>
          <p className="contact">glamn507@gmail.com</p>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} GLAMN507. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
