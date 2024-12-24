import { Box, Container } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import "./header.css";
import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "الفنادق",
    link: "#hotels",
  },
  {
    id: 1,
    navTitle: "تواصل معنا",
    link: "#contacts",
  },
  {
    id: 2,
    navTitle: "privacy policy",
    link: "#privacyPolicy",
  },
];

function Header() {
  const [top, settop] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMopile, setISMopile] = useState(null);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 990) {
      setISMopile(false);
    } else {
      setISMopile(true);
    }
  }, []);
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };
  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        settop(false);
      } else {
        settop(true);
      }
    });
  });

  return (
    <Box
      sx={{
        zIndex: "50",
        transition: "ease-in-out 0.4s",
        position: "fixed",
        top: 0,
        left: "0%",
        width: "100%",
        background: top ? "transparent" : "rgb(16, 129, 147)",
      }}
    >
      <Container sx={{}}>
        <Box
          sx={{
            color: "white",
            padding: "10px 20px",
            "@media (max-width:340px)": {
              padding: "10px 0px",
            },
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            maxHeight: "",
          }}
        >
          {!isMopile && (
            <Box sx={{}}>
              <img
                className="img-loaded"
                style={{
                  transition: "ease-in-out 0.4s",

                  width: top ? "200px" : "100px",
                  borderRadius: "5px",
                  objectFit: "contain",
                }}
                src="images/logo.png"
                alt=""
              />
            </Box>
          )}

          {!isMopile ? (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                fontSize: "18px",
                color: "black",
                // "-webkit-text-stroke": "0.1px white",
                letterSpacing: "1px",
                fontWeight: 500,
                fontFamily: "Noto Kufi Arabic, sans-serif",
              }}
            >
              <div>الفنادق</div>
              <div>تواصل معنا</div>
              <div>privacy policy</div>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTiktok} />
              <FontAwesomeIcon icon={faSnapchat} />
              <FontAwesomeIcon icon={faInstagram} />
            </Box>
          ) : (
            <motion.nav
              className="containInMopile"
              initial="closed"
              animate={mobileNavOpen ? "opened" : "closed"}
            >
              <div className="logo-container">
                <motion.div variants={hideNavItemsVariant}>
                  <Box sx={{}}>
                    <img
                      className="img-loaded"
                      style={{
                        transition: "ease-in-out 0.4s",

                        width: !top && "100px",
                        borderRadius: "5px",
                        objectFit: "contain",
                      }}
                      src="images/logo.png"
                      alt=""
                    />
                  </Box>
                </motion.div>
              </div>
              <div className="menu-container">
                <motion.div
                  variants={hideNavItemsVariant}
                  onClick={() => setMobileNavOpen(true)}
                  className="openIcon"
                  style={{
                    color: "black",
                  }}
                >
                  <FontAwesomeIcon icon={faBars} />
                </motion.div>
              </div>
              <motion.div variants={mobileMenuVariant} className="mobile-menu">
                <motion.button
                  className="openIcon"
                  variants={fadeInVariant}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </motion.button>
                <motion.ul variants={ulVariant}>
                  {MOBILE_NAV_ITEMS.map((navItem) => (
                    <motion.li key={navItem.id}>
                      <motion.a
                        href={`${navItem.link}`} // يتغير من ال data
                        onClick={() => {
                          setMobileNavOpen(false);
                        }}
                        variants={liVariant}
                      >
                        {navItem.navTitle}
                      </motion.a>
                    </motion.li>
                  ))}
                  <motion.div variants={fadeInVariant} className="Links">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faTiktok} />
                    <FontAwesomeIcon icon={faSnapchat} />
                    <FontAwesomeIcon icon={faInstagram} />
                  </motion.div>
                </motion.ul>
              </motion.div>
            </motion.nav>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
