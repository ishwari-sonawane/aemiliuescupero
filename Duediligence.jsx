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

           <div className="relative h-[360px] w-full bg-black text-white">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={ptt_career}
                    alt="Due Diligence Background"
                    className="w-full h-90 opacity-70 object-cover"
                  />
                </div>
           
                {/* Overlay Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-0 py-24 flex flex-col gap-7 md:flex-row md:items-center md:justify-between ">
                  {/* Text Section */}
                  <div className="max-w-4xl space-y-6">
                    <h1 className="md:text-5xl font-semibold mb-2 mt-15">Due Diligence</h1>
                    <p className="text-base md:text-50 text-gray-200 leading-relaxed tracking-[0.2em] uppercase">
               
                     "Our due diligence services empower you to make informed <br></br>investment decisions by thoroughly researching <br></br>opportunities—whether you choose to do it yourself or <br></br>partner
                      with us for expert guidance."
                    </p>
                  </div>
          
                  {/* Breadcrumb */}
                  <div className="mt-10 md:mt-0  md:justify-end">
                    <div className=" bg-transparent bg-opacity-40 text-sm px-4 py-2 rounded-md flex items-center space-x-2">
                      {/* Using regular anchor tag */}
                      <a href="/" className="text-white hover:underline">
                        Home
                      </a>
                      <span className="text-white">→</span>
                      <span className="text-[#c1a675]">Due Diligence</span>
                    </div>
                  </div>
                </div>
              </div>
           
  <div className="sm:h-105 sm:w-105 sm:bg-gradient-to-t mask-b-from-white to-[#ccbd96] sm:absolute sm:top-185 sm:right-300 z-10 sm:rounded-full zoom-animate">

          </div>

    <div className="bg-white py-20 px-6 md:px-16 lg:px-24 mt-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

      {/* Background Circle */}
       
        {/* Left Image */}
           <div className="flex-shrink-0 z-20">
             <img
               src={h6_statue}// Replace with actual path
               alt="Lady Justice"
               className="w-full h-170 max-w-md md:max-w-lg lg:max-w-lg object-contain z-20"/>
           </div>


             {/* Right Text Section */}
               <div className="text-center md:text-left max-w-2xl">
                 <h5 className="text-sm tracking-widest text-[#a87d4a] font-semibold uppercase mb-3">
                   The Importance of Due Diligence
                 </h5>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b1c2c] leading-snug mb-6">
                   Safeguard Your Investments <br className="hidden md:block" />
                   with Trusted Due Diligence
                 </h2>
                 <p className="text-gray-700 text-base md:text-sm leading-relaxed mb-4">
                   Due diligence is a vital process for any investor, providing a detailed understanding of a company’s financial health, business model, and compliance with legal and regulatory standards. By thoroughly evaluating financial statements, operational practices, and market reputation, investors can identify potential risks and opportunities, ensuring their decisions are well-informed. This process minimizes the likelihood of falling prey to scams or fraudulent schemes, which often involve exaggerated promises or opaque business structures.
                 </p>
                 <p className="text-gray-700 text-base md:text-sm leading-relaxed">
                   Moreover, due diligence validates the authenticity of the company’s claims and ensures adherence to laws, protecting investors from liabilities associated with unethical practices. It also empowers investors to negotiate better terms and make confident, strategic decisions. In an increasingly complex financial landscape, due diligence is not just a precaution but a critical step in safeguarding investments and maximizing returns.
                 </p>
               </div>
             </div>
             </div>

             <div
  className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-1 bottom-22 bg-[url('./assets/team_fancy.webp')]">
  {/* Overlay */}
 <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(180deg, #243257E8 0%, #060B19E6 89%)",
          opacity: 1,
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      ></div>
<motion.img
  src={about_hammer}
  alt="Gavel"
  className="absolute bottom-[-80px] right-410 w-56 sm:w-64 md:w-72 z-12"
  initial={{ x: -300, opacity: 0 }}
  animate={{
 x: [ -300, 0, -10, 10, 0 ], // shake starts only after x: 0
    opacity: 1
  }}
  transition={{
    x: {
      duration: 2,
      ease: "easeOut",
      times: [0, 0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 1], // control when each keyframe happens
    },
    opacity: { duration: 1.2, ease: "easeOut" }
  }}
/>






  {/* Content */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center lg:text-left relative z-10">
    {/* Item 1 */}
    <div className="space-y-4">
      <img src="/icons/verify.svg" alt="Verify" className="mx-auto lg:mx-0 h-10" />
      <h3 className="text-lg font-semibold text-white">Verify the Company</h3>
      <p className="text-lg text-gray-300">
        Check the business name, address, registration, and online presence.
        Make sure the website is professional and contact details are legitimate.
      </p>
    </div>

    {/* Item 2 */}
    <div className="space-y-4 border-l-1 h-65 pl-6 ">
      <img src="/icons/red-flags.svg" alt="Red Flags" className="mx-auto lg:mx-0 h-10" />
      <h3 className="text-lg font-semibold text-white">Watch for Red Flags</h3>
      <p className="text-lg text-gray-300">
        Stay cautious of urgent messages, unclear details, or unprofessional language,
        as scammers often use these tactics to pressure you into making quick decisions.
      </p>
    </div>

    {/* Item 3 */}
    <div className="space-y-4 border-l-1 h-65 pl-6">
      <img src="/icons/examine.svg" alt="Examine" className="mx-auto lg:mx-0 h-10" />
      <h3 className="text-lg font-semibold text-white">Examine the Offer</h3>
      <p className="text-lg text-gray-300">
        Be cautious of offers that seem too good to be true, as they are often
        designed to deceive and exploit. Always verify the legitimacy before committing.
      </p>
    </div>

    {/* Item 4 */}
    <div className="space-y-4 border-l-1 h-65 pl-6">
      <img src="/icons/review.svg" alt="Reviews" className="mx-auto lg:mx-0 h-10" />
      <h3 className="text-lg font-semibold text-white">Read Reviews</h3>
      <p className="text-lg text-gray-300">
        Check reviews on reliable platforms and be cautious of suspiciously
        positive or fake feedback that could indicate a scam.
      </p>
    </div>

    {/* Item 5 */}
    <div className="space-y-4 border-l-1 h-65 pl-6">
      <img src="/icons/payment.svg" alt="Payments" className="mx-auto lg:mx-0 h-10" />
      <h3 className="text-lg font-semibold  text-white">Secure Payments</h3>
      <p className="text-lg text-gray-300">
        Legitimate businesses accept secure payment methods like credit or
        debit cards or PayPal, rather than cryptocurrencies or gift cards.
      </p>
    </div>
  </div>
</div>


  <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 text-[#10172C]">
      {/* Sidebar */}
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
      {/* Header */}
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

      {/* Steps */}
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

</div>



          <div className="sm:flex flex-col lg:flex-row md:flex-wrap sm:items-start">
     <section
  className="relative bg-gray-50 bg-center md:py-16 overflow-hidden w-500"
  style={{ backgroundImage: `url(${quote})` }} // Ensure this image is in /public/assets
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
  {/* Left Side - Text Section */}
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
 <div className="md:w-full flex sm:justify-end md:pr-1 sm:ml-[885px] "> {/* Flex container, aligns content to the right */}
  <div className="w-[830px] -mt-80 relative sm:-mt-77 sm:w-full">
    <img
      src={law}
      alt="Consultation"
      className="w-full h-300 object-cover"
      
    />
    {/* Floating puzzle icon positioned on the image edge */}
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
    {/* Stat 1 */}
    <div>
      <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
        <Counter end={63} suffix="M+" />
      </h3>
      <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">RECOVERED TILL TODAY</p>
    </div>


      {/* Stat 2 */}
        <div>
          <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
            <Counter end={830} suffix="+" />
          </h3>
          <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">CASE COMPLETED</p>
        </div>
    
        {/* Stat 3 */}
        <div>
          <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
            <Counter end={50} suffix="+" />
          </h3>
          <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">WORLDWIDE AFFILIATES</p>
        </div>

         {/* Stat 4 */}
            <div>
              <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
                <Counter end={25} suffix="+" />
              </h3>
              <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">EXPERIENCED LAWYERS</p>
            </div>
          </div>
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
                



         </>
    );
}

export default Duediligence;