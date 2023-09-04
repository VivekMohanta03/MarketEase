import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import img from "../../../Assests/images/bg/herobg.png";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[79vh] 900px:min-h-[80vh] w-full overflow-hidden bg-cover bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundPosition: "40%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(60, 0, 0, 0.5),rgba(0, 0, 0, 0.7)),url(${img})`,
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-white font-[600] capitalize`}
        >
          One stop Destination for <br /> All your Shopping Needs
        </h1>
        <p className="pt-5 text-[20px] font-[Poppins] font-[400] text-white">
          Introducing "MarketEase": An all-in-one web platform designed to
          seamlessly transition brick and mortar businesses into the online
          realm. With a user-friendly interface, businesses can effortlessly
          create and manage their digital storefronts.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
