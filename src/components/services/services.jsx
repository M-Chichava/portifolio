import React, {useState} from 'react'
import './Services.css'
import ServicesImg from '../../assets/Logo-black.png'
const Services = () => {
    const [toggleState, setToggleState] = useState(0)
     
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className='services__img'>
                 
            <img src={ServicesImg} alt="" className="about__img" />
             
            </div>
            <div className="services__container container grid">
                
                <div className="services__content">
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product  Design</h3>


                    <span className="services__button" onClick={ () => toggleTab(1) } >View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className= { toggleState === 1 ? "services__modal active__modal" : "services__modal" } >
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                            <h3 className="services__modal-title">Product  Design</h3>
                            <p className="services__modal-description">Service with more than 2 years of experience.
                                Providing quality work to client and companies</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I Develop the User Interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web Application Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web API Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UX element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockup of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">UI/UX  Designer</h3>


                    <span className="services__button" onClick={ () => toggleTab(2) } >View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={ toggleState === 2 ? "services__modal active__modal" : "services__modal" } >
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                            <h3 className="services__modal-title">UI/UX  Designer</h3>
                            <p className="services__modal-description">Service with more than 2 years of experience.
                                Providing quality work to client and companies</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I Develop the User Interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web Application Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web API Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UX element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockup of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <i className="uil uil-globe services__icon"></i>
                    <h3 className="services__title">Web App  Development</h3>


                    <span className="services__button" onClick={ () => toggleTab(3) } >View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={ toggleState === 3 ? "services__modal active__modal" : "services__modal" } >
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={ () => toggleTab(0) } ></i>

                            <h3 className="services__modal-title">Web App  Development</h3>
                            <p className="services__modal-description">Service with more than 2 years of experience.
                                Providing quality work to client and companies</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I Develop the User Interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web Application Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web API Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UX element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockup of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <i className="uil uil-mobile-android services__icon"></i>
                    <h3 className="services__title">Mobile App  Development</h3>


                    <span className="services__button" onClick={ () => toggleTab(4) } >View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={ toggleState === 4 ? "services__modal active__modal" : "services__modal" } >
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={ () => toggleTab(0) } ></i>

                            <h3 className="services__modal-title">Mobile App  Development</h3>
                            <p className="services__modal-description">Service with more than 2 years of experience.
                                Providing quality work to client and companies</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I Develop the User Interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web Application Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web API Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UX element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockup of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services