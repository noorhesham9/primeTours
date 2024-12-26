/* eslint-disable react/prop-types */
import { Box, Typography, Container } from "@mui/material";
import "./program.css";
// import process
function Program2({ lang }) {
  const arabicData = [
    {
      day: "اليوم الأول",
      description:
        "الوصول إلى تبليسي. استقبال في المطار والانتقال إلى الفندق. تسجيل الوصول في الفندق والمبيت في تبليسي.",
    },
    {
      day: "اليوم الثاني",
      description:
        "جولة في تبليسي الإفطار في الفندق. جولة تشمل هضبة ميتيخي، جسر السلام، قلعة ناريكالا، منطقة الحمامات، وشلال ليغفتاخيفي. زيارة حديقة متاتسميندا وبحيرة ليسي. العودة إلى الفندق والمبيت في تبليسي.",
    },
    {
      day: "اليوم الثالث",
      description:
        "تبليسي - باكورياني. الإفطار في الفندق. مغادرة تبليسي باتجاه باكورياني. الوصول إلى الفندق والمبيت في باكورياني.",
    },
    {
      day: "اليوم الرابع",
      description:
        "باكورياني - بورجومي - باكورياني. الإفطار في الفندق. زيارة منتزه بورجومي، والينابيع الساخنة، وركوب التلفريك (اختياري). العودة إلى الفندق والمبيت في باكورياني.",
    },
    {
      day: "اليوم الخامس",
      description:
        "باكورياني - مارتفيلي كانيون - باتومي. الإفطار في الفندق. التوجه إلى باتومي مع التوقف في وادي مارتفيلي. تسجيل الوصول في الفندق والمبيت في باتومي.",
    },
    {
      day: "اليوم السادس",
      description:
        "جولة في باتومي. الإفطار في الفندق. زيارة ساحة أوروبا، نصب ميديا، الساعة الفلكية، تمثال علي ونينو، وبرج الأبجدية. العودة إلى الفندق والمبيت في باتومي.",
    },
    {
      day: "اليوم السابع",
      description:
        "شلال ميرفيتي - شلال ماخونتسيتي - دولفيناريوم باتومي. الإفطار في الفندق. جولة تشمل شلال ميرفيتي وشلال ماخونتسيتي. زيارة دولفيناريوم باتومي وجولة حول البحيرة. العودة إلى الفندق والمبيت في باتومي.",
    },
  ];

  const englishData = [
    {
      day: "Day 1",
      description:
        "Arrival in Tbilisi. Airport reception and transfer to the hotel. Check-in at the hotel and overnight in Tbilisi.",
    },
    {
      day: "Day 2",
      description:
        "Tour in Tbilisi. Breakfast at the hotel. Tour includes Metekhi Plateau, Peace Bridge, Narikala Fortress, Bath District, and Leghvtakhevi Waterfall. Visit Mtatsminda Park and Lisi Lake. Return to the hotel and overnight in Tbilisi.",
    },
    {
      day: "Day 3",
      description:
        "Tbilisi - Bakuriani. Breakfast at the hotel. Departure from Tbilisi towards Bakuriani. Arrival at the hotel and overnight in Bakuriani.",
    },
    {
      day: "Day 4",
      description:
        "Bakuriani - Borjomi - Bakuriani. Breakfast at the hotel. Visit Borjomi Park, hot springs, and optional cable car ride. Return to the hotel and overnight in Bakuriani.",
    },
    {
      day: "Day 5",
      description:
        "Bakuriani - Martvili Canyon - Batumi. Breakfast at the hotel. Head to Batumi with a stop at Martvili Canyon. Check-in at the hotel and overnight in Batumi.",
    },
    {
      day: "Day 6",
      description:
        "Tour in Batumi. Breakfast at the hotel. Visit Europe Square, Medea Monument, Astronomical Clock, Ali and Nino Statue, and Alphabet Tower. Return to the hotel and overnight in Batumi.",
    },
    {
      day: "Day 7",
      description:
        "Merviti Waterfall - Makhuntseti Waterfall - Batumi Dolphinarium. Breakfast at the hotel. Tour includes Merviti Waterfall and Makhuntseti Waterfall. Visit Batumi Dolphinarium and tour around the lake. Return to the hotel and overnight in Batumi.",
    },
  ];

  return (
    <Box
      className="section programmm"
      style={{
        objectFit: "cover",
        backgroundImage: `url(/images/program1.jpg)`,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundSize: "cover",
        color: "#fff",
        position: "relative",
        paddingTop: "100px",
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 100,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          برنامج 8 ايام
        </Typography>
        <div
          className="cccccc"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            width: "100%",
            flexWrap: "wrap",
            "@media (max-width:900px)": {
              justifyContent: "cewnter",
            },
          }}
        >
          <Box
            className="tteeexxxttt"
            sx={{
              maxWidth: "450px",
              textAlign: lang === "en" ? "left" : "right",
            }}
          >
            <div style={{ lineHeight: 1.8 }}>
              {lang === "en" ? (
                <>
                  {englishData.map((e, i) => {
                    return (
                      <div
                        key={i}
                        style={{
                          marginBottom: 15,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            lineHeight: 1.5,
                          }}
                        >
                          {e.day}:
                        </span>
                        <br />
                        {e.description}
                        <br />
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  {arabicData.map((e, i) => {
                    return (
                      <div
                        key={i}
                        style={{
                          marginBottom: 15,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            lineHeight: 1.5,
                          }}
                        >
                          :{e.day}
                        </span>
                        <br />
                        {e.description}
                        <br />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </Box>
          {/* Image Section */}
          <Box
            className="viideeoCOnt"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <video
              className="video"
              style={{
                width: "auto",
                height: "500px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              autoPlay
              loop
              muted
            >
              <source src={"/videos/7 days.mp4"} type="video/mp4" />
              {/* <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/ogg"
              /> */}
              Your browser does not support the video tag.
            </video>
          </Box>
        </div>
      </Container>
    </Box>
  );
}

export default Program2;
