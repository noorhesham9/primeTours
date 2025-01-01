import "./Features.css";
import { delay, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const animationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { delay: "0.2", duration: 0.5 } },
};
const Features = ({ t }) => {
  return (
    <div
      className="sky-container"
      style={{
        // backgroundImage: `url(/images/skyImage.jpg)`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      <video autoPlay loop muted>
        <source src="/videos/1231.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="contentt">
        <AnimatePresence>
          <motion.div
            key={"section-1"}
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            className="sectionb"
            id="section-1"
          >
            <h1 className="section-number">01</h1>
            <p className="section-text">{t("feature1")}</p>
          </motion.div>

          <motion.div
            key={"section-2"}
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ once: true }}
            className="sectionb"
            id="section-2"
          >
            <h1 className="section-number">02</h1>
            <p className="section-text">{t("feature2")} </p>
          </motion.div>

          <motion.div
            key={"section-3"}
            variants={animationVariants}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            exit="exit"
            className="sectionb"
            id="section-3"
          >
            <h1 className="section-number">03</h1>
            <p className="section-text">{t("feature3")}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Features;
