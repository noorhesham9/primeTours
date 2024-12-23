import { Box, Container } from "@mui/material";
import "./Hotels.css";
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
function Hotels() {
  return (
    <div className="section">
      <Container>
        <div className="headinggg">
          <div className="h2">Recommended Hotels</div>
          <div className="p">
            Wondering where to stay when you travel the world? Here are some of
            the best hotels we recommend.
          </div>
        </div>
        <Box className="contennnttt">
          {Data.map((d) => (
            <div className="cardhotel" key={d.id}>
              <div className="image-container">
                <img src={d.img} alt={d.name} />
              </div>
              <div className="contenthotel">
                <h2>{d.name}</h2>
                <p>{d.desc1}</p>
                <p>{d.desc2}</p>
                <p>{d.desc3}</p>
                <p>{d.desc4}</p>
                <p>{d.desc5}</p>
              </div>
            </div>
          ))}

          {/** Add More Cards Here */}
        </Box>
      </Container>
    </div>
  );
}

export default Hotels;
