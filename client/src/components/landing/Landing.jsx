import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./landing.css";
import { Parallax, Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

function Landing({ lang, t }) {
  let data = [];
  if (lang === "en") {
    data = [
      {
        id: 1,
        title: "Our tours are tailored to meet your needs ",
        image: "/images/landing1.jpg",
      },
      {
        id: 2,

        title: "Welcome to Georgia, the land of beauty ",
        image: "/images/landing2.jpg",
      },
      {
        id: 3,
        title: "We provide the finest travel experiences",
        image: "/images/landing3.jpg",
      },
    ];
  } else if (lang === "ar") {
    data = [
      {
        id: 1,
        title: "مرحبًا بكم في جورجيا، أرض الجمال",
        image: "/images/landing1.jpg",
      },
      {
        id: 2,

        title: "نوفر لكم أفضل التجارب السياحية ",
        image: "/images/landing2.jpg",
      },
      {
        id: 3,
        title: "رحلاتنا معدّة خصيصًا لتلبية احتياجاتكم واستمتاعكم ",
        image: "/images/landing3.jpg",
      },
    ];
  }

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Box
      style={{
        height: "100vh",
      }}
    >
      {" "}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-30%"
        ></div>

        {data.map((d, i) => {
          return (
            <div key={i}>
              <Container>
                <SwiperSlide
                  key={i}
                  style={{
                    backgroundImage: `url(${d.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="title" data-swiper-parallax="-300">
                    <p
                      className="Number"
                      style={{
                        fontFamily: "Playfair Display SC serif",
                        fontWeight: "400",
                        color: "rgb(255, 255, 255)",
                        lineHeight: "1em",
                        padding: "0px 5px",
                      }}
                    >
                      {" "}
                      0{i + 1}
                    </p>
                    <p
                      className="slash"
                      style={{
                        clor: "rgb(255, 255, 255)",
                        padding: " 0px 5px 2px",
                      }}
                    >
                      /
                    </p>
                    <p
                      className="secNumber"
                      style={{
                        fontFamily: "Lato",
                        fontweight: "300",
                        fontsize: "17.04px",
                        lineheight: "1.4",
                        color: "rgb(255, 255, 255)",
                        padding: "0px 5px",
                      }}
                    >
                      03
                    </p>
                  </div>
                  <div className="content" data-swiper-parallax="-200">
                    <div className="subtitle" data-swiper-parallax="-200">
                      {d.title}
                    </div>
                    <div className="buttonwrapper">
                      <a href="#pricing" className="bookNow">
                        {t("buttonLanding")}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Container>
            </div>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Box>
  );
}

export default Landing;
