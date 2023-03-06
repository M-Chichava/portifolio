import React from 'react'
import './Footer.css'

const Footer = () => {
    const linkeidin = "https://linkedin.com/in/marcos-chichava-bs321631"
    const twitter = "https://twitter.com/marcos_chichava"
    const instagram = "https://www.instagram.com/chichava.marcos/?hl=en"

  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Marcos</h1>

            <ul className="footer__list">
                <li>
                    <a href='#about' className="footer__link">About</a>
                </li>
                <li>
                    <a href='#portfolio' className="footer__link">Projects</a>
                </li>
                <li>
                    <a href='#testimonials' className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href={linkeidin} className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href={instagram} className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-instagram" ></i>
                </a>
                
                <a href={twitter} className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-twitter"></i>
                </a>

            </div>

            <span className="footer__copy">
            {new Date().getFullYear() }  &#169; Marcos Chichava. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer