import "./Cofe.scss";
import CofeIssiq from "../img/cofeissiq.png";
import Languages from "../Localization/Loacalization";

function Cofe({lang}) {
  return (
    <>
      <section className="cofe">
        <div className="container">
          <div className="cofe__info">
            <h3 className="cofe__heading">{Languages[lang].cofe.cofe__info.cofe__heading }</h3>
            <p className="cofe__text">
              {Languages[lang].cofe.cofe__info.cofe__text}
            </p>
          </div>

          <img
            className="cofe__imges"
            src={CofeIssiq}
            alt="cofe"
            width="445"
            height="474"
          />
        </div>
      </section>
    </>
  );
}

export default Cofe;
