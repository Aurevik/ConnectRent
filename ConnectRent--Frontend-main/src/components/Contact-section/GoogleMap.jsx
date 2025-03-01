import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GoogleMap = () => {
  useEffect(() => {

    AOS.init({duration:1000});

  }, []);
    return (
      <div className="aspect-square md:p-20 p-5" data-aos = "fade-in">
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.897116874684!2d79.52826367494934!3d17.983522983008918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334fbb37aee6c3%3A0xf1b2c37fcb8fefce!2sNIT%20Warangal!5e0!3m2!1sen!2sin!4v1740812844502!5m2!1sen!2sin"
    frameborder="0"
    allowfullscreen=""
    width="100%"
    height="100%"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    class="rounded-lg shadow-gray drop-shadow-lg hover:drop-shadow-2xl">
</iframe>
</div>
    );
  };
  export default GoogleMap;

