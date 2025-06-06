import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const ContactText = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="mt-0 bg-gray-100  rounded-lg shadow-lg flex flex-col gap-6 justify-center  p-1 lg:w-[35%] w-full">
      <div className="text-gray-800" data-aos="fade-right">
        <h2 className="text-xl font-bold mb-4">Hey Aurevik Users,</h2>
        <p className="leading-relaxed">
          We are always looking forward to hearing from you. Please feel free to
          reach out to us for any queries, suggestions, or feedback. <br />
          We would love to hear from you.
        </p>

        <div className="mt-4">
          <p className="font-semibold">Contact us:</p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@Aurevik.in"
              className="ml-1 font text-gray-800 underline"
            >
              {" "}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:" className="ml-1 font text-gray-800 underline">
              {" "}
            </a>
          </p>

          <p>
            Chat With Us:{" "}
            <a href="" className="ml-1 font text-gray-800 underline">
              {" "}
            </a>
          </p>

          <p>Address: HitechCity, Hyderabad</p>
        </div>

        <p className="mt-4 leading-relaxed">
          We welcome your input to improve your Aurevik experience. <br />
          Thank you for choosing Connect!
        </p>
        <p className="mt-2">
          Best regards,
          <br />
          The Aurevik Team
        </p>
      </div>
    </section>
  );
};
