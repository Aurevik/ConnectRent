import "../Header-section/Header-section.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carImg1 from "../../assets/Images/red-house.png";
import carImg2 from "../../assets/Images/carousel2.png";
import carImg3 from "../../assets/Images/carousel3.png";
import clickSound from "../../assets/mixkit-mouse-click-close-1113.wav";

const Header = () => {
  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <>
      <div className="header-section mb-[80px]">
        <Navbar />

        <div id="home"></div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          stopOnHover={false}
          swipeable={false}
          animationHandler="fade"
        >
          <div>
            <img src={carImg1} className="h-screen object-cover" />
          </div>
          <div>
            <img src={carImg2} className="h-screen object-cover" />
          </div>
          <div>
            <img src={carImg3} className="h-screen object-cover" />
          </div>
        </Carousel>
        <div className="header-text top-[15%] sm:top-[23%] absolute">
          <h1>
            Welcome to <br />
            <span>ConnectRent</span>
          </h1>
          <p className="header-desc">
            All-in-One Property Management Software For Landlords. Easy to use
            mobile landlord app with everything you need to manage properties
          </p>
          <button
            className="btn getBtn"
            onClick={(e) => {
              e.preventDefault(); // Prevent any default behavior
              playSound(); // Play sound function
              document
                .getElementById("testimonial-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
