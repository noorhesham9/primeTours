import React from "react";
import "./footer.css";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@mui/material";

function Footer() {
  return (
    <Container className="footer">
      <div className="footer-content">
        <span className="footer-text">PRIME TOURS</span>
        <div className="social-icons">
          <div className="iconContainer">
            {" "}
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="iconContainer">
            {" "}
            <FontAwesomeIcon icon={faTiktok} />
          </div>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faSnapchat} />
          </div>
          <div className="iconContainer">
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
