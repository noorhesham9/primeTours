import "./Features.css";

const Features = () => {
  return (
    <div
      className="sky-container"
      style={{
        backgroundImage: `url(/images/skyImage.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      <div className="contentt">
        <div className="sectionb" id="section-1">
          <h1 className="section-number">01</h1>
          <p className="section-text">SIM CARD FOR INTERNET</p>
        </div>

        <div className="sectionb" id="section-2">
          <h1 className="section-number">02</h1>
          <p className="section-text">
            ARABIC-SPEAKING DRIVER OR GUIDE, AS PER YOUR CHOICE FREE OF CHARGE
          </p>
        </div>

        <div className="sectionb" id="section-3">
          <h1 className="section-number">03</h1>
          <p className="section-text">10% DISCOUNT ON FLIGHT TICKETS</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
