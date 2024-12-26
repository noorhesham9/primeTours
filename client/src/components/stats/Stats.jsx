import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./stats.css";
import { Container } from "@mui/material";
function Stats({ t, lang }) {
  return (
    <div className="containerrrrrstats">
      <Container>
        <div className="info-section">
          <div className="info-item">
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <span className="number">225</span>
            <span className="label">{t("statslabel1")}</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className="icon" icon={faHeadset} />
            <span className="number">24/7</span>
            <span className="label">{t("statslabel2")}</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className="icon" icon={faShieldHalved} />
            <span className="number">100%</span>
            <span className="label">{t("statslabel3")}</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className="icon" icon={faDollarSign} />
            <span className="number">25</span>
            <span className="label">{t("statslabel4")}</span>
          </div>
        </div>

        <div className="review-section">
          <p>{t("reviewlabel")} </p>
          <button
            onClick={() => {
              location.href = "#message";
            }}
            className="submit-button"
          >
            {lang === "en" ? "Submit" : "اخبرنا رأيك"}
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Stats;
