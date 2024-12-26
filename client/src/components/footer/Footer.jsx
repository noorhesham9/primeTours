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
    <div className="footer">
      <Container>
        <div className="footer-content">
          <span className="footer-text">PRIME TOURS</span>
          <div className="social-icons">
            <div className="iconContainer">
              <a href="https://web.facebook.com/profile.php?id=61567784657445&mibextid=LQQJ4d&_rdc=1&_rdr#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>{" "}
            </div>
            <div className="iconContainer">
              <a href="https://www.tiktok.com/@prime__tours?_t=8r8yNa9LDJU&_r=1">
                <FontAwesomeIcon icon={faTiktok} />
              </a>{" "}
            </div>
            <div className="iconContainer">
              <a href="https://www.instagram.com/prime__tours?igsh=MTV1ajVoanRwMWYzYw%3D%3D&utm_source=qr">
                <FontAwesomeIcon icon={faInstagram} />
              </a>{" "}
            </div>
            <div className="iconContainer">
              <a href="https://www.instagram.com/prime__tours?igsh=MTV1ajVoanRwMWYzYw%3D%3D&utm_source=qr">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
