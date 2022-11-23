import React from "react";
import './styles.css';
import HeaderImg from './headerImg.png';
import { Button } from "react-bootstrap";

const Header = () => {

    return (
        <div className="containers">
            <img src={HeaderImg} alt="Header Images" style={{ width: '100%', opacity: '0.5' }}/>
            <h1 className="headerText">Dian Aditya</h1>
            <h5 className="headerDesc"><i>Web Developer</i></h5>
            <a href="https://www.linkedin.com/in/dian-aditya-a297b3169/">
            <Button variant="info" className="btn">Linkedin Profile</Button>
            </a>
        </div>
        )
}

export default Header;