import "./Header.scss"
import HomeLogo from "../img/HomeLogo.png";
import Logo from "../img/logo.png";
import Menu from "../img/Menu.png";
import React from "react";

function Header() {
    const xref = React.useRef()
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header__info">
                  <a className="header__link" href="#Logo">
                    <img src={HomeLogo} alt="HomeLogo"  width={31} height={31}/>
                    <img src={Logo} alt="Logo" width={91} height={30}/>
                  </a>

                 <ul className="list">
                    <li className="item">
                        <a className="link" href="#About">About</a>
                    </li>

                    <li className="item">
                        <a className="link" href="#About">Blog</a>
                    </li>

                    <li className="item">
                        <a className="link" href="#About">Agency</a>
                    </li>

                    <li className="item">
                        <a className="link" href="#About">Featured</a>
                    </li>

                    <li className="item">
                        <a className="link" href="#About">Price</a>
                    </li>
                 </ul>

                 <picture>
                    <img ref={xref} onClick={() => {
                        xref.current.classList.add("block")
                    }} src={Menu} alt="Menu"/>
                 </picture>


                 <div
                     onClick={(evt) => {
                        if (evt.target.matches(".modal")) {
                            xref.current.classList.remove("block")
                        }
                    }}
                    className="modal" ref={xref}>
                    <div className="modal__div">
                        <h3 className="modal__heading">Pravisy Polisy</h3>
                        <button ref={xref} onClick={() => {
                            xref.current.classList.remove("block")
                        }} className="modal__button">X</button>
                        <p className="modal__text"> Hi, I’m Muslimbek <br/><br/>
                            👀 I’m interested in ...Enginer<br/><br/>
                            🌱 I’m currently learning ...Frontend<br/><br/>
                            💞️ I’m looking to collaborate on ...TenX<br/><br/>
                            📫 How to reach me ...@muslimbeksalimov0102@gmail.com</p>
                    </div>
                 </div>
                 
                 </div>
            </div>
        </header>
        </>
    )
}

export default Header;