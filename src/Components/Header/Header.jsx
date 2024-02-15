import React from "react";
import CofeLogo from "../img/Cofe-logo.svg";
import "./Header.scss";
import Languages from "../Localization/Loacalization";

function Header({lang, setlang}) {
  // const xRef = React.useState()

  return (
    <>
      <header className="header">
        <div className="container">
          <a className="header__link" href="#link">
            <img
              className="header__logo"
              src={CofeLogo}
              alt="cofe logo"
              width="237"
              height="27"
            />
          </a>

          <select value={lang} className="select" 
              onChange={(hi) =>
               setlang(hi.target.value)}>
                <option value="uz">UZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
          </select>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#link">{Languages[lang].header.nav.nav__link}</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="#link">{Languages[lang].header.nav.nav__link1}</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="#link">{Languages[lang].header.nav.nav__link2}</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
