import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import LocalizedStrings from 'react-localization';


let strings = new LocalizedStrings({
    en: {
        contact: "Contact us at"

    },
    ua: {
        contact: "Зворотній зв'язок: "
    }
});

const Footer = () => (


    <nav id='footer' className="navbar navbar-dark bg-dark">
        <div style={{color:'white'}}>{strings.contact} <a style={{color:'white'}} href = "optical.filters.uzhnu@gmail.com">optical.filters.uzhnu@gmail.com</a></div>
        </nav>
);

export default Footer;