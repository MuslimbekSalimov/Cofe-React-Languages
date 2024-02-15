import "./Hero.scss";
import Languages from "../Localization/Loacalization";

function Hero({lang}) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__info">
            <h1 className="hero__heading">{Languages[lang].hero.hero__info.hero__heading}</h1>
            <p className="hero__text">
              {Languages[lang].hero.hero__info.hero__text}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
