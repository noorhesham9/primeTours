import { Box, Container } from "@mui/material";
import "./pricing.css";
import { delay, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
function pricing({ t, lang }) {
  const navigate = useNavigate();
  let data1 = [];
  let data2 = [];
  if (lang === "en") {
    data1 = [
      {
        id: "01",
        title: "5Days - 4Nights - 700$",
        price: "700",
        details: [
          "2 tbilisi (tbilisi tour - caucas mountains)",
          "2 bakuriani (borjomi botenical garden and borjomi tour + bakurian ski resort and bakuriani tour )",
        ],
        navigate: "/program/program4",
      },
      {
        id: "02",
        title: "6days - Start : 800$",
        price: "800",
        details: [
          "Day 1: Tbilisi",
          "Day 2: Tbilisi + Caucasus Mountains",
          "Day 3: Borjomi",
          "Day 4: Bakuriani",
          "Day 5: Batumi",
          "Day 6 : Air port Transfer",
        ],
        navigate: "/program/program1",
      },
      {
        id: "03",
        title: " 7Days - 6Nights - 1000$",
        price: "1000",
        details: [
          "2 tbilisi (tbilisi tour - caucas mountains)",
          "2 bakuriani (borjomi botenical garden and borjomi tour + bakurian ski resort and bakuriani tour )",
          "2 Batumi ( batumi botenical garden and batumi tour - Makhunseti tour )",
        ],
        navigate: "/program/program5",
      },
    ];
    data2 = [
      {
        id: "04",
        title: "8days - Start : 1150$",
        price: "1150",
        details: [
          "Day 1: Tbilisi",
          "Day 2: Tbilisi + Caucasus Mountains",
          "Day 3: Borjomi",
          "Day 4: Bakuriani",
          "Day 5: Batumi",
          "Day 6: Batumi + Makhuntseti Waterfall",
          "Day 7:  National Botanical Park + Transfer to Tbilisi",
          "Day 8: Airport Transfer",
        ],
        navigate: "/program/program2",
      },
      {
        id: "05",
        title: "9Days - 8Nights - 1250$",
        price: "1250",
        details: [
          "3 tbilisi (tbilisi tour - caucas mountains tour - dashbashi bridge tour )",
          "2 bakuriani (borjomi botenical garden and borjomi tour + bakurian ski resort and bakuriani tour )",
          "2 Batumi ( batumi botenical garden and batumi tour - Makhunseti tour - free day for shopping)",
        ],
        navigate: "/program/program6",
      },
      {
        id: "06",
        title: " 9days -  Start:1450$ + 1day free",
        price: "1450",
        details: [
          "Day 1: Tbilisi",
          "Day 2: Tbilisi + Caucasus Mountains",
          "Day 3: Borjomi",
          "Day 4: Bakuriani",
          "Day 5: Batumi",
          "Day 6: Batumi + Makhuntseti Waterfall",
          "Day 7:  National Botanical Park + Transfer to Tbilisi",
          "Day 8:  Tbilisi",
          "Day 9: Tbilisi Free Day",
        ],
        navigate: "/program/program3",
      },
    ];
  } else if (lang === "ar") {
    data1 = [
      {
        id: "01",
        title: "5 ايام 4 ليالي- 700 دولار",
        price: "700",
        details: [
          "2 تبليسي (جولة تبليسي - جبال القوقاز)",
          "2 باكورياني (حديقة بورجومي النباتية وجولة بورجومي  + منتجع باكوريان للتزلج وجولة باكورياني) )",
        ],
        navigate: "/program/program4",
      },
      {
        id: "02",
        title: "6 ايام - تبدأ : 800 دولار",
        price: "800",
        details: [
          "اليوم الأول: تبليسي",
          "اليوم الثاني: تبليسي + جبال القوقاز",
          "اليوم الثالث: بورجومي",
          "اليوم الرابع: باكورياني",
          "اليوم الخامس: باتومي",
          "اليوم السادس : الانتقال الى المطار ",
        ],
        navigate: "/program/program1",
      },
      {
        id: "03",
        title: "7 ايام 6 ليالي - 1000 دولار",
        price: "1000",
        details: [
          "2 تبليسي (جولة تبليسي - جبال القوقاز)",
          "2 باكورياني (حديقة بورجومي النباتية وجولة بورجومي  + منتجع باكوريان للتزلج وجولة باكورياني) )",
          "2 باتومي (حديقة باتومي النباتية وجولة باتومي - جولة ماخونسيتي)",
        ],
        navigate: "/program/program5",
      },
    ];
    data2 = [
      {
        id: "04",
        title: "8 ايام تبدأ : 1150 دولار",
        price: "1150",
        details: [
          "اليوم الأول: تبليسي",
          "اليوم الثاني: تبليسي + جبال القوقاز",
          "اليوم الثالث: بورجومي",
          "اليوم الرابع: باكورياني",
          "اليوم الخامس: باتومي",
          "اليوم السادس: باتومي + شلال ماخونتسيتي",
          "اليوم السابع: الحديقة النباتية الدولية + العودة",
          "اليوم الثامن: الانتقال إلى المطار",
        ],
        navigate: "/program/program2",
      },
      {
        id: "05",
        title: "9 ايام 8 ليالي - 1250 دولار",
        price: "1250",
        details: [
          "3 تبليسي (جولة تبليسي - جولة جبال القوقاز - جولة جسر داشباشي)",
          "2 باكورياني (حديقة بورجومي النباتية وجولة بورجومي  + منتجع باكوريان للتزلج وجولة باكورياني) )",
          "3 باتومي (حديقة باتومي النباتية وجولة باتومي - جولة ماخونسيتي - يوم حر للتسوق)",
        ],
        navigate: "/program/program6",
      },
      {
        id: "06",
        title: "9 ايام - تبدأ : 1450 دولار + 1 يوم مجانا",
        price: "1450",
        details: [
          "اليوم الأول: تبليسي",
          "اليوم الثاني: تبليسي + جبال القوقاز",
          "اليوم الثالث: بورجومي",
          "اليوم الرابع: باكورياني",
          "اليوم الخامس: باتومي",
          "اليوم السادس: باتومي + شلال ماخونتسيتي",
          "اليوم السابع: الحديقة النباتية الدولية + العودة",
          "اليوم الثامن: كازبيجي + قلعة أنانوري",
          "اليوم التاسع: يوم حر في تبليسي",
        ],
        navigate: "/program/program3",
      },
    ];
  }

  const getAnimationVariants = (delay) => ({
    initial: { opacity: 0, x: 40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5 },
    },
  });
  const getAnimationVariants2 = (delay) => ({
    initial: { opacity: 0, x: -40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5 },
    },
  });
  return (
    <div id="pricing" className="section">
      <Container>
        <div className="heading">
          <div className="yellow">
            <h4>{t("mainPricing")}</h4>
            <p>{t("submainPricing")}</p>
          </div>
          <div className="bblack">
            <p>{t("submainPricing2")}</p>
          </div>
        </div>
        <Box className="contain Box1">
          {data1.map((item, i) => (
            <motion.div
              variants={getAnimationVariants(i * 0.5)} // Add a delay based on the section id
              initial="initial"
              whileInView="animate"
              key={item.id}
              viewport={{ once: true }}
              className="item"
            >
              <Box
                sx={{
                  padding: "25px",
                }}
              >
                <div className="badge ">★</div>
                <h3 className="plan-level">{item.id}</h3>
                <h1 className="price">${item.price}</h1>
                <p
                  style={{
                    direction: lang === "en" ? "rtl" : "ltr",
                  }}
                  className="titleee"
                >
                  {item.title}
                </p>
                <ul className="features-list">
                  {item.details.map((detail) => (
                    <li
                      style={{
                        direction: lang === "en" ? "rtl" : "ltr",
                      }}
                      key={detail}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log(item);
                    navigate(`${item.navigate}`);
                  }}
                  className="show-more"
                >
                  {lang === "en" ? "Show More" : "عرض المزيد"}
                </button>
              </Box>

              <button
                onClick={() => {
                  location.href =
                    "https://api.whatsapp.com/send?phone=995555555640";
                }}
                className="buy-now"
              >
                {lang === "en" ? "Book Now" : " احجز الان"}
              </button>
            </motion.div>
          ))}
        </Box>
        <Box className="contain Box2">
          {data2.map((item, i) => (
            <motion.div
              viewport={{ once: true }}
              variants={getAnimationVariants2(i * 0.5)} // Add a delay based on the section id
              initial="initial"
              whileInView="animate"
              key={item.id}
              className="item"
            >
              <Box
                sx={{
                  padding: "25px",
                }}
              >
                <div className="badge ">★</div>
                <h3 className="plan-level">{item.id}</h3>
                <h1 className="price">${item.price}</h1>
                <p
                  style={{
                    direction: lang === "en" ? "rtl" : "ltr",
                  }}
                  className="titleee"
                >
                  {item.title}
                </p>
                <ul className="features-list">
                  {item.details.map((detail) => (
                    <li
                      style={{
                        direction: lang === "en" ? "rtl" : "ltr",
                      }}
                      key={detail}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log(item);
                    navigate(`${item.navigate}`);
                  }}
                  className="show-more"
                >
                  {lang === "en" ? "Show More" : "عرض المزيد"}
                </button>
              </Box>

              <button
                onClick={() => {
                  location.href =
                    "https://api.whatsapp.com/send?phone=995555555640";
                }}
                className="buy-now"
              >
                {lang === "en" ? "Book Now" : " احجز الان"}
              </button>
            </motion.div>
          ))}
        </Box>

        <Box
          sx={{
            background: "#cc9900",
            padding: "25px",
            display: "flex",
            flexWrap: "wrap",

            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            gap: "10px",
          }}
        >
          <div className="banner-text">{t("pricingPanner")}</div>
          <button
            onClick={() => {
              location.href =
                "https://api.whatsapp.com/send?phone=995555555640";
            }}
            className="book-now-button"
          >
            {lang === "en" ? "Book Now!" : "احجز الان"}
          </button>
        </Box>
      </Container>
    </div>
  );
}

export default pricing;
