import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import logo from "./assets/logo.webp"
import {Link} from "react-router-dom"




// import Navbar from './Navbar';
import ptt_area from './assets/ptt_area.webp'; // Ensure the path is correct
import h3_about_bg from './assets/h3_about_bg.webp'; 
import h3_video_bg from './assets/h3_video_bg.webp'; 
import { FaCheckCircle } from "react-icons/fa";
import balance_women from './assets/balance_women.webp'; 
import about_progress_bg from "./assets/about_progress_bg.webp";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaPlay } from 'react-icons/fa';
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react'

import { IoLogoMedium } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import footer1 from "./assets/footer1.webp"
import footer2 from "./assets/footer2.webp"
import footer3 from "./assets/footer3.webp"





          const LinearProgressBar = ({ percentage, label }) => {
            const [width, setWidth] = useState(0);

            useEffect(() => {
              const timer = setTimeout(() => {
                setWidth(percentage);
              }, 300); // slight delay for animation
              return () => clearTimeout(timer);
            }, [percentage]);

            return (
              <div className="mb-6 w-full">
                {/* Label and % */}
                <div className="flex justify-between items-center text-white text-sm mb-1">
                  <span>{label}</span>
                  <span>{percentage}%</span>
                </div>

                {/* Track and Animated Fill */}
                <div className="w-full h-2 rounded-full bg-gray-500/30">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${width}%`,
                      backgroundColor: "#c0a16b",
                    }}
                  />
                </div>
              </div>
            );
          };
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

function Services( ) {
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


            <div id="pxl-pagetitle">
                      <section
                        className="w-full relative bg-cover bg-center py-20 sm:py-24 lg:py-32"
                        style={{ backgroundImage: `url(${ptt_area})` }}
                      >
                        {/* Overlay */}
                         <div className="absolute inset-0 bg-black/30" />
          
                        {/* Content Wrapper */}
                        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          
                          {/* Breadcrumb */}
                          <div className="mb-6">
                            <div className="flex items-center text-white text-sm backdrop-blur-sm bg-white/10 px-10 py-3 rounded-md w-fit space-x-2 absolute left-320 bottom-20">
                              <a href="/" className="hover:underline pxl-breadcrumb">Home</a>
                              <span className="mx-1">→</span>
                              <a href="/services" className="hover:underline pxl-breadcrumb">Services</a>
                            </div>
                          </div>
          
                          {/* Main Heading and Subtext */}
                          <div className="w-full lg:w-2/3 xl:w-1/2 relative  right-38">
                            <h1 className="text-5xl font-bold text-white  tracking-[-0.025em] mb-[5px] capitalize">Services</h1>
                        <p className="text-base leading-relaxed text-white max-w-2xl uppercase tracking-[0.2em] mt-9">
                              "Our legal services are designed to provide expert guidance and effective representation, ensuring the best possible outcomes for our clients in a wide range of legal matters."
                            </p>
          
                          </div>
                                 
                        </div>
                
                      </section>
                    </div>


                     <div 
                     className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-5"
                    style={{ backgroundImage: `url(${h3_about_bg})`, // Use ptt_area correctly
                   backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat' 
                     }} >


                       <div className=" py-16 px-4 sm:px-6 lg:px-8">
                                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                      
                                    {/* Left Side: Text Content */}
                                    <div>
                                      {/* Section Title */}
                                      <h1 className="text-lg text-[#a89155] uppercase tracking-wide mb-2">
                                        About Aemilius Cupero
                                      </h1>
                      
                                      {/* Main Heading */}
                                        <h2 className="text-[44px] font-semibold text-gray-900 leading-tight 	tracking-[0.06em] mb-4">
                                        We’re Not Just Lawyers, <br /> We’re Advocates For Justice And Right
                                      </h2>
                                    </div>
                      
                                    {/* Right Side: Paragraph + List */}
                                    <div>
                                      {/* Description */}
                                      <p className="text-gray-700 text-sm break-words font-normal text-lg mb-6 text-2xl">
                                        Since launching, our firm has grown significantly. Our expanding team includes over 40 lawyers and chartered executives with combined expertise in divorce law, financial law, and more sensitive cases. This enables us to provide the best family law service in the South West and beyond.
                                      </p>
                      
                                      {/* Key Points */}
                                      <ul className="text-gray-700 space-y-4 mt-7">
                                        {[
                                          "Reassuring legal answers",
                                          "We will defend your rights against powerful interests",
                                          "We provide legal services that benefit our clients immediately",
                                        ].map((item, index) => (
                                          <li key={index} className="flex items-start space-x-3">
                                            <FaCheckCircle className="text-[#0a0a0a] mt-1 shrink-0" />
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                  </div>
                                </div>
                                <br></br>
                                                        <div className="relative w-full max-w-6xl mx-auto px-6 bg-transparent mt-6">
                                                        <img
                                                          src={h3_video_bg}
                                                          alt="Video Preview"
                                                          className="w-full h-auto rounded-lg bg-transparent"
                                                        />
                                                        
                                                        {/* Overlay Play Button */}
                                                        <button className="absolute inset-0 flex items-center justify-center">
                                                                    <a
                                                                      href="https://youtu.be/VW7QV9-T-mo"
                                                                      target="_parent"
                                                                      rel="noopener noreferrer"
                                                                      className="rounded-full p-6 hover:scale-110 transition duration-300 shadow-lg bg-transparent"
                                                                    >
                                                                      <MdOutlinePlayCircleFilled className="h-20 w-20 text-white" />
                                                                    </a>
                                                                  </button>
                                                      </div>
                                                      
                                                    <br></br>
                                                <div className="bg-[#ad9779] py-5">
                                              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
                      
                                        </div>

                          <div className="py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto tracking-[0.04em] uppercase">
          Every Customer When Using Our services Is Done By Us Efficiently And Sincerely
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-9xl mx-auto capitalize mt-10">
         

        PowerLegal reputation is built upon years of practical experience in court litigation and arbitration in New York. Over the course of time, we have earned our clients’ trust with our superior 
        services and extended our reach globally. In addition, other successful practices have been established and developed to match our clients’ many requirements such as bankruptcy & restructuring,
        labor & employment, criminal defense, contract law and corporate compliance.
      </p>
      </div>
    </div>

                    <div className="w-30 h-[2px] mx-auto my-4 bg-gradient-to-r from-[#b69a74] via-[#cbb18c] to-[#b69a74]" />
                 <div className="min-h-screen bg-[#f9f9f9] flex flex-col md:flex-row justify-center items-center gap-6 px-4 py-10">


 {/* Left Sidebar Box */}
            
                  {/* Contact Box */}
                  <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 max-w-7xl mx-auto">
                        <div className="bg-[#17203a] text-white p-10 mt-200 h-auto w-full md:w-[350px]">
                        <h3 className="text-lg font-semibold uppercase tracking-wide">Let's Get a</h3>
                        <h2 className="text-xl font-bold text-[#c1a675] uppercase mb-4">Free Consultation</h2>
                        <h5>Please don’t hesitate to reach out to us.<br></br> We will respond within 1-2 business<br></br> days. Alternatively, feel free to call us <br></br>now.</h5>
                        <br></br>

                        <div className="border-t border-[#c1a675] w-32 mb-5"></div>
                      {/* Address Block */}
                      <br></br>
                        <div className="flex items-start gap-3 mb-4">
                          <svg className="w-5 h-5 text-[#c1a675] mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path d="M3 5h2l3 5-1.5 1.5a11 11 0 006 6L14 19l5 3v2a1 1 0 01-1 1h-1a16 16 0 01-16-16V6a1 1 0 011-1h2z" />
                          </svg>
                          <a href="tel:+13072230400" className="hover:underline text-sm sm:text-base">
                            +1 (307) 223-0400
                          </a>
                        </div>
                                    {/* Email */}
                        <div className="flex items-start gap-3 mb-4">
                          <svg className="w-5 h-5 text-[#c1a675] mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path d="M16 12h2a2 2 0 002-2V6a2 2 0 00-2-2h-2M8 6H6a2 2 0 00-2 2v4a2 2 0 002 2h2m0 4v-2a2 2 0 012-2h4a2 2 0 012 2v2m-4 0h.01" />
                          </svg>
                          <a href="mailto:support@aemilius-cupero.net" className="hover:underline text-sm sm:text-base break-all">
                            support@aemilius-cupero.net
                          </a></div>
                          <br></br>
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-[#c1a675] mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <a
                          href="https://www.google.com/maps?q=1309+Coffeen+Avenue+STE+1200+Sheridan,+Wyoming+82801+USA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-sm sm:text-base"
                        >
                          1309 Coffeen Avenue STE 1200<br />
                          Sheridan, Wyoming 82801 USA
                        </a>
                      </div>

                    {/* CTA Button */}
                
                                <a
                        href="https://aemilius-cupero.com/contactus.html"
                        className="block bg-[#c1a675] text-center text-[#17203a] font-semibold text-sm py-3 mt-4 rounded-md cursor-pointer hover:bg-[#d4b27e] transition"
                      >
                        CONTACT US FOR MORE INFO.
                      </a>
          </div>
            
              

                {/* Right Content Box */}
                <main className="text-[#6D6D6D] w-full 	md:w-[750px] p-8 shadow-lg flex-grow bg-gray-100  justify-center text-gray-800 body-font-family: 'Nunito Sans', sans-serif h-400">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                  <h2 className="text-3xl font-semibold tracking-wide mb-4 border-spacing-0.5  max-w-7xl mx-auto px-4 link-color-active: #ad9779 sm:px-6 lg:px-10">
                    SCAMS: A LEGAL PERSPECTIVE ON PREVENTION AND PROTECTION
                  </h2>

                  <p className="mb-6">
                    Scams are fraudulent schemes designed to deceive individuals into providing money, personal information, or assets. From a legal standpoint, scams can result
                    in significant financial loss, identity theft, and other serious legal consequences. As legal professionals, it is crucial to understand how scams operate and how 
                    individuals can protect themselves against such criminal activities. 
                  </p>

                  <h3 className="text-xl font-semibold mb-2 mt-4">How Scams Operate:</h3>
                  <p className="mb-6">
                    The initial contact in a scam often occurs through unsolicited communications—whether by email, phone, text, or social media. Scammers typically impersonate 
                    legitimate organizations or individuals, such as banks, government agencies, or well-known businesses, in order to gain the victim’s trust. This is often followed by
                    manipulation of the victim’s emotions—such as fear, greed, or sympathy—to create a sense of urgency. Victims may be pressured into taking swift action, such as
                      sending money, making purchases, or disclosing sensitive personal or financial information. 
                      <br></br>
                      From a legal perspective, these fraudulent actions are a form of misrepresentation and deception, which can give rise to claims of fraud. Once the scammer receives
                      payment or personal information, they often vanish, leaving the victim with significant losses, whether financial or in terms of identity theft. In some cases, 
                      scams continue for extended periods, with perpetrators making repeated requests for money or further data. 
                  </p>

                  <h3 className="text-xl font-semibold mb-2">Signs of a Scam:</h3>
                  <ol className="list-decimal list-inside space-y-2 mb-6">
                    <li><strong>Unsolicited Contact:</strong> Unsolicited calls, emails, or messages from unknown sources should raise immediate suspicion. Scammers often initiate contact with individuals who have not previously engaged with them. </li>
                    <li><strong>Too Good to Be True Offers:</strong>  Promises of extraordinary returns, large sums of money, or minimal risk should be viewed with skepticism. Legal contracts that appear unusually favorable without any clear terms or documentation are often fraudulent. </li>
                    <li><strong>Requests for Personal or Financial Information:</strong> Legitimate entities do not ask for sensitive data (like passwords, credit card numbers, or Social Security numbers) over unsecured channels such as email or phone. Such requests are a hallmark of fraud. </li>
                    <li><strong>Urgency or High-Pressure Tactics:</strong>  Scammers often pressure victims into acting immediately, threatening dire consequences or offering time-sensitive opportunities. Legally, this is a common tactic used to manipulate victims into making rash decisions without considering the consequences. </li>
                    <li><strong>Lack of Transparency:</strong> Scammers are typically reluctant to provide verifiable details about their identity or the legitimacy of their offer. A lack of transparency can indicate fraudulent intent.</li>
                  </ol>

                  <h3 className="text-xl font-semibold mb-2">Legal Considerations and Protections :</h3>
                  <p className="mb-6">
                    Victims of scams may have legal recourse, depending on the nature of the fraud. In cases of financial loss, victims may be able to seek compensation through civil
                    litigation, including filing a fraud claim or pursuing a chargeback through their bank or credit card company. If identity theft occurs, victims may be entitled to 
                    legal remedies under data protection and privacy laws. Criminal prosecution may also be pursued against the perpetrators under relevant fraud statutes, depending on 
                    the jurisdiction. 
                  </p>

                  <h3 className="text-xl font-semibold mb-2">Preventative Measures:</h3>
                  <p>
                  To avoid falling victim to scams, individuals should exercise caution and always verify unsolicited offers or requests for personal information. Legal advice should
                    be sought if there is any doubt about the legitimacy of a contact or an offer. In addition, individuals should familiarize themselves with common scams and understand
                    their rights when it comes to personal data protection.
                  </p>
                  </div>
                </main>
              </div>
              </div>
              </div>


               <div className= "text-white py-16 px-8 bg-cover h-210 bg-center relative bg-[#0e1a35] text-white"
                          style={{ backgroundImage: `url(${about_progress_bg})` }}> 
              
                          <div className="relative z-10 max-w-7xl mx-auto px-6 py-2 grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
                          
                            {/* Left Column */}
                            <div>
                              <p className="text-sm tracking-widest text-[#c0a16b] mb-2">WHY CHOOSE US</p>
                              <h2 className="text-4xl font-bold leading-snug mb-6">
                                Your Trusted Partner<br />in Legal Solutions
                              </h2>
                              <p className="text-gray-300 mb-8 text-lg leading-relaxed text-gray-300">
                                At our law firm, we pride ourselves on being your trusted partner in <br></br>legal solutions.
                                With years of expertise and a commitment to <br></br>excellence, we offer tailored legal
                                services that address your unique<br></br> needs. Whether you're navigating complex legal
                                challenges or <br></br>seeking straightforward advice, our team is dedicated to providing<br></br>
                                reliable, effective, and results-driven representation. Your peace of <br></br>mind and success
                                are our top priorities, and we’re here to guide you <br></br>every step of the way.
                              </p>
                            </div>


                              {/* Right Column - Icon and Bars */}
                                          <div className="flex flex-col justify-center space-y-6">
                                            <div className="flex items-center justify-center w-20 h-20 shadow-lg border-2 border-[#c0a16b] cursor-pointer 
                                                            transition-transform duration-300 group-hover:animate-zoom  absolute top-8 right-125">
                                              <PiUsersThreeBold className="text-[#c0a16b] w-10 h-10 group-hover:animate-zoom " />
                                            </div>
                            
                                            {/* Progress Bars */}
                                          <div className="py-10 px-4 sm:px-8">
                                        <div className="max-w-2xl mx-auto">
                                          <LinearProgressBar label="Case Success Rate" percentage={85} />
                                          <LinearProgressBar label="Client Satisfaction" percentage={93} />
                                          <LinearProgressBar label="Compliance with Deadlines" percentage={95} />
                                        </div>
                                      </div>
                                          </div>
                                        </div>


                    {/* Lower Section with 3 Columns */}
          

            <div className="max-w-7xl mx-auto box-border grid md:grid-cols-3 gap-6 mt-30 bg-white text-black p-8 rounded shadow-lg h-80 ">
              <div className="text-center px-4">
                <div className="text-[#b49c73] mb-4">
                <svg className="w-14 h-14 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6l2 4h4l-2 4 2 4h-4l-2 4-2-4H6l2-4-2-4h4l2-4z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-medium mb-3">Ethical Standards</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                A law firm that operates with integrity and adheres to high ethical standards earns respect and trust from clients, peers, and the community.
              </p>
            </div>


   {/* Proven Track Record */}
            <div className="text-center px-6  border-b-gray-50 border-l-1 h-50 scheme-light">
              <div className="text-[#b49c73] mb-4">
                <svg className="w-14 h-14 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 118 0v2m-8 0H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4m-8 0v2a2 2 0 104 0v-2" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-medium mb-3">Proven Track Record</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                A history of successfully handled cases and satisfied clients demonstrates reliability and the firm’s ability to deliver results.
              </p>
            </div>


  {/* Personalized Attention */}
            <div className="text-center px-6  border-b-gray-50 border-l-1 h-50">
              <div className="text-[#b49c73] mb-">
                <svg className="w-14 h-14 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8M8 8h8M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-medium mb-3">Personalized Attention</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Treating each case with individual care, rather than a one-size-fits-all approach, ensures that clients feel valued and understood.
              </p>
            </div>
              
          </div>
          </div>


  <section className="bg-white text-center py-16 px-4 mt-30">
                <div className="max-w-3xl mx-auto">
                  {/* Subheading */}
                  <p className="text-sm uppercase tracking-widest text-[#b19777] mb-2">Testimonials</p>

                  {/* Main heading */}
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#0d1220] mb-6">
                    What Clients Say About Us?
                  </h2>

                  {/* Quote icon */}
                  <div className="text-4xl text-[#b19777] mb-4">”</div>

                  {/* Quote text */}
                  <p className="text-[#0d1220] md:text-lg text-lg leading-relaxed mb-10 px-0">
                    "I am very happy with the service I received from Aemilius Cupero. They helped me recover my money back and I would recommend them to anyone who is looking to recover their funds."
                  </p>

                  {/* Client image and info */}
                      <div className="flex flex-col items-center">
                    <img
                      src="https://www.aemilius-cupero.com/wp-content/uploads/2025/01/Edgar-Baker.webp"
                      alt="client"
                      className="w-16 h-16 rounded-full border-2 border-gray-300 border-[#b19777] mb-4"
                    />
                    {/* Stars */}
                    <div className="flex space-x-1 mb-2 text-[#b19777]">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09L5.64 12.545.763 8.91l6.37-.927L10 2l2.867 5.983 6.37.927-4.877 3.636 1.518 5.545z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="font-bold text-[#0d1220] tracking-widest">MR. EDGAR BAKER</h3>
                    <p className="text-gray-500 text-sm">Scotland</p>
                  </div>

                  {/* Dots for slider simulation */}
                  <div className="flex justify-center items-center space-x-2 mt-8">
                  {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-1 w-5 rounded-full ${
                    i === 0 ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                ></span>
              ))}
            </div>
            </div>
              </section>


 <section className="relative w-full overflow-hidden absolute h-200">
                {/* --- split-screen background layer --- */}
                <div className="absolute inset-0 hidden md:grid grid-cols-2 z-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center  grayscale h-200"
                    style={{ backgroundImage: `url(${h3_about_bg})` }}
                  />
                  </div>
                  <div className="relative">
                {/* <div
                  className=" relative inset-0 bg-cover bg-center opacity-20"
                  style={{ Image: `url(${balance_women})` }}
                                    ></div> */}
                  <div className="sm:absolute sm:top-0 sm:right-0">
                <img 
                  src={balance_women} 
                  alt="Balanced Woman" 
                  className="md:w-[610px] md:h-[850px] object-contain"
                />
              </div>

              <div className="absolute inset-0 bg-white opacity-10" />
              
            </div>

                {/* --- content layer --- */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
                  {/* ---------- LEFT : heading + form ---------- */}
                     
                  <div className="md:col-span-7 text-[#0d1220]">
                    <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
                      Get a Free Consultation!
                    </h1>


                    <p className="max-w-lg mb-10 leading-relaxed">
                      We offer a free consultation with no obligation. Get expert legal
                      advice and understand your options without any pressure or cost.
                      Contact us today to get started!
                    </p>

                    {/* ---- form ---- */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="mb-1 font-medium">
                          First Name<span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          className="border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#b19777]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-1 font-medium">
                          Last Name<span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          className="border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#b19777]"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="mb-1 font-medium">
                          Phone Number<span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          className="border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#b19777]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-1 font-medium">
                          Country<span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          className="border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#b19777]"
                        />
                      </div>

                      <div className="flex flex-col md:col-span-2">
                        <label className="mb-1 font-medium">
                          Email Address<span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          className="border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#b19777]"
                        />
                      </div>

                      <div className="flex flex-col md:col-span-2">
                        <label className="mb-1 font-medium">
                          Explain In Brief<span className="text-red-600">*</span>
                        </label>
                        <textarea
                          rows="4"
                          className="border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#b19777] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="md:col-span-2 w-32 bg-[#836100] text-white py-2 font-medium hover:bg-[#6e5200] transition"
                      >
                        Submit
                      </button>
                    </form>
                  </div>

                  {/* ---------- RIGHT : navy info card ---------- */}
                  <div className="md:col-span-5 flex md:justify-end absolute left-200 top-27">
                    <div className="bg-[#171b3a] text-white px-8 py-12 w-95 h-165">
                      <h3 className="text-center mb-6 tracking-widest">UNITED STATES</h3>
                      <p className="text-center text-lg leading-relaxed mb-6">
                        1309 Coffeen Avenue STE 1200 Sheridan,<br />
                        Wyoming 82801 USA
                      </p>
                      <hr className=" border-gray-600 mb-6" />
                      <h5 className='text-center text-lg leading-relaxed mb-6'>HONG KONG</h5>
                      <p className="text-center text-lg leading-relaxed mb-6">
                        Lippo Centre, 89 Queensway, Admiralty, Hong Kong
                      </p>

                      <hr className="border-gray-600 mb-6" />
                      <p className="text-lg leading-relaxed mb-2">
                        We will respond to your inquiry within 24 hours via email, or feel
                        free to call us directly. We’re always here to assist you. Thank
                        you!
                      </p>
                    <div className="flex items-center justify-center space-x-2 mt-15 text-100">
                      <svg
                        className="w-10 h-5 fill-current text-[#b19777] "
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884l3.311-.35a1 1 0 01.98.45l2.121 3.182a1 1 0 01-.217 1.365l-1.475 1.058a11.037 11.037 0 005.016 5.016l1.058-1.475a1 1 0 011.365-.217l3.182 2.121a1 1 0 01.45.98l-.35 3.311a1 1 0 01-.986.879C5.633 23.99.01 18.368.01 11.988a1 1 0 01.879-.986z" />
                      </svg>
                      <a href="tel:+1307223040" className="hover:underline text-lg">
                            +1 (307) 223-040
                          </a>
                      </div>
                    </div>
                    </div>
              </div>
              </section>   

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

export default Services;