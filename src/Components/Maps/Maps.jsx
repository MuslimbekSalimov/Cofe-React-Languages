import "./Maps.scss";
import MapsPic from "../img/maps.svg"
import Languages from "../Localization/Loacalization";

function Maps({lang}) {
  return (
    <>
      <section className="maps">
        <div className="container">
          <div className="maps__info">
            <h4 className="maps__heading">{Languages[lang].maps.maps__info.maps__heading}</h4>

            <ul className="maps__list">
              <li className="maps__item">
                <img className="maps__pic" src={MapsPic} alt="maps" width="40" height="49"/>
                <h5 className="maps__heading__h5">{Languages[lang].maps.maps__info.maps__heading__h5}</h5>
                <p className="maps__text">68  Asfordby Rd</p>
                <p className="maps__text">Alcaston</p>
                <p className="maps__text">SY6 1YA</p>
                <a className="maps__link maps__text" href="tel:+44 1241 918425">+44 1241 918425</a>
              </li>

              <li className="maps__item">
                <img className="maps__pic" src={MapsPic} alt="maps" width="40" height="49"/>
                <h5 className="maps__heading__h5">{Languages[lang].maps.maps__info.maps__heading__h5}</h5>
                <p className="maps__text">68  Asfordby Rd</p>
                <p className="maps__text">Alcaston</p>
                <p className="maps__text">SY6 1YA</p>
                <a className="maps__link maps__text" href="tel:+44 1241 918425">+44 1241 918425</a>
              </li>

              <li className="maps__item">
                <img className="maps__pic" src={MapsPic} alt="maps" width="40" height="49"/>
                <h5 className="maps__heading__h5">{Languages[lang].maps.maps__info.maps__heading__h5}</h5>
                <p className="maps__text">68  Asfordby Rd</p>
                <p className="maps__text">Alcaston</p>
                <p className="maps__text">SY6 1YA</p>
                <a className="maps__link maps__text" href="tel:+44 1241 918425">+44 1241 918425</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Maps;
