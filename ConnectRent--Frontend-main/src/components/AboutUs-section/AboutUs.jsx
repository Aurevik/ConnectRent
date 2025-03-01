import { useState,useEffect,useRef } from "react";
import rentBoardImg from "../.././assets/Images/rent-board.png";
import "./AboutUs-section.css";
import Lottie from "lottie-react";
import rent from "./rent.json";
import about1 from "../../assets/Images/about-1.svg"
import about2 from "../../assets/Images/about-2.jpg"
import about3 from "../../assets/Images/about-3.jpg"
import about4 from "../../assets/Images/about-4.jpg"
import about5 from "../../assets/Images/about-5.jpg"

import { AboutCard, AboutCard2 } from './AboutCard';


const AboutUs = () => {
  

  

  return (
    <div className="aboutUs-section">
      <div id="AboutUs" ></div>

      <div className="flex flex-col md:flex-row items-start w-full">

        {/* About Us Content */}
        <div className="md:w-full flex flex-col">
          <h2 className=" text-2xl md:text-5xl font-bold my-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent" >
            More About Us
          </h2>

          <div className='flex flex-col'>
            <AboutCard
              image={about1}
              heading={"Collect rent online with our mobile app"}
              desc={"Collect rent online effortlessly with no hidden fees. Offer flexible payment options like cash, credit, debit. Enable auto-pay, accept or block partial payments, and access unlimited payment accounts and reports."} />
            <AboutCard2
              image={about2}
              heading={"Easily manage maintenance with our rental management software"}
              desc={"Effortlessly manage rental maintenance with hands-off coordination. We provide services like plumbing, carpentry, painting, and more. Tenants submit requests through the ConnectRent app, while you track, prioritize, and update statuses in real time for seamless collaboration."} />
            <AboutCard
              image={about3}
              heading={"Sign & store tenant lease agreements"}
              desc={"Using ConnectRent’s free tenant lease agreement signing tool, your documents can be sent and signed with legal documentation of signatures. Safely and securely send, sign, and store leases. If you upload leases from another source, your documents are ready to download or print—whenever or wherever you may be."} />
            <AboutCard2
              image={about4}
              heading={"Find and identify quality tenants with a complete tenant screening report"}
              desc={"Identify high-quality tenants with our mobile property management software application, certified tenant screening, and customized recommendations. Prescreen prospective tenants before sifting through applications or scheduling viewings​."} />
            <AboutCard
              image={about5}
              heading={"Manage communication & access 24/7 customer support"}
              desc={"Our rental property management software makes it easy for everyoneーlandlords, tenants, teammates, and maintenance personnelーto stay on the same page. Live chat, phone, and email with a real human for support 24 hours a day, 7 days a week."} />
          </div>


        </div>
      </div>
    </div>
  );
};



export default AboutUs;
