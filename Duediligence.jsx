import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import logo from "./assets/logo.webp"
import {Link} from "react-router-dom"
// import Navbar from './Navbar';
import React from 'react';
// import MainNavbar from './MainNavbar';
import ptt_career from './assets/ptt_career.webp';
import h6_statue from './assets/h6_statue.webp';
import { useEffect, useState } from "react";
import { FaBullseye, FaList, FaSearch, FaCheck, FaArrowRight } from "react-icons/fa";
import bloomberg from './assets/bloomberg.webp';
import quote from './assets/quote.webp';
import bing from './assets/bing.webp';
import affinity from './assets/affinity.webp';
import cbs from './assets/cbs.webp';
import yahoo from './assets/yahoo.webp';
import nbc from './assets/nbc.webp';
import fox from './assets/fox.webp';
import news from './assets/news.webp';
import puzzle from './assets/puzzle.webp';
import about_hammer from './assets/about_hammer.webp';
import about_progress_bg from "./assets/about_progress_bg.webp";
import abc from './assets/abc.webp';
import { motion, AnimatePresence } from "framer-motion";
import { div } from 'framer-motion/client';
import law from './assets/law.webp';
// import about_hammer from "./assets/about_hammer.webp";
import "./App.css"
import { IoLogoMedium } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import footer1 from "./assets/footer1.webp"
import footer2 from "./assets/footer2.webp"
import footer3 from "./assets/footer3.webp"

import { useMediaQuery } from 'react-responsive';


import { MdCall } from "react-icons/md";

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50); // Number of increments

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};


const logos = [
  bloomberg,
  bing,
  affinity,
  cbs,
  yahoo,
  nbc,
  fox,
  news,
  abc
];

   const menuItems = [
  'Overview',
  'Verify Authenticity',
  'Seek Guidance',
  'Flag Concerns',
  'Steer Clear. Stay Cautious.'
];

const contentMap = {
  'Overview': {
    title: 'Understand the Basics',
    content: (
      <p>
        Learn how to identify scams early and take informed financial steps. This section introduces key concepts for due diligence.
      </p>
    )
  },
  'Verify Authenticity': {
    title: "Verify that it’s not a ‘clone firm.’",
    content: (
      <>
        <p className="mb-4">
          A common scam involves fraudsters impersonating legitimate firms, often referred to as “clone firms.” These clone firms mimic names of real businesses, such as the Financial Conduct Authority (FCA), to deceive individuals.
        </p>
        <p className="mb-4">
          To avoid falling victim, always verify contact details using official sources like the Regulatory Register. Don’t trust details given by the suspicious firm directly.
        </p>
        <p>
          Example: a “clone firm” used names like FEFCA and misled people with voicemails pretending to be the FCA.
        </p>
      </>
    )
  },
  'Seek Guidance': {
    title: 'Seek Guidance',
    content: (
      <p>
        If unsure, consult with a licensed financial advisor. Avoid making hasty decisions based on unsolicited advice.
      </p>
    )
  },
  'Flag Concerns': {
    title: 'Report Suspicious Activity',
    content: (
      <p>
        Report any suspicious behavior to your national financial regulator or law enforcement to help prevent further fraud.
      </p>
    )
  },
  'Steer Clear. Stay Cautious.': {
    title: 'Stay Safe',
    content: (
      <p>
        Be cautious of high-pressure sales, unrealistic returns, or companies without regulatory proof. Stay educated and alert.
      </p>
    )
  }
};   


function Duediligence( ) {
  const isMobile = useMediaQuery({ maxWidth: 1368 });
  const [activeTab, setActiveTab] = useState('Verify Authenticity');
const [visibleLogos, setVisibleLogos] = useState(logos.slice(0, 6));
const [startIndex, setStartIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setVisibleLogos(prev => {
      const nextIndex = (startIndex + 6) % logos.length;
      const nextLogo = logos[nextIndex];
      setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);

      return [...prev.slice(1), nextLogo];
    });
  }, 5000); // every 5 seconds

  return () => clearInterval(interval);
}, [startIndex]);
    return(
            <> 
               {/* navbar */}
                          
                   
               {isMobile ? (
                 // ✅ Mobile layout
                 <div className="flex items-center px-4 py-2 bg-[#1a243f] hidden">
                   <p className="text-white text-sm">WELCOME TO AEMILIUS CUPERO</p>
                   <div className="flex items-center gap-4 text-white text-lg ml-auto">
                     <FaMedium />
                     <FaLinkedin />
                     <FaYoutube />
                     <FaPinterest />
                   </div>
                 </div>
               ) : (
                 // ✅ Desktop layout
                 <div className="flex items-center pl-52 h-[7vh] w-full bg-[#1a243f]">
                   <p className="text-white text-[14px]">WELCOME TO AEMILIUS CUPERO</p>
                   <div className="flex items-center gap-8 text-[20px] text-white ml-auto pr-12">
                     <FaMedium className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300" />
                     <FaLinkedin className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300" />
                     <FaYoutube className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300" />
                     <FaPinterest className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300" />
                   </div>
                 </div>
               )}
                           
                  {isMobile ? (
                 // 👇 MOBILE VIEW
                 <div className="h-[13vh] w-full flex items-center justify-between px-4 bg-[#f4f5f8]">
                   <img src={logo} alt="Logo" className="h-[40px]" />
                   <CgMenuLeftAlt className="text-black text-[30px]" />
                 </div>
               ) : (
                 // 👇 DESKTOP VIEW
                 <div className="h-[11vh] w-full flex items-center px-20 bg-[#f2f3f8]">
                   <img src={logo} alt="Logo" className="h-[60px] mr-auto" />
                   <div className="flex items-center gap-7 font-serif tracking-[.10em]">
                     <Link to="/home" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">HOME</Link>
                     <Link to="/aboutus" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">ABOUT US</Link>
                     <Link to="/services" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">SERVICES</Link>
                     <Link to="/duediligence" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">DUE DILIGENCE</Link>
                     <Link to="/contact" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">CONTACT US</Link>
                   </div>
                   <div className="ml-8 bg-[#AD9779] px-4 py-2 rounded">
                     <CgMenuLeftAlt className="text-black text-[32px]" />
                   </div>
                 </div>
               )}


               
          {/* page first */}
                                {isMobile ? (
  // ✅ Mobile layout
  <div className="w-full h-auto bg-[url('./assets/c1.webp')] bg-cover bg-center flex flex-col items-center px-6 py-20 relative">
    <div className="w-full text-center text-white z-10">
      <h1 className="text-4xl font-serif font-light mb-4">Due Diligence</h1>
      <p className="text-[5vw] leading-relaxed uppercase">
       "Our due diligence services empower you to make informed investment decisions by thoroughly researching opportunities—whether you choose to do it yourself or partner with us for expert guidance."
      </p>
    </div>
    <div className="mt-10 flex justify-center z-10">
      <nav className="bg-white/30 backdrop-blur-sm px-4 py-3 flex items-center space-x-3">
        <a href="#" className="text-white font-semibold">Home</a>
        <a href="#" className="text-[#bb7742] font-medium">Due Diligence</a>
      </nav>
    </div>
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
) : (
  // ✅ Desktop layout
  <div className="w-full h-auto bg-[url('./assets/c1.webp')] bg-cover bg-center flex flex-row items-start px-24 py-20 relative">
    <div className="w-2/3 text-left text-white z-10">
      <h1 className="text-6xl font-serif font-light mb-4">Due Diligence</h1>
      <p className="text-lg leading-relaxed uppercase">
       "Our due diligence services empower you to make informed investment decisions by thoroughly researching opportunities—whether you choose to do it yourself or partner with us for expert guidance."
      </p>
    </div>
    <div className="w-1/3 mt-0 flex justify-end z-10">
      <nav className="bg-white/30 backdrop-blur-sm px-6 py-3 flex items-center space-x-6">
        <a href="#" className="text-white font-semibold">Home</a>
        <a href="#" className="text-[#bb7742] font-medium">Due Diligence</a>
      </nav>
    </div>
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
)}

           
  {/* page second */}
              {isMobile ? (
        // 🌐 Mobile View
        <div className="bg-white py-14 px-6 mt-6">
          <div className="flex flex-col items-center gap-10">
            <div className="z-20 w-full max-w-sm">
              <img
                src={h6_statue}
                alt="Lady Justice"
                className="w-full h-120 object-contain"
              />
            </div>

            <div className="">
              <h5 className="text-xs tracking-[0.7vw] text-[#a87d4a] font-semibold uppercase mb-2">
                The Importance of Due Diligence
              </h5>
              <h2 className="text-4xl text-[#1b1c2c] tracking-wide leading-snug mb-4">
                Safeguard Your Investments
                with <br /> Trusted Due Diligence
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed ">
                Due diligence is a vital process for any investor, providing a detailed
                understanding of a company’s financial health, business model, and
                compliance with legal and regulatory standards. By thoroughly evaluating
                financial statements, operational practices, and market reputation,
                investors can identify potential risks and opportunities, ensuring their
                decisions are well-informed.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Moreover, due diligence validates the authenticity of the company’s
                claims and ensures adherence to laws, protecting investors from
                liabilities associated with unethical practices. It also empowers
                investors to negotiate better terms and make confident, strategic
                decisions.
              </p>
            </div>
          </div>
        </div>
      ) : (
        // 🖥️ Desktop View
        <div className="bg-white py-20 px-16 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-row items-center gap-12">
            <div className="flex-shrink-0 z-0">
              <img
                src={h6_statue}
                alt="Lady Justice"
                className="w-full h-170 mt-15 max-w-lg object-contain z-20"
              />
            </div>

            <div className="text-left max-w-2xl">
              <h5 className="text-sm tracking-widest text-[#a87d4a] font-semibold uppercase mb-3">
                The Importance of Due Diligence
              </h5>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1b1c2c] leading-snug mb-6">
                Safeguard Your Investments <br className="hidden md:block" />
                with Trusted Due Diligence
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Due diligence is a vital process for any investor, providing a detailed
                understanding of a company’s financial health, business model, and
                compliance with legal and regulatory standards. By thoroughly evaluating
                financial statements, operational practices, and market reputation,
                investors can identify potential risks and opportunities, ensuring their
                decisions are well-informed.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Moreover, due diligence validates the authenticity of the company’s
                claims and ensures adherence to laws, protecting investors from
                liabilities associated with unethical practices. It also empowers
                investors to negotiate better terms and make confident, strategic
                decisions.
              </p>
            </div>
          </div>
        </div>
      )}

{/* page 3 */}
 {isMobile ? (
        // 📱 Mobile View
        <div className="relative bg-cover bg-center bg-no-repeat mt-16 text-white py-16 px-4 bg-[url('./assets/team_fancy.webp')]">
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-1"
            style={{
              backgroundColor: "transparent",
              backgroundImage: "linear-gradient(180deg, #243257E8 0%, #060B19E6 89%)",
              opacity: 1,
              transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
            }}
          ></div>

          {/* Animated Hammer */}
          <motion.img
            src={about_hammer}
            alt="Gavel"
            className="absolute bottom-[-60px] w-80 z-20 left-[-30px] top-270"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: [ -300, 0, -10, 10, 0 ], opacity: 1 }}
            transition={{
              x: { duration: 2, ease: "easeOut", times: [0, 0.5, 0.75, 0.9, 1] },
              opacity: { duration: 1.2, ease: "easeOut" }
            }}
          />

          {/* Content Cards in Column */}
          <div className="relative  z-10 space-y-12">
            {[
              {
                icon: "/icons/verify.svg",
                title: "Verify the Company",
              desc:" Check the business name, address, registration, and online presence. Make sure the website is professional and contact details are legitimate",
              },
              {
                icon: "<MdCall />",
                title: "Watch for Red Flags",
                desc: "Stay cautious of urgent messages, unclear details, or unprofessional language, as scammers often use these tactics to pressure you into making quick decisions.",
              },
              {
                icon: "/icons/examine.svg",
                title: "Examine the Offer",
                desc: "Be cautious of offers that seem too good to be true, as they are often designed to deceive and exploit. Always verify the legitimacy before committing.",
              },
              {
                icon: "/icons/review.svg",
                title: "Read Reviews",
                desc: "Check reviews on reliable platforms and be cautious of suspiciously positive or fake feedback that could indicate a scam.",
              },
              {
                icon: "/icons/payment.svg",
                title: "Secure Payments",
                desc: "Legitimate businesses accept secure payment methods like credit or debit cards or PayPal, rather than cryptocurrencies or gift cards.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3 px-3">
                <img src={item.icon} alt={item.title} className="mx-auto h-10" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 🖥️ Desktop View
        <div className="relative bg-cover h-[500px] bg-center bg-no-repeat mt-2 text-white py-20 px-1 bottom-22 bg-[url('./assets/team_fancy.webp')]">
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 h-[500px] z-1"
            style={{
              backgroundColor: "transparent",
              backgroundImage: "linear-gradient(180deg, #243257E8 0%, #060B19E6 89%)",
              opacity: 1,
              transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
            }}
          ></div>

          {/* Animated Hammer */}
          <motion.img
            src={about_hammer}
            alt="Gavel"
            className="absolute bottom-[-80px] left-[-60px] w-100 z-12 top-100"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: [ -300, 0, -10, 10, 0 ], opacity: 1 }}
            transition={{
              x: { duration: 2, ease: "easeOut", times: [0, 0.5, 0.75, 0.9, 1] },
              opacity: { duration: 1.2, ease: "easeOut" }
            }}
          />

          {/* Grid Content */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center lg:text-left relative z-10">
            {/* Card Items */}
            {[
              {
                icon: "/icons/verify.svg",
                title: "Verify the Company",
                desc: "Check the business name, address, registration, and online presence. Make sure the website is professional and contact details are legitimate",
              },
              {
                icon: "/icons/red-flags.svg",
                title: "Watch for Red Flags",
                desc: "Stay cautious of urgent messages, unclear details, or unprofessional language, as scammers often use these tactics to pressure you into making quick decisions.",
              },
              {
                icon: "/icons/examine.svg",
                title: "Examine the Offer",
                desc: "Be cautious of offers that seem too good to be true, as they are often designed to deceive and exploit. Always verify the legitimacy before committing.",
              },
              {
                icon: "/icons/review.svg",
                title: "Read Reviews",
                desc: "Check reviews on reliable platforms and be cautious of suspiciously positive or fake feedback that could indicate a scam.",
              },
              {
                icon: "/icons/payment.svg",
                title: "Secure Payments",
                desc: "Legitimate businesses accept secure payment methods like credit or debit cards or PayPal, rather than cryptocurrencies or gift cards.",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4 border-l-1 h-65 pl-6">
                <img src={item.icon} alt={item.title} className="mx-auto lg:mx-0 h-10" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-lg text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

{/* page 4 */}
  {/* <div>
      <div className="w-full md:w-1/3 md:h-80 bg-white shadow mt-15">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`w-full text-left px-6 py-4 border-b flex justify-between items-center text-base transition duration-300 ${
              activeTab === item
                ? 'text-[#AD9779] font-semibold bg-gray-50'
                : 'hover:bg-gray-100'
            }`}
          >
            {item}
            <FaArrowRight />
          </button>
        ))}
        <div className="bg-[#AD9779] text-white text-center py-4 font-semibold">
          CONTACT US TODAY!
        </div>
      </div>

           <div className="max-w-6xl mx-auto px-4 py-12 text-[#10172C]">
      
      <a
        href="https://www.iosco.org/i-scan/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4 mb-10 group"
      >
        <div className="bg-[#AD9779] w-16 h-16 flex items-center justify-center">
          <FaBullseye className="text-white text-2xl" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#10172C] group-hover:text-[#AD9779] transition-colors duration-300">
            Review the Regulatory Warning List.
          </h2>
          <p className="uppercase text-sm tracking-widest text-[#AD9779] mt-1">
            Click here to begin your search
          </p>
        </div>
      </a>

    
       <div className="flex flex-col md:flex-row items-center justify-between text-center mb-10 gap-10">
        {[
          {
            icon: <FaList className="text-3xl text-[#AD9779]" />,
            title: "Access the Regulatory Warning List",
            step: "1",
          },
          {
            icon: <FaSearch className="text-3xl text-[#AD9779]" />,
            title: "Search for the Company Name",
            step: "2",
          },
          {
            icon: <FaCheck className="text-3xl text-[#AD9779]" />,
            title: "Cross-Verify Company Details",
            step: "3",
          },
        ].map((step, idx) => (
          <div key={idx} className="relative">
            <div className="bg-gray-100 p-6 w-32 h-32 flex items-center justify-center mx-auto relative">
              {step.icon}
              <div className="absolute -top-2 -right-2 bg-[#10172C] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold">
                {step.step}
              </div>
            </div>
            <a
              href="https://www.iosco.org/i-scan/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 font-semibold text-lg max-w-xs mx-auto text-[#10172C] leading-tight hover:text-[#AD9779] transition-colors duration-300"
            >
              {step.title}
            </a>
          </div>
        ))}
      </div>
      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6 mx-auto mt-15 border-b  pl-2 pb-10">
From a legal perspective, utilizing the Regulatory Warning List is a crucial step in assessing the risks associated with a potential investment. This list helps identify firms that may be 
operating without the necessary regulatory authorization, which could signal potential legal and financial risks. It is important to check whether a company appears on this list, as this
 could indicate serious concerns about its legitimacy.However, the absence of a company on the list does not guarantee its trustworthiness, as scammers often change their business details,
  such as names and addresses, to avoid detection. The alerts provided by IOSCO members highlight unauthorized firms, some of which may use names similar to authorized firms or falsely claim 
  affiliations. These warnings are issued voluntarily and can offer critical insights into potential fraud, but they do not constitute a comprehensive list. It’s essential to conduct thorough 
  research and consult official resources to ensure that any investment is with a legitimate and properly authorized entity, thereby protecting yourself from possible legal and financial 
  repercussions.

      </p>
    </div>

</div> */}


{/* page 5 */}

{/* 
          <div className="sm:flex flex-col lg:flex-row md:flex-wrap sm:items-start">
     <section
  className="relative bg-gray-50 bg-center md:py-16 overflow-hidden w-500"
  style={{ backgroundImage: `url(${quote})` }} 
>
  <div className="max-w-1xl mx-auto sm:px-10 pb-2">
    <p className="text-sm tracking-widest text-gray-500 uppercase">
      AEMILIUS CUPERO - AS SEEN IN THE NEWS
    </p>
    <h2 className="sm-text-2xl md:text-2xl font-semibold text-gray-900 mt-2">
      THE TRUSTED CHOICE FOR YOUR NEEDS, ENDORSED BY LEADING NEWS PUBLICATIONS!
    </h2>
  </div>

  <div className="mt-12 relative w-full overflow-x-hidden">
    <div className="flex justify-center gap-30 items-center filter grayscale hover:grayscale-0 ease-in-out">
      <AnimatePresence mode="popLayout">
        {visibleLogos.map((logo, index) => (
          <motion.img
            key={`${logo}-${index}`}
            src={logo}
            alt={`logo-${index}`}
            className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0 }}
          />
        ))}
      </AnimatePresence>
    </div>
  </div>
</section>

        <div className="sm:max-w-5xl md:px-4 md:py-1">

  <div className="sm:flex-2 md:mt-1 sm:py-28">
    <h2 className="text font-bold text-[#AD9779] mb-4 tracking-widest">
      CONTACT US
    </h2>
    <h1 className="text-3xl font-semibold text-gray-900 mb-4 tracking-widest">
      Speak with an Expert Today – Free Legal <br></br>Consultation with No Commitment!
    </h1>
    <p className="text-sm text-gray-600">
      At Aemilius Cupero, we offer a free, no-obligation consultation to help you understand your legal options. Whether<br></br> you’re dealing with a scam, need advice on a legal matter, 
      or have any other questions, our experienced team is<br></br> here to assist you. Contact us today to schedule your consultation and take the first step toward resolving your issue.
    </p>
 <div className="md:w-full flex sm:justify-end md:pr-1 sm:ml-[885px] "> 
  <div className="w-[830px] -mt-80 relative sm:-mt-77 sm:w-full">
    <img
      src={law}
      alt="Consultation"
      className="w-full h-300 object-cover"
      
    />
 
  <motion.img
    src={puzzle}
    alt="Floating Element"
    className= "relative w-14 h-auto absolute bottom-200 right-8 z-20"
    initial={{ y: -200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    whileHover={{
      rotate: [0, 5, -5, 5, -5, 0],
      transition: { duration: 1, ease: "easeInOut" }
    }}
  />
  </div>
  </div>
</div>
</div>
</div>



 <div
  className="py-28 bg-[url('./assets/about_progress_bg.webp')] bg-cover bg-center bg-no-repeat bg-blend-multiply -mt-43"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
   
    <div>
      <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
        <Counter end={63} suffix="M+" />
      </h3>
      <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">RECOVERED TILL TODAY</p>
    </div>


     
        <div>
          <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
            <Counter end={830} suffix="+" />
          </h3>
          <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">CASE COMPLETED</p>
        </div>
    
       
        <div>
          <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
            <Counter end={50} suffix="+" />
          </h3>
          <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">WORLDWIDE AFFILIATES</p>
        </div>

        
            <div>
              <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
                <Counter end={25} suffix="+" />
              </h3>
              <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">EXPERIENCED LAWYERS</p>
            </div>
          </div>
          </div> */}

 {/* NEWS SECTION */}
      {isMobile ? (
        <section
          className="relative bg-gray-50 py-10 px-4 h-[350px] overflow-hidden mt-40 bg-center"
          style={{ backgroundImage: `url(${quote})` }}
        >
          <div className="max-w-lg mx-auto">
            <p className="text-sm tracking-widest text-[#AD9779]  uppercase">
              AEMILIUS CUPERO - AS SEEN IN THE NEWS
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-2">
              THE TRUSTED CHOICE FOR YOUR NEEDS, ENDORSED BY LEADING NEWS PUBLICATIONS!
            </h2>
          </div>
          <div className="mt-8">
            <div className="flex gap-6 justify-start items-center">
              <AnimatePresence>
                {visibleLogos.map((logo, index) => (
                  <motion.img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    className="h-10 object-contain"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
        // desktop view
      ) : (
        <section
          className="relative bg-gray-50 py-20 px-16  h-[280px] overflow-hidden bg-center mt-30"
          style={{ backgroundImage: `url(${quote})` }}
        >
          <div className="max-w-3xl mx-auto sm:px-10 pb-2 ml-[-10px]">
            <p className="text-sm tracking-widest text-[#AD9779] font-semibold uppercase">
              AEMILIUS CUPERO - AS SEEN IN THE NEWS
            </p>
            <h2 className="text-2xl text-gray-900 tracking-widest whitespace-nowrap">THE TRUSTED CHOICE FOR YOUR NEEDS, ENDORSED BY LEADING NEWS PUBLICATIONS!
              </h2>
          </div>
          <div className="mt-12 relative w-full">
            <div className="flex justify-center gap-25 items-center grayscale hover:grayscale-0">
              <AnimatePresence>
                {visibleLogos.map((logo, index) => (
                  <motion.img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    className="h-12 object-contain"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT + IMAGE SECTION */}
      {isMobile ? (
        <div className="px-4 py-12">
          <h2 className="text-sm  text-[#AD9779] tracking-widest">CONTACT US</h2>
          <h1 className="text-3xl text-gray-900 font-semibold my-4 tracking-widest">
           Speak with an Expert Today – Free Legal Consultation with No Commitment!
          </h1>
          <p className="text-sm text-gray-600 leading-6 mt-10">
            At Aemilius Cupero, we offer a free, no-obligation consultation to help you understand your legal options. Whether you’re dealing with a scam, need advice on a legal matter, or have any other questions, our experienced team is here to assist you. Contact us today to schedule your consultation and take the first step toward resolving your issue.
          </p>

          <div className="mt-8 relative">
            <img src={law} alt="Consultation" className="w-[500px] h-[500px] object-cover" />
            <motion.img
              src={puzzle}
              alt="Floating"
              className="absolute w-12 bottom-10 right-6"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              whileHover={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 1 },
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start px-24 py-28">
          <div className="max-w-xl">
            <h2 className="text-sm text-[#AD9779] tracking-widest">CONTACT US</h2>
            <h1 className="text-4xl font-semibold tracking-widest text-gray-900 my-4">
             Speak with an Expert Today – Free Legal Consultation with No Commitment!
            </h1>
            <p className="text-sm text-gray-600 leading-6">
             At Aemilius Cupero, we offer a free, no-obligation consultation to help you understand your legal options. Whether you’re dealing with a scam, need advice on a legal matter, or have any other questions, our experienced team is here to assist you. Contact us today to schedule your consultation and take the first step toward resolving your issue.
            </p>
          </div>

          <div className="relative w-[800px] -mt-20">
            <img src={law} alt="Consultation" className="w-full h-300 object-cover ml-30" />
            <motion.img
              src={puzzle}
              alt="Floating"
              className="absolute w-14 bottom-28 right-10"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              whileHover={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 1 },
              }}
            />
          </div>
        </div>
      )}

      {/* COUNTERS SECTION */}
      <div
        className={`py-20 bg-[url('./assets/about_progress_bg.webp')] bg-cover bg-center h-[400px] top-20 bg-no-repeat bg-blend-multiply ${isMobile ? "px-4" : "px-0 -mt-20"}`}
      >
        <div className={`mx-auto max-w-6xl grid gap-10 ${isMobile ? "grid-cols-1 text-center" : "grid-cols-4 text-center"}`}>
          {[
            { count: 63, suffix: "M+", label: "RECOVERED TILL TODAY" },
            { count: 830, suffix: "+", label: "CASE COMPLETED" },
            { count: 50, suffix: "+", label: "WORLDWIDE AFFILIATES" },
            { count: 25, suffix: "+", label: "EXPERIENCED LAWYERS" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-[40px] lg:text-[50px] font-bold text-white font-['Cormorant Infant'] tracking-[2.5px]">
                <Counter end={item.count} suffix={item.suffix} />
              </h3>
              <p className="text-base text-white mt-2 font-['Nunito Sans sans-serif']">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

{/* footer */}
                   <div>
                                      <div className="bg-[#1a243f] sm:flex pb-20 mt-30">
                                          <div className="sm:w-200 sm:ml-95 pt-25 ml-5 mr-5">
                                              <img src={logo} alt="" className="bg-white p-3 mb-5" />
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
                                              <div className="ml-5 mr-5 sm:pt-24">
                                                  <h1 className="text-[30px] sm:text-[22px] font-serif text-white mt-10">WHERE TO FIND US</h1>
                                                  <hr className="mt-5 mb-7 text-[#AD9779]" />
                                                  <div className="flex mb-2">
                                                      <div className="border-1 border-white bg-green-400 hover:border-transparent w-19 h-20"><IoLogoMedium className="text-white text-[45px] mt-4 ml-4" /></div>
                                                      <div className="border-1 border-white bg-blue-500 hover:border-transparent w-19 h-20"><SiLinkedin className="text-white text-[45px] mt-4 ml-4" /></div>
                                                  </div>
                                                  <div className="flex mb-2">
                                                      <div className="border-1 border-white bg-[#cd201f] hover:border-transparent w-19 h-20"><IoLogoYoutube className="text-white text-[45px] mt-4 ml-4" /></div>
                                                      <div className="border-1 border-white bg-red-700 hover:border-transparent w-19 h-20"><FaPinterest className="text-white text-[45px] mt-4 ml-4" /></div>
                                                  </div>
                                              </div>
                                              <div className="ml-5 mr-5 sm:pt-24 ">
                                                  <h1 className="text-[30px] sm:text-[22px] font-serif text-white mt-10">SAFE AND SECURE</h1>
                                                  <hr className="mt-5 mb-7 text-[#AD9779]" />
                                                  <div>
                                                      <img src={footer1} alt="" className="mb-5" />
                                                      <img src={footer2} alt="" className="mb-5" />
                                                      <img src={footer3} alt="" className="" />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="bg-[#11192e] w-full">
                                          <p className="pt-5 pb-4 text-white sm:ml-95 ml-5">Copyright 2024 Aemilius Cupero LLC | All Rights Reserved</p>
                                      </div>
                                  </div>

         </>
    );
}

export default Duediligence;
