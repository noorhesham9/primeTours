import { Box, Container } from "@mui/material";
import "./Hotels.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const Data = [
  {
    id: 1,
    img: "images/Hotal1.jpg",
    name: "Hiwaliing Hotels",
    desc1:
      "Monograph Freedom Square Hotel is located in Tbilisi City and offers a fitness centre, terrace, restaurant and bar.",
    desc2:
      "All units at the hotel come with a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a shower, free toiletries and a hairdryer.",
    desc3: "Guests at the family stay can enjoy a continental breakfast.",
    desc4:
      "Popular points of interest near Monograph Freedom Square Hotel include Freedom Square, Rustaveli Theatre and Tbilisi National Opera and Ballet Theatre, and the nearest airport is Tbilisi International Airport, 15 km from the hotel.",
    desc5: "",
  },
  {
    id: 2,
    img: "images/Hotal2.jpg",
    name: "Monograph Freedom Square",
    desc1:
      "The award-winning Tbilisi Hotels & Prefirence Hualing is a 7-minute drive from Varketili Metro Station, 15 minutes from Shota Rustaveli Tbilisi International Airport and 11 km from Tbilisi Central Train Station, and has been selected as the 2016 Luxury City Hotel of the Year in Georgia.",
    desc2:
      "All air-conditioned rooms offer a 48-inch flat-screen TV with international channels, the private bathroom includes free toiletries, slippers, bathrobes and a hairdryer, and there is a bathtub and a separate shower cabin.",
  },
  {
    id: 3,
    img: "images/Hotel3.jpg",
    name: "Tbilisi Chambers",
    desc1:
      " Trademark Collection by Wyndham features a restaurant, and a bar. Free WiFi is available throughout the property.",
    desc2:
      "Each room includes a flat-screen TV with satellite channels, an electric kettle, a fridge and a private bathroom fitted with a shower and a hairdryer. Some units feature a seating area and a bathroom with bathrobes, slippers and free toiletries.",
    desc3: "Breakfast is provided.",
    desc4:
      "A 24-hour front desk service is offered. Airport shuttle can be arranged upon request for an additional fee.",
    desc5:
      "Tbilisi Chambers, Trademark Collection by Wyndham is 3.2 km from Rustaveli Theatre, and 3.5 km from Freedom Square.",
  },
];
function Hotels({ t, lang }) {
  const getAnimationVariants = (delay) => ({
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    },
  });

  let Data = [];
  if (lang === "en") {
    Data = [
      {
        id: 1,
        img: "images/Hotal1.jpg",
        name: "Hiwaliing Hotels",
        desc1:
          "Monograph Freedom Square Hotel is located in Tbilisi City and offers a fitness centre, terrace, restaurant and bar.",
        desc2:
          "All units at the hotel come with a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a shower, free toiletries and a hairdryer.",
        desc3: "Guests at the family stay can enjoy a continental breakfast.",
        desc4:
          "Popular points of interest near Monograph Freedom Square Hotel include Freedom Square, Rustaveli Theatre and Tbilisi National Opera and Ballet Theatre, and the nearest airport is Tbilisi International Airport, 15 km from the hotel.",
        desc5: "",
      },
      {
        id: 2,
        img: "images/Hotal2.jpg",
        name: "Monograph Freedom Square",
        desc1:
          "The award-winning Tbilisi Hotels & Prefirence Hualing is a 7-minute drive from Varketili Metro Station, 15 minutes from Shota Rustaveli Tbilisi International Airport and 11 km from Tbilisi Central Train Station, and has been selected as the 2016 Luxury City Hotel of the Year in Georgia.",
        desc2:
          "All air-conditioned rooms offer a 48-inch flat-screen TV with international channels, the private bathroom includes free toiletries, slippers, bathrobes and a hairdryer, and there is a bathtub and a separate shower cabin.",
      },
      {
        id: 3,
        img: "images/Hotel3.jpg",
        name: "Tbilisi Chambers",
        desc1:
          " Trademark Collection by Wyndham features a restaurant, and a bar. Free WiFi is available throughout the property.",
        desc2:
          "Each room includes a flat-screen TV with satellite channels, an electric kettle, a fridge and a private bathroom fitted with a shower and a hairdryer. Some units feature a seating area and a bathroom with bathrobes, slippers and free toiletries.",
        desc3: "Breakfast is provided.",
        desc4:
          "A 24-hour front desk service is offered. Airport shuttle can be arranged upon request for an additional fee.",
        desc5:
          "Tbilisi Chambers, Trademark Collection by Wyndham is 3.2 km from Rustaveli Theatre, and 3.5 km from Freedom Square.",
      },
    ];
  } else if (lang === "ar") {
    Data = [
      {
        id: 1,
        img: "images/Hotal1.jpg",
        name: "فنادق هيوالينج",
        desc1:
          "يقع فندق Monograph Freedom Square في مدينة تبليسي، ويضم مركزًا للياقة البدنية وتراسًا ومطعمًا وبارًا.",
        desc2:
          "تحتوي جميع الوحدات في الفندق على منطقة جلوس وتلفزيون بشاشة مسطحة مع قنوات فضائية وصندوق ودائع آمن وحمام خاص مع دش ولوازم استحمام مجانية ومجفف شعر.",
        desc3: "يمكن للضيوف في مكان الإقامة الاستمتاع بوجبة إفطار كونتيننتال.",
        desc4:
          "تشمل نقاط الجذب الشهيرة القريبة من فندق Monograph Freedom Square Hotel ساحة الحرية ومسرح رستافلي وأوبرا تبليسي الوطنية ومسرح الباليه، ويعتبر مطار تبليسي الدولي المطار الأقرب للفندق حيث يقع على بعد 15 كم منه.",
        desc5: "",
      },
      {
        id: 2,
        img: "images/Hotal2.jpg",
        name: "مونوجراف ميدان الحريه",
        desc1:
          "يقع Tbilisi Hotels & Prefirence Hualing الحائز على جائزة على بعد 7 دقائق بالسيارة من محطة مترو فاركيتيلي و15 دقيقة من مطار شوتا روستافيلي تبليسي الدولي و11 كم من محطة قطار تبليسي المركزية، وقد تم اختياره كأفضل فندق فاخر في المدينة لعام 2016. في جورجيا.",
        desc2:
          "تحتوي جميع الغرف المكيفة على تلفزيون بشاشة مسطحة 48 بوصة مع قنوات عالمية، ويشتمل الحمام الخاص على لوازم استحمام مجانية ونعال وأردية حمام ومجفف شعر، ويتوفر حوض استحمام وكابينة دش منفصلة.",
      },
      {
        id: 3,
        img: "images/Hotel3.jpg",
        name: "فنادق تبليسى",
        desc1:
          "يضم Trademark Collection by Wyndham مطعمًا وبارًا. وتتوفر خدمة الواي فاي المجانية في جميع أنحاء مكان الإقامة",
        desc2:
          "تحتوي كل غرفة على تلفزيون بشاشة مسطحة مع قنوات فضائية وغلاية كهربائية وثلاجة وحمام خاص مزود بدش ومجفف شعر. وتتميز بعض الوحدات بمنطقة جلوس وحمام مع أردية حمام ونعال ولوازم استحمام مجانية.",
        desc3: "يتم تقديم وجبة الإفطار.",
        desc4:
          "تتوفر خدمة مكتب الاستقبال على مدار 24 ساعة. ويمكن ترتيب خدمة نقل المطار عند الطلب مقابل رسوم إضافية.",
        desc5:
          "يقع Tbilisi Chambers, Trademark Collection by Wyndham على بعد 3.2 كم من مسرح رستافلي وعلى بعد 3.5 كم من ساحة الحرية.",
      },
    ];
  }

  return (
    <div id="hotels" className="section">
      <Container>
        <div className="headinggg">
          <div className="h2">
            {lang === "en" ? "Recommended Hotels" : "الفنادق الموصى بها"}
          </div>
          <div className="p">
            {lang === "en"
              ? "Wondering where to stay when you travel the world? Here are some of the best hotels we recommend."
              : "هل تتساءل أين تقيم عندما تسافر حول العالم؟ فيما يلي بعض من أفضل الفنادق التي نوصي بها."}
          </div>
        </div>
        <Box className="contennnttt">
          {Data.map((d, i) => (
            <motion.div
              variants={getAnimationVariants(i * 0.5)} // Add a delay based on the section id
              initial="initial"
              whileInView="animate"
              exit="exit"
              className="cardhotel"
              key={d.id}
              viewport={{ once: true }}
            >
              <div className="image-container">
                <img loading="lazy" src={d.img} alt={d.name} />
              </div>
              <div className="contenthotel">
                <h2>{d.name}</h2>
                <p>{d.desc1}</p>
                <p>{d.desc2}</p>
                <p>{d.desc3}</p>
                <p>{d.desc4}</p>
                <p>{d.desc5}</p>
              </div>
            </motion.div>
          ))}

          {/** Add More Cards Here */}
        </Box>
      </Container>
    </div>
  );
}

export default Hotels;
