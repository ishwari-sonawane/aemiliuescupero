import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { SlTrophy } from "react-icons/sl";
import { GoRocket } from "react-icons/go";
import A2 from "./assets/A2.webp"
import A3 from "./assets/A3.webp"
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import A4 from "./assets/A4.webp";
import A5 from "./assets/A5.webp";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import A6 from "./assets/A6.webp"
import A7 from "./assets/A7.webp"
import { IoMdStar } from "react-icons/io";
import { SiComma } from "react-icons/si";
import A8 from "./assets/A8.webp"
import { IoDiamondOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaBalanceScale } from "react-icons/fa";
import "./App.css"
import A10 from"./assets/A10.png"
import A11 from"./assets/A11.png"
import Slider from 'react-slick';
import A13 from './assets/A13.webp';
import A14 from './assets/A14.webp';
import A12 from './assets/A12.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import logo from "./assets/logo.webp"
import {Link} from "react-router-dom"
import footer1 from "./assets/footer1.webp"
import footer2 from "./assets/footer2.webp"
import footer3 from "./assets/footer3.webp"
import { IoLogoMedium } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";


const About = () =>
     {
             

   const [hour, setHour] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setHour(count);
      if (count >= 24) {
        clearInterval(interval);
      }
    }, 100); // Speed of count-up
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    // speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    arrows: false,
    appendDots: dots => (
      <div className="mt-10 sm:mt-12">
        <ul className="flex justify-center space-x-2 sm:space-x-7 ">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-4 h-1 sm:w-6 bg-gray-300 sm:hover:bg-[#0a1229]  sm:mt-8  rounded"></div>
    )
  };

   
  return (


    <div>

           <div className="hidden sm:flex items-center pl-52 sm:h-[7vh] w-full bg-[#1a243f]">
                  <p className="text-white text-[14px]">WELCOME TO AEMILIUS CUPERO</p>
                  <div className="hidden  sm:flex items-center gap-8 text-[20px] text-white ml-270 p-8">
                       <FaMedium  className="group cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"/>
                       <FaLinkedin className="group cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"/>
                       <FaYoutube className="group cursor-pointer transition-all duration-300 hover:bg-white hover:text-black" />
                       <FaPinterest className="group cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"/>
                  </div>
                  </div>
                     <div className="h-[13vh] w-full flex items-star ml-0 mt-0 sm:h-[11vh] sm:ml-0 sm:mt-0">
        <img src={logo} alt=""  className="h-[43%] ml-4.5 mt-7.5 sm:h-[37%] sm:ml-50 sm:mt-7 "/>
         <div className="hidden sm:flex items-center justify-end gap-7 ml-165 font-serif tracking-[.10em]">
        <Link to="/home" className="sm:hover:cursor-pointer sm:hover:text-[#AD9779] sm:hover:border-b-2 sm:hover:border-[#AD9779]">HOME</Link>
        <Link to="/aboutus"  className="sm:hover:cursor-pointer sm:hover:text-[#AD9779] sm:hover:border-b-2 sm:hover:border-[#AD9779]">ABOUT US</Link>
        <Link to="/services"  className="sm:hover:cursor-pointer sm:hover:text-[#AD9779] sm:hover:border-b-2 sm:hover:border-[#AD9779]">SERVICES</Link>
         <Link to="/duediligence"  className="sm:hover:cursor-pointer sm:hover:text-[#AD9779] sm:hover:border-b-2 sm:hover:border-[#AD9779]">DUE DILIGENCE</Link>
        <Link to="/contact"  className="sm:hover:cursor-pointer sm:hover:text-[#AD9779] sm:hover:border-b-2 sm:hover:border-[#AD9779]">CONTACT US</Link>
      </div>
        <div className="lg:flex items-center  sm:h-full sm:bg-[#AD9779] w-[5.3vw] ml-15 ">
            <CgMenuLeftAlt className="font-thin ml-20 mt-8 text-black sm:text-white text-[45px] sm:ml-7 sm:mt-0"/>
        </div>
      </div>



     {/* page-1 done with  responsive */}
     
    <div className="w-full h-auto bg-[url('./assets/A1.webp')] bg-cover bg-center flex flex-col md:flex-row items-center md:items-start px-6 md:px-24 py-20 relative">
      
  
      <div className="w-full md:w-2/3 text-center md:text-left text-white sm:h-58 sm:pt-12 sm:pl-33 z-10 ">
        <h1 className="text-4xl md:text-6xl font-serif font-light mb-4">About Us</h1>
        <p className="text-[5vw] tracking-[0.18vw] leading-relaxed sm:font-[2vw] sm:text-[0.8vw] sm:w-6xl uppercase ">
          "We are a trusted law firm committed to providing expert <br /> legal counsel and personalized
          solutions, ensuring the best <br /> outcomes for our clients in every case."
        </p>
      </div>

 
      <div className="w-full md:w-1/3 mt-10 md:mt-0 flex justify-center md:justify-end z-10 sm:mr-25 sm:pt-22">
        <nav className="bg-white/30 backdrop-blur-sm px-4 md:px-6 py-3 flex items-center space-x-3 md:space-x-6 ">
          <a href="#" className="text-white font-semibold flex items-center sm:hover:border-b-1  sm:hover:transition-all">
            Home
            <IoIosArrowRoundForward className="ml-2 text-sm md:text-lg" />
          </a>
          <a href="#" className="text-[#bb7742] font-medium">About Us</a>
        </nav>
      </div>

      <div className="absolute inset-0 bg-black/30"></div>
    </div>

    


    {/* page-2 done with responsive */}


    <div className="flex flex-col md:flex-row items-center md:items-start justify-center min-h-screen bg-white px-6 md:px-20 py-10 gap-8 sm:pt-30">
      
      {/* Image Section */}
      {/* <div className='sm:h-105 sm:w-105 sm:bg-[#B28B4A] /500 sm:absolute sm:top-167 sm:right-279 z-1 sm:rounded-full zoom-animate'>
 
      </div> */}

      <div className="sm:h-105 sm:w-105 sm:bg-gradient-to-t mask-b-from-white to-[#ccbd96] sm:absolute sm:top-167 sm:right-280 z-1 sm:rounded-full zoom-animate">
          </div>

      <div className="w-full md:w-1/2 flex  z-2 justify-center md:justify-center sm:pl-40 sm:pt-14 ">
        <img
          src={A2}
          alt="Statue"
          className="max-h-[80vh] object-contain" 

        />
      </div>

      {/* Text Content Section */}
      <div className="w-full  bg-[#1D2C4A] text-white p-6 md:p-12 shadow-lg sm:h-180 sm:w-152 sm:mr-52">
        <p className="text-sm tracking-widest text-[#B28B4A] mb-3 sm:tracking-[0.2vw] sm:text-[.6vw]">ABOUT AEMILIUS CUPERO</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug sm:font-light">
          Fighting for Your Rights, Delivering Results.
        </h2>
        <p className="text-base  leading-relaxed mb-4 sm:font-[.6vw]">
          At our firm, we truly understand what you’re going through because  we’ve been there ourselves. 
          That’s why we founded this practice — to support individuals like you who have faced similar struggles. 
          Our mission is simple: to provide unwavering support and guidance every step of the way, helping you 
          navigate your legal challenges with confidence.
        </p>
        <p className="text-base sm:font-[.6vw] leading-relaxed mb-4">
          We pride ourselves on being an authentic and reliable law firm with an impressive track record of success. 
          Our clients consistently receive exactly what they expect, and not one promise goes unfulfilled. 
          For years, we’ve been leading the industry, and our hard work has earned us a reputation as one of the most 
          trusted firms around. We’ve been recognized by top media outlets for our incredible success, 
          and our momentum only continues to grow stronger!
        </p>
        <p className="text-base md:text-[0.96vw] font-bold ">
          <span className="font-bold text-white sm:font-[1vw]">
            At our firm, we’re not just here to represent you — we’re here to fight for you with passion and dedication. 
            You’re in capable hands, and we’re ready to help you achieve the results you deserve.
          </span>
        </p>
      </div>
    </div>

    {/* page-3 done with responsive */}

    <div className="bg-[#222c44] bg-[url('./assets/A3.webp')] bg-cover w-full py-10 sm:h-270">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row px-6 md:px-20 gap-8">
        <div className="md:w-1/2">
          <p className="text-[3vw] tracking-[1vw] font-bold l md:text-[.6vw] text-[#AD9779] sm:tracking-[.3vw] pt-4 md:pt-20 sm:pl-73 uppercase">
            ____why choose us
          </p>
          <h1 className="text-white text-4xl  md:text-[2.3vw] font-medium pt-2 md:pt-2 sm:pl-73 leading-11">
            No More Worries, <br />You Can Trust Our Lawyers.
          </h1>
        </div>

        <div className="md:w-1/2">
          <p className="text-white text-[5vw] md:text-base leading-8 pt-6 md:pt-20 sm:mt-16 ">
          With our experienced legal team by your side, you can put your worries to <br /> rest. We are committed to providing trusted, 
          reliable legal support, ensuring <br /> that your financial litigation matters are handled with the utmost care and <br /> expertise.
           Trust our lawyers to protect your interests and guide you through <br /> complex legal challenges with confidence.
          </p>
        </div>
      </div>


      {/* Card Section */}
      <div className="text-white font-serif py-16 sm:mt-9">


      


    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10 ">
  
         {/* card-1 */}

          <div className="group bg-white/10 border border-[#767880] sm:h-89 text-center hover:bg-white hover:text-gray-700 sm:p-0 h-85 transition-all">
    
    {/* Flipping icon */}
         <div className="bg-[#b79f7f] p-4 mb-4 inline-block h-25 w-25 mx-auto  ">
            <IoDiamondOutline className="text-white text-7xl sm:h-17 sm:w-17 sm:text-1xl transition-transform duration-500 group-hover:rotate-y-180 [transform-style:preserve-3d] [perspective:1000px]" />
         </div>

         <h3 className="text-2xl pt-1 font-light mb-2 sm:text-xl group-hover:text-[#b79f7f] transition-all">
              Our Approach
          </h3>

           <p className="text-[4.6vw] font-light pt-1 leading-relaxed sm:text-[.9vw] sm:pt-3 group-hover:text-[#515257] transition-all">
             We deliver customized <br /> legal strategies with <br /> integrity, precision, and a <br /> client-focused approach for <br /> clients worldwide.
          </p>
        </div>


          {/* Card 2 */}
            <div className="group bg-white/10 border border-[#767880] sm:h-89 text-center hover:bg-white hover:text-gray-700 sm:p-0 h-85 transition-all">
    
    {/* Flipping icon */}
         <div className="bg-[#b79f7f] p-4 mb-4 inline-block h-25 w-25 mx-auto  ">
          
          <img  src={A10} className="filter brightness-0 invert transition-transform duration-500 group-hover:rotate-y-180
           [transform-style:preserve-3d] [perspective:1000px]"/>

         </div>

         <h3 className="text-2xl pt-1 font-light mb-2 sm:text-xl group-hover:text-[#b79f7f] transition-all">
              Core Values
          </h3>

           <p className="text-[4.6vw] font-light pt-1 leading-relaxed sm:text-[.9vw] sm:pt-3 group-hover:text-[#515257] transition-all">
             Guided by ethics,<br /> excellence, and empathy,<br /> we are committed to <br /> protecting our clients'<br /> rights and interests
          </p>
        </div> 

          {/* Card 3 */}
           <div className="group bg-white/10 border border-[#767880] sm:h-89 text-center hover:bg-white hover:text-gray-700 sm:p-0 h-85 transition-all">
    
          {/* Flipping icon */}
         <div className="bg-[#b79f7f] p-4 mb-4 inline-block h-25 w-25 mx-auto  ">
            <img  src={A11} className="filter brightness-0 invert transition-transform duration-500 group-hover:rotate-y-180
           [transform-style:preserve-3d] [perspective:1000px]"/>        
            </div>

         <h3 className="text-2xl pt-1 font-light mb-2 sm:text-xl group-hover:text-[#b79f7f] transition-all">
             Our Journey
          </h3>

           <p className="text-[4.6vw] font-light pt-1 leading-relaxed sm:text-[.9vw] sm:pt-3 group-hover:text-[#515257] transition-all">
             From our foundation to <br /> becoming a trusted legal <br /> partner, our journey <br /> reflects dedication to <br /> justice and client success..
          </p>
        </div>


          {/* Card 4 */}
         <div className="group bg-white/10 border border-[#767880] sm:h-89 text-center hover:bg-white hover:text-gray-700 sm:p-0 h-85 transition-all">
    
       {/* Flipping icon */}
         <div className="bg-[#b79f7f] p-4 mb-4 inline-block h-25 w-25 mx-auto  ">
            <IoIosContact className="text-white text-7xl sm:h-17 sm:w-17 sm:text-1xl transition-transform duration-500 group-hover:rotate-y-180 [transform-style:preserve-3d] [perspective:1000px]" />
         </div>

         <h3 className="text-2xl pt-1 font-light mb-2 sm:text-xl group-hover:text-[#b79f7f] transition-all">
           Our Solutions
          </h3>

           <p className="text-[4.6vw] font-light pt-1 leading-relaxed sm:text-[.9vw] sm:pt-3 group-hover:text-[#515257] transition-all">
            We provide comprehensive <br /> legal services spanning <br /> corporate law, litigation,<br /> compliance, and personal <br /> legal matters.
          </p>
        </div>

            
        </div>
      </div>


      {/* Mission and Vision */}
      <div className="bg-white py-10 shadow-md mt-6 sm:w-300 sm:ml-89 sm:mt-18">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300 ">
          {/* Mission */}
          <div className="flex-1 p-6 md:p-5 text-center">
            <GoRocket className="text-[#a38f7a] text-7xl mb-4 mx-auto sm:text-7xl sm:transition-transform sm:duration-500 sm:hover:-translate-y-2" />
            <h2 className="text-[#1a1a1a] text-2xl md:text-xl font-serif mb-4">Mission</h2>
            <p className="text-gray-600 font-semibold text-[4vw] md:text-base leading-6">
          Our mission is to provide exceptional financial litigation services <br /> to clients worldwide, delivering innovative,
           results-driven legal <br /> solutions with a commitment to integrity, expertise, and <br /> meticulous attention to detail. We aim to
            safeguard our clients' <br /> financial interests and achieve favorable outcomes through <br /> diligent representation and strategic litigation.


            </p>
          </div>

          {/* Vision */}
          <div className="flex-1 p-6 md:p-5 text-center">
            <SlTrophy className="text-[#a38f7a] text-7xl mb-4 mx-auto sm:text-7xl sm:transition-transform sm:duration-500 sm:hover:-translate-y-2" />
            <h2 className="text-[#1a1a1a] text-2xl md:text-xl font-serif mb-4 ">Vision</h2>
            <p className="text-gray-600 font-semibold text-[4vw] md:text-base leading-6 ">
             To be a globally recognized leader in financial litigation, known <br /> for our unwavering dedication to clients,
              excellence in legal <br /> practice, and our ability to navigate complex financial disputes  <br />with precision and success.
               We strive to empower clients with <br /> the legal tools to protect and grow their financial assets on a <br /> global scale.
            </p>
          </div>
        </div>
      </div>

    </div>
 



     {/* page-4 not needed to responsive it is already exit in home page */}
  
     <div className="bg-white text-gray-700 mt-65">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-10 lg:space-y-0">
          
       
          <div className="flex flex-col space-y-10 lg:w-1/3">
            
            {/* Navigation Box */}
            <div
              className="bg-white shadow-lg rounded-md p-6 sm:p-8 w-full mx-auto"
              style={{ boxShadow: "0 0 20px rgb(0 0 0 / 0.05)" }}
            >
              <nav className="flex flex-col space-y-4 text-sm font-semibold text-gray-900">
                {[
                  "Company Overview",
                  "Our Team",
                  "Global Access",
                  "Ethics & Confidentiality",
                ].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="flex items-center justify-between border-l-2 border-gray-300 pl-3 py-2 hover:border-gray-400"
                  >
                    <span className="text-sm sm:text-base hover:text-[#b79f7f]">
                      {label}
                    </span>
                    <IoIosArrowRoundForward className="text-gray-400 text-lg sm:text-xl hover:text-[#b79f7f]" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Blue Contact Box */}
            <div className="bg-[#121f3e] rounded-md p-6 sm:p-8 w-full mx-auto text-white">
              <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide">
                LET'S GET A
              </h2>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#a07c5a] mb-6 pt-1">
                FREE CONSULTATION
              </h3>
              <p className="text-sm sm:text-base mb-8 leading-relaxed">
                Please don’t hesitate to reach out to us. <br />
                We will respond within 1–2 business days. <br />
                Alternatively, feel free to call us now.
              </p>
              <div className="border-b border-[#a07c5a] w-20 mb-8 font-bold"></div>
              <ul className="space-y-6 text-sm font-semibold">
                <li className="flex items-center space-x-3">
                  <IoCall className="text-[#a07c5a] text-lg sm:text-xl" />
                  <span className="text-sm font-normal">
                    +1 (307) 223-2060
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdEmail className="text-[#a07c5a] text-lg sm:text-xl" />
                  <span className="text-sm font-normal">
                    support@aemilius-cupero.net
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaLocationDot className="text-[#a07c5a] text-lg sm:text-xl" />
                  <span className="text-sm font-normal">
                    1309 Coffeen Avenue STE 1200 <br />
                    Sheridan, Wyoming 82801 USA
                  </span>
                </li>
              </ul>
              <button
                className="w-full bg-[#B19B7A] text-white font-bold text-xs tracking-widest py-3 uppercase mt-12"
                type="button"
              >
                Contact Us Today!
              </button>
            </div>
          </div>

          
          <div className="pt-6 lg:pt-14 lg:mt-0 lg:flex-1">
            <h2 className="text-gray-900 font-semibold text-base sm:text-lg md:text-xl tracking-wide uppercase mb-6">
              Company Overview
            </h2>
            <p className="leading-relaxed text-sm sm:text-base max-w-3xl space-y-6">
              With decades of experience in the legal profession, we have evolved from individual
              practitioners to a well-established law firm, officially registered as an LLC to better
              serve our diverse, global client base. Specializing in financial litigation, our firm has
              built a robust reputation for handling complex cases with precision, particularly those
              involving financial recovery from online scams. We are experts in recovering funds lost due
              to fraudulent activities in areas such as binary options trading, forex scams, cryptocurrency
              fraud, and deceptive asset management schemes.
              <br />
              <br />
              Over the years, we have successfully helped hundreds of clients who have suffered significant
              financial losses through these fraudulent schemes. Our firm’s success in these cases is evidenced
              by an outstanding success rate of over 80%, demonstrating our ability to navigate even the most
              challenging financial recovery cases. We understand the stress and urgency that accompanies
              financial losses due to scams, and we are committed to providing our clients with the support
              they need during these trying times.
              <br />
              <br />
              Our team consists of in-house attorneys with deep expertise in financial law, as well as financial
              analysts, investigators, and experts who specialize in tracing assets, uncovering fraudulent practices,
              and navigating complex financial transactions. This diverse team allows us to approach each case from
              multiple angles, ensuring a thorough investigation and the most effective recovery strategy.
              <br />
              <br />
              As a firm, we are committed to offering personalized, client-centered solutions. We take the time to
              understand the unique circumstances of each case, providing tailored legal strategies that are
              designed to achieve the best possible outcomes for our clients. Our comprehensive approach integrates
              legal expertise with innovative investigative techniques to recover funds quickly and effectively.
              <br />
              <br />
              Our decision to expand our services by registering as an LLC has allowed us to streamline operations,
              improve client services, and build stronger relationships with clients worldwide. This expansion enables
              us to offer more robust and efficient solutions while maintaining the same high standards of excellence
              that have earned us the trust of clients around the world. We are dedicated to providing the highest
              quality legal support to individuals who have fallen victim to online scams, ensuring that they receive
              the justice and financial recovery they deserve.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* page-5 done with responsive */}

       <div className="flex flex-col md:flex-row w-full mx-auto md:h-[600px] ">
      {/* Left Text Section */}
      <div className="w-full md:w-[53%] bg-[url('./assets/A4.webp')] bg-cover bg-center px-6 md:pl-[6vw] py-10 flex items-center">
        <div className="max-w-xl md:ml-[12vw]">
          <h2 className="text-4xl md:text-[40px] font-normal leading-14 text-[#0f1f3d] mb-6">
            We prioritize your needs with <br className="hidden md:block" />
            the utmost respect, providing <br className="hidden md:block" />
            dedicated support every step of <br className="hidden md:block" />
            the way.
          </h2>
          <p className="text-base md:text-[15px] text-[#6b6b6b] leading-relaxed">
            We are dedicated to providing exceptional service with the utmost respect, always
            putting your needs first. Our team is available 24/7 throughout the week, ensuring
            that you receive continuous support and personalized attention. We are here to
            guide you at every step, offering reliable assistance whenever you need it, and
            working tirelessly to achieve the best outcomes for you.
          </p>
        </div>
      </div>

      {/* Middle Vertical Banner */}
    
     <div className="w-full md:w-[15%] bg-[#0f1f3d] relative h-[490px] md:h-auto">
      <img
        alt="Abstract background"
        src="https://storage.googleapis.com/a1aa/image/669a006f-8d2b-4bd9-2149-ee24c85d55de.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
      />
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 md:px-6 py-8 md:py-20">
        <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#3f3f3f66] mb-6 hover:scale-110 transition-all duration-300">
          <IoIosArrowDropleftCircle className="text-[#a49174] text-7xl md:text-6xl" />
        </div>
        <h3 className="text-[#a49174] text-7xl md:text-[69px] font-serif font-normal mb-2 leading-none pt-2 md:pt-10 transition-all">
          {hour} Hr
        </h3>
        <p className="text-white text-2xl md:text-[24px] pt-7 font-semibold tracking-wide">
          5 <span>DAYS A WEEK</span>
        </p>
      </div>
    </div>

      {/* Right Image Section */}
      <div className="w-full md:w-[33%]  md:block h-100">
        <img
          src={A5}
          alt="Two men discussing work"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* page-6 done with responsive */}

  
    

     <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-0 pt-20 sm:pt-24 pb-16 sm:pb-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[11px] sm:text-[12px] tracking-[2px] sm:tracking-[4px] text-[#b89f7a] font-semibold mb-2">
          TESTIMONIALS
        </p>
        <h2 className="text-[30px] sm:text-[36px] md:text-[43px] font-serif font-normal text-[#0a1229] mb-4 leading-snug sm:leading-tight">
          What Clients Say About Us?
        </h2>
        <p className="text-[14px] sm:text-[15px] max-w-xl mx-auto pt-4 sm:pt-6 leading-relaxed text-[#7e7d7c]">
          When you hire our firm to manage your case, you have hired a team of legal advocates
          <br className="hidden sm:block" />
          who care, who will keep you informed, who will fight for you.
        </p>
        <div className="border border-[#b89f7a] w-20 sm:w-30 mx-auto mt-6 sm:mt-8"></div>
      </div>

      {/* Slider */}
      <div className="mt-12 sm:mt-16 max-w-8xl mx-auto">
        <Slider {...settings}>

  {/* Slide 1 */}
        <div className='flex flex-col'>
          <div className="flex flex-wrap justify-center gap-6">
  {/* Testimonial Card 1 */}
         <div className="border border-gray-300 hover:border-none hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%] ">
    <div className="p-6 sm:p-8 text-[15px] sm:text-[16px] leading-7 font-serif text-[#0a1229] sm:pt-12">
      "I am very happy with the service I received from Aemilius Cupero. They <br/> helped me recover my money back and I would recommend them to anyone <br /> who is looking to recover their funds."
    </div>

    <div className="bg-[#0a1229] flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-5 sm:py-6 space-y-4 sm:space-y-0 sm:mt-9">
      <div className="flex items-center space-x-4">
        <img alt="Mr. Edgar Baker" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#b89f7a]" src={A6} />


        <div className="text-white text-[12px] font-semibold leading-tight">
          <p className="tracking-[1px] sm:tracking-[2px]">MR. EDGAR BAKER</p>
          <p className="text-[13px] font-normal mt-1">Scotland</p>
        </div>
      </div>

         <div className="flex items-center space-x-4 sm:space-x-6">

                <div className="text-[#b89f7a] flex pr-8 sm:pr-35 sm:pb-7 text-[16px] sm:text-[18px] font-semibold tracking-widest">
                  <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
                </div>
                <div className="text-[#b89f7a] text-xl sm:text-2xl font-extrabold pb-1 sm:pb-8 flex select-none">
                  <SiComma /><SiComma />
                </div>
            </div>    
    </div>
         </div>
{/* Testimonial Card 2 */}
         <div className="border border-gray-300 hover:border-none hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%]">
    <div className="p-6 sm:p-8 text-[15px] sm:text-[16px] leading-7 font-serif text-[#0a1229] sm:pt-12">
      "I knew my case was complicated beacause it involved cryptos, <br /> I would like to appreciate Aemilius Cupero's successfully efforts <br/> that got my money back"
    </div>

    <div className="bg-[#0a1229] flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-5 sm:py-6 space-y-4 sm:space-y-0 sm:mt-9">
      <div className="flex items-center space-x-4">
        <img alt="Ms. Client B" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#b89f7a]" src={A7} />
        <div className="text-white text-[12px] font-semibold leading-tight">
          <p className="tracking-[1px] sm:tracking-[2px]">MS. PATRICIA HOWER</p>
          <p className="text-[13px] font-normal mt-1">Australia</p>
        </div>
      </div>
      <div className="text-[#b89f7a] text-xl sm:text-2xl font-extrabold pb-1 sm:pb-8 flex select-none">
                  <SiComma /><SiComma />
                </div>
    </div>
        </div>
          </div>
        </div>


{/* slide 2 perfect */}
   
   <div className='flex flex-col'>
   <div className="flex flex-wrap justify-center gap-6">


  {/* Testimonial Card 1 */}

    <div className="border border-gray-300 hover:border-none hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%]">
    <div className="p-6 sm:p-8 text-[15px] sm:text-[16px] leading-7 font-serif text-[#0a1229] sm:pt-12">
      "I knew my case was complicated beacause it involved cryptos, <br /> I would like to appreciate Aemilius Cupero's successfully efforts <br/> that got my money back"
    </div>

    <div className="bg-[#0a1229] flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-5 sm:py-6 space-y-4 sm:space-y-0 sm:mt-9">
      <div className="flex items-center space-x-4">
        <img alt="Ms. Client B" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#b89f7a]" src={A7} />
        <div className="text-white text-[12px] font-semibold leading-tight">
          <p className="tracking-[1px] sm:tracking-[2px]">MS. PATRICIA HOWER</p>
          <p className="text-[13px] font-normal mt-1">Australia</p>
        </div>
      </div>
      <div className="text-[#b89f7a] text-xl sm:text-2xl font-extrabold pb-1 sm:pb-8 flex select-none">
                  <SiComma /><SiComma />
                </div>
    </div>
        </div>

{/* Testimonial Card 2 */}

    <div className="border border-gray-300 hover:border-none hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%]">
    <div className="p-6 sm:p-8 text-[15px] sm:text-[16px] leading-7 font-serif text-[#0a1229] sm:pt-12">
          When a shipping container company scammed me, Aemilius <br /> Cupero helped me to recover my lost funds and got me justice. <br /> They are undoubtedly one of the best law firms with a very <br /> professional approach towards their work.    </div>

    <div className="bg-[#0a1229] flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-5 sm:py-7 space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <img alt="Ms. Client B" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#b89f7a]" src={A11} />
        <div className="text-white text-[12px] font-semibold leading-tight">
          <p className="tracking-[1px] sm:tracking-[2px]">MR. MICHEL FAUCHER</p>
          <p className="text-[13px] font-normal mt-1">Germany</p>
        </div>
      </div>
      <div className="text-[#b89f7a] text-xl sm:text-2xl font-extrabold pb-1 sm:pb-8 flex select-none">
                  <SiComma /><SiComma />
                </div>
    </div>
      </div>

      </div>
  </div>
  

  {/* slide 3 perfect*/}
    <div className='flex flex-col'>
   <div className="flex flex-wrap justify-center gap-6">


  {/* Testimonial Card 1 */}

    <div className="border border-gray-300 hover:border-none hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%]">
    <div className="p-6 sm:p-8 text-[15px] sm:text-[16px] leading-7 font-serif text-[#0a1229] sm:pt-12">
      When a shipping container company scammed me, Aemilius <br /> Cupero helped me to recover my lost funds and got me justice. <br /> They are undoubtedly one of the 
          best law firms with a very <br /> professional approach towards their work.
    </div>

    <div className="bg-[#0a1229] flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-5 sm:py-6 space-y-4 sm:space-y-0 sm:mt-2">
      <div className="flex items-center space-x-4">
        <img alt="Ms. Client B" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#b89f7a]" src={A12} />
        <div className="text-white text-[12px] font-semibold leading-tight">
          <p className="tracking-[1px] sm:tracking-[2px]">MR. MICHEL FAUCHER</p>
          <p className="text-[13px] font-normal mt-1">Germany</p>
        </div>
      </div>
      <div className="text-[#b89f7a] text-xl sm:text-2xl font-extrabold pb-1 sm:pb-8 flex select-none">
                  <SiComma /><SiComma />
                </div>
    </div>
        </div>

{/* Testimonial Card 2 */}

    <div className="border border-gray-300 hover:border-none hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%]">
    <div className="p-6 sm:p-8 text-[15px] sm:text-[16px] leading-7 font-serif text-[#0a1229] sm:pt-12">
         I am so grateful to Aemilius Cupero for providing me with <br /> recovery services. They helped me through a tough time. I can't <br /> thank them enough for their help.
                                                                                                   
      </div>

    <div className="bg-[#0a1229] flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-5 sm:py-7 space-y-4 sm:space-y-0 sm:mt-7">
      <div className="flex items-center space-x-4">
        <img alt="Ms. Client B" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#b89f7a]" src={A13} />
        <div className="text-white text-[12px] font-semibold leading-tight">
          <p className="tracking-[1px] sm:tracking-[2px]">MS. LIAN KOA</p>
          <p className="text-[13px] font-normal mt-1">Hong Kong</p>
        </div>
      </div>
      <div className="text-[#b89f7a] text-xl sm:text-2xl font-extrabold pb-1 sm:pb-8 flex select-none">
                  <SiComma /><SiComma />
                </div>
    </div>
    </div>
   </div>
  </div>         
 
   {/* slide 4 perfect */}

   <div className='flex flex-col'>
   <div className="flex flex-wrap justify-center gap-6">


  {/* Testimonial Card 1 */}

    <div className="border border-gray-300 hover:border-none hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%]">
    <div className="p-6 sm:p-8 text-[15px] sm:text-[16px] leading-7 font-serif text-[#0a1229] sm:pt-12">
              I am so grateful to Aemilius Cupero for providing me with <br /> recovery services. They helped me through a tough time. I can't <br /> thank them enough for their help.

    </div>

    <div className="bg-[#0a1229] flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-5 sm:py-6 space-y-4 sm:space-y-0 sm:mt-9">
      <div className="flex items-center space-x-4">
        <img alt="Ms. Client B" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#b89f7a]" src={A13} />
        <div className="text-white text-[12px] font-semibold leading-tight">
          <p className="tracking-[1px] sm:tracking-[2px]">MS. LIAN KOA </p>
          <p className="text-[13px] font-normal mt-1">Hong Kong</p>
        </div>
      </div>
      <div className="text-[#b89f7a] text-xl sm:text-2xl font-extrabold pb-1 sm:pb-8 flex select-none">
                  <SiComma /><SiComma />
                </div>
    </div>
        </div>

{/* Testimonial Card 2 */}

    <div className="border border-gray-300 hover:border-none hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%]">
    <div className="p-6 sm:p-8 text-[15px] sm:text-[16px] leading-7 font-serif text-[#0a1229] sm:pt-12">
          Aemilius Cupero is an excellent law firm that helped me recover <br /> my lost money from a forex scam. They took care of it and <br /> recovered  all my funds back. Thank you, Aemilius!
                                                                                                

    </div>

    <div className="bg-[#0a1229] flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-5 sm:py-7 space-y-4 sm:space-y-0 sm:mt-7">
      <div className="flex items-center space-x-4">
        <img alt="Ms. Client B" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#b89f7a]" src={A14} />
        <div className="text-white text-[12px] font-semibold leading-tight">
          <p className="tracking-[1px] sm:tracking-[2px]">MR. WILTON BURTON</p>
          <p className="text-[13px] font-normal mt-1">Ireland</p>
        </div>
      </div>
      <div className="text-[#b89f7a] text-xl sm:text-2xl font-extrabold pb-1 sm:pb-8 flex select-none">
                  <SiComma /><SiComma />
                </div>
    </div>
      </div>

      </div>
  </div>

      </Slider>
      </div>
    </section>


      {/* page-7 done with responsive */}

      <div className="flex flex-col md:flex-row min-h-screen bg-[url('./assets/A9.webp')] bg-cover bg-center">
  
  <section className="relative flex-1 bg-[#15263B]/90 text-white px-4 py-10 sm:px-6 sm:py-12 md:px-14 md:py-16 flex flex-col justify-between">
    
    <div>
      <p className="text-[11px] sm:text-[12px] text-[#B28B4A] font-semibold tracking-[2px] sm:tracking-[4px] mb-2 uppercase">OUR STRENGTH</p>

      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-tight mb-6 sm:mb-8">
        Our Team
      </h2>

      <img
        alt="Group of diverse professionals"
        className="w-full max-w-full mb-6 sm:mb-8 object-cover rounded-md"
        height="300"
        src={A8}
        width="600"
      />

      <p className="text-[15px] sm:text-[17px] leading-relaxed mt-6 sm:mt-[3vw]">
        Our strength lies in the expertise, dedication, and diverse experience of our attorneys. Each <br className="hidden sm:block" /> member of our team is committed to providing top-tier 
        legal services tailored to meet the unique <br className="hidden sm:block" /> needs of our clients. With a deep understanding of the law and a client-centered approach, our  <br className="hidden sm:block" />attorneys
        are your key to navigating complex legal challenges and achieving the best possible <br className="hidden sm:block" /> outcomes.
      </p>
    </div>

    <div>
      <a className="inline-flex items-center text-white font-medium text-[13px] sm:text-[14px] tracking-[1px] sm:tracking-[2px]
       mt-8 uppercase hover:border-b border-white/60 transition-all " href="#">
        CONTACT OUR ATTORNEYS  <IoIosArrowRoundForward className="text-2xl sm:text-3xl ml-1 sm:group-hover:hidden transition-all"/>
      </a>
    </div>

    <img
      // alt="Icon of scales of justice"
      className="absolute top-4 right-4 sm:top-10 sm:right-10 w-8 h-8 sm:w-10 sm:h-10"
      // height="40"
      src={FaBalanceScale}
      // width="40"
    />
  </section>

         <section className="flex-1 bg-[#F3F4F4] px-4 py-10 sm:px-6 sm:py-12 md:px-14 md:py-16 relative">
    {/* Add content here */}
    </section>
      </div>


                  <div >
                          <div className="bg-[#1a243f] sm:flex pb-20 mt-30">
                            <div className="sm:w-200 sm:ml-95 pt-25 ml-5 mr-5">
                                  <img src={logo} alt=""  className="bg-white p-3 mb-5"/>
                            <p className="text-white pb-4">
                              Aemilius Cupero LLC is a law firm exclusively focused on helping clients recover lost funds. We do not offer services related to online investments, including cryptocurrencies, forex, or binary options. 
                            </p>
                            <p className="text-white pb-4">
                              Unfortunately, we have become aware of fraudulent individuals who falsely claim to be employees of Aemilius Cupero in an attempt to exploit our name for financial gain. These scammers use deceptive tactics to request sensitive information such as credit card numbers, account details, and other personal data. We urge you to contact us directly before engaging in any financial transactions or sharing personal information. 
                            </p>
                            <p className="text-white">
                              Please note that Aemilius Cupero is not liable for any consequences resulting from communication initiated through unofficial domains. Always verify that you are using our official website (e.g., www.aemilius-cupero.com or .net) for all interactions with us.
                            </p>
                            </div>
                
                              <div className="w-70 sm:w-100 sm:flex">
                                <div className=" ml-5 mr-5 sm:pt-24">
                                  <h1 className="text-[30px] sm:text-[22px] font-serif text-white mt-10">WHERE TO FIND US</h1>
                                  <hr className="mt-5 mb-7 text-[#AD9779]"/>
                                  <div className="flex mb-2">
                                       <div className="border-1 border-white bg-green-400 hover:border-transparent w-19 h-20"><IoLogoMedium className="text-white text-[45px] mt-4 ml-4"/></div>
                                      <div className="border-1 border-white bg-blue-500 hover:border-transparent w-19 h-20"><SiLinkedin className="text-white text-[45px] mt-4 ml-4"/></div>
                                  </div>
                                 <div className="flex mb-2">
                                   <div className="border-1 border-white bg-[#cd201f] hover:border-transparent w-19 h-20"><IoLogoYoutube className="text-white text-[45px] mt-4 ml-4"/></div>
                                   <div className="border-1 border-white bg-red-700 hover:border-transparent w-19 h-20"><FaPinterest className="text-white text-[45px] mt-4 ml-4"/></div>
                                 </div>
                                </div>
                                <div className="ml-5 mr-5 sm:pt-24 ">
                                  <h1 className="text-[30px] sm:text-[22px] font-serif text-white mt-10">SAFE AND SECURE</h1>
                                   <hr className="mt-5 mb-7 text-[#AD9779]"/>
                                   <div>
                                    <img src={footer1} alt=""  className="mb-5"/>
                                    <img src={footer2} alt="" className="mb-5"/>
                                    <img src={footer3} alt="" className=""/>
                                   </div>
                                </div>
                          </div>
                          </div>
                         </div>
                              <div className="bg-[#11192e] w-full">
                                 <p className="pt-5 pb-4 text-white sm:ml-95 ml-5">Copyright 2024 Aemilius Cupero LLC | All Rights Reserved</p>
                             </div>
                


     </div>

    
  
  )
}

export default About;
