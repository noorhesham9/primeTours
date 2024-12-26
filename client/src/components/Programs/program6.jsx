import { Box, Typography, Container } from "@mui/material";
import "./program.css";

function program6({ lang }) {
  const arabicData = [
    {
      day: "اليوم الأول",
      description:
        "الوصول إلى تبليسي وجولة في المدينة. استقبال في المطار والانتقال إلى الفندق. تسجيل الوصول في الفندق. جولة تشمل هضبة ميتيخي، جسر السلام، قلعة ناريكالا، منطقة الحمامات، وشلال ليغفتاخيفي. زيارة حديقة متاتسميندا وبحيرة ليسي. العودة إلى الفندق والمبيت في تبليسي.",
    },
    {
      day: "اليوم الثاني",
      description:
        "جبال القوقاز. الإفطار في الفندق. رحلة عبر الطريق العسكري الجورجي تشمل أنانوري، باسانوري، وجوداوري. العودة إلى الفندق والمبيت في تبليسي.",
    },
    {
      day: "اليوم الثالث",
      description:
        "جولة جسر داشباشي. الإفطار في الفندق. زيارة جسر داشباشي. العودة إلى الفندق والمبيت في تبليسي.",
    },
    {
      day: "اليوم الرابع",
      description:
        "تبليسي - باكورياني. الإفطار في الفندق. مغادرة تبليسي باتجاه باكورياني. زيارة حديقة بورجومي النباتية. الوصول إلى الفندق والمبيت في باكورياني.",
    },
    {
      day: "اليوم الخامس",
      description:
        "جولة في بورجومي. الإفطار في الفندق. جولة تشمل منتزه بورجومي، الينابيع الساخنة، ومنتجع باكورياني للتزلج. العودة إلى الفندق والمبيت في باكورياني.",
    },
    {
      day: "اليوم السادس",
      description:
        "باكورياني - باتومي. الإفطار في الفندق. مغادرة باكورياني باتجاه باتومي. زيارة حديقة باتومي النباتية. الوصول إلى الفندق والمبيت في باتومي.",
    },
    {
      day: "اليوم السابع",
      description:
        "جولة في باتومي. الإفطار في الفندق. جولة تشمل ساحة أوروبا، نصب ميديا، الساعة الفلكية، تمثال علي ونينو، وبرج الأبجدية. العودة إلى الفندق والمبيت في باتومي.",
    },
    {
      day: "اليوم الثامن",
      description:
        "جولة في ماخونتسيتي. الإفطار في الفندق. جولة تشمل شلال ماخونتسيتي ودولفيناريوم باتومي. العودة إلى الفندق والمبيت في باتومي.",
    },
    {
      day: "اليوم التاسع",
      description:
        "يوم حر للتسوق. الإفطار في الفندق. يوم حر للتسوق في باتومي. العودة إلى الفندق والمبيت في باتومي.",
    },
  ];
  const englishData = [
    {
      day: "Day 1",
      description:
        "Arrival in Tbilisi and city tour. Airport reception and transfer to the hotel. Check-in at the hotel. Tour includes Metekhi Plateau, Peace Bridge, Narikala Fortress, Bath District, and Leghvtakhevi Waterfall. Visit Mtatsminda Park and Lisi Lake. Return to the hotel and overnight in Tbilisi.",
    },
    {
      day: "Day 2",
      description:
        "Caucasus Mountains. Breakfast at the hotel. Trip through the Georgian Military Road includes Ananuri, Pasanauri, and Gudauri. Return to the hotel and overnight in Tbilisi.",
    },
    {
      day: "Day 3",
      description:
        "Dashbashi Bridge Tour. Breakfast at the hotel. Visit Dashbashi Bridge. Return to the hotel and overnight in Tbilisi.",
    },
    {
      day: "Day 4",
      description:
        "Tbilisi - Bakuriani. Breakfast at the hotel. Departure from Tbilisi towards Bakuriani. Visit Borjomi Botanical Garden. Arrival at the hotel and overnight in Bakuriani.",
    },
    {
      day: "Day 5",
      description:
        "Borjomi Tour. Breakfast at the hotel. Tour includes Borjomi Park, hot springs, and Bakuriani Ski Resort. Return to the hotel and overnight in Bakuriani.",
    },
    {
      day: "Day 6",
      description:
        "Bakuriani - Batumi. Breakfast at the hotel. Departure from Bakuriani towards Batumi. Visit Batumi Botanical Garden. Arrival at the hotel and overnight in Batumi.",
    },
    {
      day: "Day 7",
      description:
        "Tour in Batumi. Breakfast at the hotel. Tour includes Europe Square, Medea Monument, Astronomical Clock, Ali and Nino Statue, and Alphabet Tower. Return to the hotel and overnight in Batumi.",
    },
    {
      day: "Day 8",
      description:
        "Makhunseti Tour. Breakfast at the hotel. Tour includes Makhunseti Waterfall and Batumi Dolphinarium. Return to the hotel and overnight in Batumi.",
    },
    {
      day: "Day 9",
      description:
        "Free Day for Shopping. Breakfast at the hotel. Free day for shopping in Batumi. Return to the hotel and overnight in Batumi.",
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
          برنامج 6 ايام
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
              <source src={"/videos/8 days.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </div>
      </Container>
    </Box>
  );
}

export default program6;
