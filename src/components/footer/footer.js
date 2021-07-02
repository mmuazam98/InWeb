import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
const Footer = () => {
		return (
            <footer id="footer">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="text-center grow">
                            <img src = { require('../../assets/logo.png') } className="logo" alt="logo" />
                            <br/><br/>
                        </div>
                        <h2 className="text-center">College Made Simpler</h2>
                        <hr className="light"/>
                        
                    </div>
                    <div className="col-md-4">
                        <h2 className="text-center">GET CONNECTED</h2>
                        <hr className="light"/>
                        <ul className="social_icon d-flex justify-content-center ">
                            <li> <a href="https://www.linkedin.com/in/pranjay-poddar/" target="blank"><i className="fab fa-linkedin grow"></i></a></li>
                            <li> <a href="https://github.com/pranjay-poddar/Inweb-2.0" target="blank"><i className="fab fa-github grow"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2 className="text-center">HAVE QUESTIONS?</h2>
                        <hr className="light"/>
                        <ul>
                            <div className="footer_inner1 grow">
                                <li className="linkt"><a href="mailto: collegemadesimplerinfo@gmail.com"><i className="fas fa-angle-double-right"></i> Email</a></li>
                            </div>
                            <div className="footer_inner1 grow">
                                <li className="linkt"><a href="tel:+91-1234567890"><i className="fas fa-angle-double-right"></i> Call</a></li>
                            </div>
                            <div className="footer_inner1 grow">
                                <li className="linkt"><a className="drift-open-chat" href="#"><i className="fas fa-angle-double-right"></i> Chat With Us</a></li>
                            </div>
        
                        </ul>
                    </div>
                  
                    <div className="col-12">
                        <div className="text-center footer_image">
                            <img src = { require('../../assets/footer.png') } alt="footer"/>
                        </div>
                        <hr className="light-100 "/>
                        <h5 className="text-center"> © 2021 CMS</h5>
                    </div>
                </div>
            </div>
        </footer>
	)
}

export default Footer