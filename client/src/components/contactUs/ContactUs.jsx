import { Box, Typography, IconButton, Container } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
function ContactUs({ t, lang }) {
  const getAnimationVariants = () => ({
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  });
  const getAnimationVariants2 = () => ({
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  });

  let Navigate = useNavigate();

  return (
    <div
      id="caontactUs"
      className="section"
      style={{
        backgroundImage: "url('/images/contactUs.jpg')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <motion.div
          variants={getAnimationVariants()} // Add a delay based on the section id
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
            marginTop: "60px",
            gap: "50px",
          }}
        >
          <Box
            sx={{
              width: "320px",
              maxWidth: "100%",
              position: "relative",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(16, 129, 147, 0.5)", // Semi-transparent background
              color: "#fff",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                backgroundColor: "#fcb900",
                top: "0",
                transform: "translateY(-50%)",
                color: "#fff",
                width: "60px",
                height: "60px",
                marginBottom: "10px",
                "&:hover": { backgroundColor: "#e0a800" },
              }}
            >
              <PhoneIcon
                sx={{
                  fontSize: "30px",
                }}
              />
            </IconButton>
            <Typography
              sx={{
                marginBottom: "20px",
                textAlign: "center",
                fontFamily: "Playfair Display SC serif",
                fontWeight: "400",
                fontSize: "19px",
              }}
              variant="h6"
            >
              CALL US
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                fontWeight: "300",
                fontSize: "17px",
                lineHeight: "1.4",
              }}
            >
              +995 555 55 56 40
            </Typography>
          </Box>

          <Box
            sx={{
              width: "320px",
              maxWidth: "100%",
              position: "relative",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(16, 129, 147, 0.5)", // Semi-transparent background
              color: "#fff",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                backgroundColor: "#fcb900",
                top: "0",
                transform: "translateY(-50%)",
                color: "#fff",
                width: "60px",
                height: "60px",
                marginBottom: "10px",
                "&:hover": { backgroundColor: "#e0a800" },
              }}
            >
              <EmailIcon />
            </IconButton>
            <Typography
              sx={{
                marginBottom: "20px",
                textAlign: "center",
                fontFamily: "Playfair Display SC serif",
                fontWeight: "400",
                fontSize: "19px",
              }}
              variant="h6"
            >
              EMAIL US
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                fontWeight: "300",
                fontSize: "17px",
                lineHeight: "1.4",
              }}
            >
              Info@prime-tours.net
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          variants={getAnimationVariants2()} // Add a delay based on the section id
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
            marginTop: "60px",
            gap: "50px",
          }}
        >
          <Box
            sx={{
              width: "320px",
              height: "160px",
              maxWidth: "100%",
              position: "relative",

              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(16, 129, 147, 0.5)", // Semi-transparent background
              color: "#fff",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                backgroundColor: "#fcb900",
                top: "0",
                transform: "translateY(-50%)",
                color: "#fff",
                width: "60px",
                height: "60px",
                marginBottom: "10px",
                "&:hover": { backgroundColor: "#e0a800" },
              }}
            >
              <WhatsAppIcon />
            </IconButton>
            <Typography
              onClick={() => {
                location.href =
                  "https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=995555555640&text";
              }}
              sx={{
                textDecoration: "underline",
                marginBottom: "20px",
                textAlign: "center",
                fontFamily: "Playfair Display SC serif",
                fontWeight: "400",
                fontSize: "19px",
                cursor: "pointer",
              }}
              variant="h6"
            >
              WHATSAPP
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                fontWeight: "300",
                fontSize: "17px",
                lineHeight: "1.4",
              }}
            >
              +995 555 55 56 40
            </Typography>
          </Box>

          <Box
            sx={{
              width: "320px",
              maxWidth: "100%",
              position: "relative",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(16, 129, 147, 0.5)", // Semi-transparent background
              color: "#fff",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                backgroundColor: "#fcb900",
                top: "0",
                transform: "translateY(-50%)",
                color: "#fff",
                width: "60px",
                height: "60px",
                marginBottom: "10px",
                "&:hover": { backgroundColor: "#e0a800" },
              }}
            >
              <DescriptionIcon />
            </IconButton>
            <Typography
              onClick={() => {
                Navigate("/reservationForm");
              }}
              sx={{
                textDecoration: "underline",
                marginBottom: "20px",
                textAlign: "center",
                fontFamily: "Playfair Display SC serif",
                fontWeight: "400",
                fontSize: "19px",
                cursor: "pointer",
              }}
              variant="h6"
            >
              {lang === "en" ? "RESERVATION FORM" : "استمارة حجز"}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
}

export default ContactUs;
