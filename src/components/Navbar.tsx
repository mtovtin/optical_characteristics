import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../images/logo.png';
import LocalizedStrings from 'react-localization';
import buttonFlagUA from '../images/flagu.png'
import buttonFlagUK from '../images/flagb.webp'

let strings = new LocalizedStrings({
    en: {
        home: "Home",
        os: "Optical structures",
        modern: "Information about modern optical coatings",
        indices: "Refractive indices of materials",
        page:"Page",
        transmissioncoefficient:"Transmission coefficient",
        polarization:"Polarization"
    },
    ua: {
        home: "Головна",
        os: "Оптичні структури",
        modern: "Відомості про сучасні оптичні покриття",
        indices: "Показники заломлення матеріалів",
        page:"Сторінка",
        transmissioncoefficient:"Коефіцієнт пропускання",
        polarization:"Поляризація"
    }
});

function Navbar(props:any) {
    let buttonImage
    if(props.language==='en'){
        strings.setLanguage('en');
        buttonImage = buttonFlagUK
      }	else {
        strings.setLanguage('ua');
        buttonImage = buttonFlagUA
      }
  return  <nav  className="navbar navbar-expand-md navbar-dark bg-dark">

        <div id='nb' className="container-fluid justify-content-lg-start justify-content-xs-center  justify-content-md-center justify-content-sm-center text-center ">
            <a href="/" className="navbar-brand">
                <img src={logo} height="66" alt="CoolBrand"></img>
            </a>
            
            <button id='nbb' className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href='/'>{strings.home}</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {strings.os}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/structures" target='frame1'>{strings.modern}</a></li>
                            <li>
                                <hr className="dropdown-divider"></hr>
                            </li>
                            <li><a className="dropdown-item" href="/numbers" target='frame1'>{strings.indices}</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href='/page'>{strings.page}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href='/coefficient'>{strings.transmissioncoefficient}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href='/polarization'>{strings.polarization}</a>
                    </li>
                </ul>
            </div>
            <button id='flagButton' style={{backgroundImage:'url(' + buttonImage + ')'}} onClick={()=>{props.func(props.language==='en'?'ua':'en');}}></button>
        </div>
    </nav>




};

export default Navbar;