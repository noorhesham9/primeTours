import { Box, Container } from "@mui/material";
import "./pricing.css";

const data1 = [
  {
    id: "01",
    title: "6days - Start : 800 $",
    price: "800",
    details: [
      "Day 1: Tbilisi",
      "Day 2: Tbilisi + Caucasus Mountains",
      "Day 3: Borjomi",
      "Day 4: Bakuriani",
      "Day 5: Batumi",
      "Day 6 : Air port Transfer",
    ],
  },
  {
    id: "02",
    title: "8days - Start : 1150 $",
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
  },
  {
    id: "03",
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
  },
];
const data2 = [
  {
    id: "04",
    title: "5Days - 4Nights - 700$",
    price: "700",
    details: [
      "2 tbilisi (tbilisi tour - caucas mountains)",
      "2 bakuriani (borjomi botenical garden and borjomi tour + bakurian ski resort and bakuriani tour )",
    ],
  },
  {
    id: "05",
    title: " 7Days - 6Nights - 1000$",
    price: "1000",
    details: [
      "2 tbilisi (tbilisi tour - caucas mountains)",
      "2 bakuriani (borjomi botenical garden and borjomi tour + bakurian ski resort and bakuriani tour )",
      "2 Batumi ( batumi botenical garden and batumi tour - Makhunseti tour )",
    ],
  },
  {
    id: "06",
    title: "9Days - 8Nights - 1250$",
    price: "1250",
    details: [
      "3 tbilisi (tbilisi tour - caucas mountains tour - dashbashi bridge tour )",
      "2 bakuriani (borjomi botenical garden and borjomi tour + bakurian ski resort and bakuriani tour )",
      "2 Batumi ( batumi botenical garden and batumi tour - Makhunseti tour - free day for shopping)",
    ],
  },
];
function pricing() {
  return (
    <div className="section">
      <Container>
        <div className="heading">
          <div className="yellow">
            <h4>Next travelling destination?</h4>
            <p>We&apos;ve got you covered</p>
          </div>
          <div className="bblack">
            <p>Most popular tours</p>
          </div>
        </div>
        <Box className="contain Box1">
          {data1.map((item) => (
            <div key={item.id} className="item">
              <Box
                sx={{
                  padding: "25px",
                }}
              >
                <div className="badge ">★</div>
                <h3 className="plan-level">{item.id}</h3>
                <h1 className="price">${item.price}</h1>
                <p className="titleee">{item.title}</p>
                <ul className="features-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </Box>

              <button className="buy-now">BUY NOW</button>
            </div>
          ))}
        </Box>
        <Box className="contain Box2">
          {data2.map((item) => (
            <div key={item.id} className="item">
              <Box
                sx={{
                  padding: "25px",
                }}
              >
                <div className="badge ">★</div>
                <h3 className="plan-level">{item.id}</h3>
                <h1 className="price">${item.price}</h1>
                <p className="titleee">{item.title}</p>
                <ul className="features-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </Box>

              <button className="buy-now">BUY NOW</button>
            </div>
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
          <div className="banner-text">
            Choose one of the best destinations we have prepared for you!
          </div>
          <button className="book-now-button">BOOK NOW!</button>
        </Box>
      </Container>
    </div>
  );
}

export default pricing;
