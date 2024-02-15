import "./Our.scss";
import Brat from "../img/brat.png";
import Languages from "../Localization/Loacalization";

function Our({lang}) {
  return (
    <>
      <section className="our">
        <div className="container">
          <img
            className="our__imges"
            src={Brat}
            alt="Brat"
            width="445"
            height="520"
          />

          <div className="our__info">
            <h2 className="our__heading">{Languages[lang].our.our__info.our__heading}</h2>
            <p className="our__text">
              {Languages[lang].our.our__info.our__text}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


export default Our;