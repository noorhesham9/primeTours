import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./stats.css";
import { Container } from "@mui/material";
function Stats() {
  return (
    <div className="containerrrrrstats">
      <Container>
        <div className="info-section">
          <div className="info-item">
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <span className="number">225</span>
            <span className="label">Destinations</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className="icon" icon={faHeadset} />
            <span className="number">24/7</span>
            <span className="label">Support</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className="icon" icon={faShieldHalved} />
            <span className="number">100%</span>
            <span className="label">Secure payments</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon className="icon" icon={faDollarSign} />
            <span className="number">25</span>
            <span className="label">Days money return</span>
          </div>
        </div>

        <div className="review-section">
          <p>
            TELL US ABOUT YOUR EXPERIENCE WITH PRIME TOURS. SUBMIT A REVIEW!
          </p>
          <button className="submit-button">Submit</button>
        </div>
      </Container>
    </div>
  );
}

export default Stats;
