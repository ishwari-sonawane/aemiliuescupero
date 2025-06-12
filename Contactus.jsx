import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import logo from "./assets/logo.webp"
import {Link} from "react-router-dom"
import React from 'react'
import "./App.jsx"
import { SlCalender } from "react-icons/sl";
import { PiMapPinLineBold } from "react-icons/pi";
import mail from"./assets/mail.png"
import { BsEnvelopePaper } from "react-icons/bs";
import { IoLogoMedium } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import footer1 from "./assets/footer1.webp"
import footer2 from "./assets/footer2.webp"
import footer3 from "./assets/footer3.webp"
import { useMediaQuery } from 'react-responsive';

function Contactus( ) {
   const isMobile = useMediaQuery({ maxWidth: 1368 });
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



{/* page 1 */}

                  {isMobile ? (
  // ✅ Mobile layout
  <div className="w-full h-auto bg-[url('./assets/c1.webp')] bg-cover bg-center flex flex-col items-center px-6 py-20 relative">
    <div className="w-full text-center text-white z-10">
      <h1 className="text-4xl font-serif font-light mb-4">Contact Us</h1>
      <p className="text-[5vw] leading-relaxed uppercase">
        "Get in touch with us today for expert legal advice and personalized assistance. We’re here to help with any questions or concerns you may have."
      </p>
    </div>
    <div className="mt-10 flex justify-center z-10">
      <nav className="bg-white/30 backdrop-blur-sm px-4 py-3 flex items-center space-x-3">
        <a href="#" className="text-white font-semibold">Home</a>
        <a href="#" className="text-[#bb7742] font-medium">About Us</a>
      </nav>
    </div>
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
) : (
  // ✅ Desktop layout
  <div className="w-full h-auto bg-[url('./assets/c1.webp')] bg-cover bg-center flex flex-row items-start px-24 py-20 relative">
    <div className="w-2/3 text-left text-white z-10">
      <h1 className="text-6xl font-serif font-light mb-4">Contact Us</h1>
      <p className="text-lg leading-relaxed uppercase">
        "Get in touch with us today for expert legal advice and personalized assistance. We’re here to help with any questions or concerns you may have."
      </p>
    </div>
    <div className="w-1/3 mt-0 flex justify-end z-10">
      <nav className="bg-white/30 backdrop-blur-sm px-6 py-3 flex items-center space-x-6">
        <a href="#" className="text-white font-semibold">Home</a>
        <a href="#" className="text-[#bb7742] font-medium">About Us</a>
      </nav>
    </div>
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
)}






                {/* <div className="relative w-full">
                    <div className="w-full h-[600px]">
                        <iframe
                            title="Google Map"
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.742779225648!2d-106.95675692386607!3d44.77085877107082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534e1b832f2a73d1%3A0xabea78c7db06b4f5!2s1309%20Coffeen%20Ave%20STE%201200%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1717662200000!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="bg-[#0f1f3d] text-white px-8 py-10 absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[62%] sm:h-fit h-140 ">
                        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-left">
                            <div className="border-white/40 pr-4 sm:border-l sm:px-4">
                                <div className="flex items-start gap-3">
                                    <SlCalender className="text-[#b79f7f] text-3xl mt-1 sm:text-6xl sm:hover:py-1 transition-all " />
                                    <div>
                                        <h3 className="text-xl font-serif font-semibold text-white mb-2 sm:text-2xl sm:font-normal sm:pl-3">Time Working</h3>
                                        <p className='sm:pt-6 sm:pl-3'><strong>Mon – Fri:</strong> (9.00 am to 6.00 pm)</p>
                                        <p className='sm:pl-3'><strong>Sat – Sun:</strong> (Closed)</p>
                                        <p className="text-[#b79f7f] mt-1 sm:mt-2 sm:pl-3">+1 (307) 223-040</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:border-white/40 px-4 sm:border-l sm:px-4">
                                <div className="flex items-start gap-3">
                                    <PiMapPinLineBold className="text-[#b79f7f] text-3xl mt-1 sm:text-6xl sm:hover:py-1 transition-all" />
                                    <div>
                                        <h3 className="text-xl font-serif font-semibold text-white mb-2 sm:text-2xl sm:font-normal sm:pl-3">United States</h3>
                                        <p className='sm:pl-3 sm:pt-6'>1309 Coffeen Avenue STE</p>
                                        <p className='sm:pl-3'>1200 Sheridan, Wyoming</p>
                                        <p className='sm:pl-3'>82801 USA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pl-4">
                                <div className="flex items-start gap-3">
                                    <PiMapPinLineBold className="text-[#b79f7f] text-3xl mt-1 sm:text-6xl sm:hover:py-1 transition-all " />
                                    <div>
                                        <h3 className="text-xl font-serif font-semibold text-white mb-2 sm:text-2xl sm:font-normal sm:pl-3">Hong Kong</h3>
                                        <p className='sm:pt-6'>Lippo Centre, 89 Queensway,</p>
                                        <p className='sm:pl-3'>Admiralty, Hong Kong</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                    {isMobile ? (
  // 👇 Mobile View
  <div className="relative w-full">
    <div className="w-full h-[400px]">
      <iframe
        title="Google Map"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=..."
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div className="bg-[#0f1f3d] text-white px-4 py-8 absolute bottom-[-320px] left-1/2 transform -translate-x-1/2 w-[95%] h-auto">
      <div className="grid gap-6 text-left">
        {/* Time Working */}
        <div className="flex gap-3">
          <SlCalender className="text-[#b79f7f] text-2xl mt-1" />
          <div>
            <h3 className="text-lg font-serif font-semibold">Time Working</h3>
            <p><strong>Mon – Fri:</strong> 9.00 am – 6.00 pm</p>
            <p><strong>Sat – Sun:</strong> Closed</p>
            <p className="text-[#b79f7f] mt-1">+1 (307) 223-040</p>
          </div>
        </div>

        {/* US Address */}
        <div className="flex gap-3">
          <PiMapPinLineBold className="text-[#b79f7f] text-2xl mt-1" />
          <div>
            <h3 className="text-lg font-serif font-semibold">United States</h3>
            <p>1309 Coffeen Avenue STE</p>
            <p>1200 Sheridan, Wyoming</p>
            <p>82801 USA</p>
          </div>
        </div>

        {/* Hong Kong Address */}
        <div className="flex gap-3">
          <PiMapPinLineBold className="text-[#b79f7f] text-2xl mt-1" />
          <div>
            <h3 className="text-lg font-serif font-semibold">Hong Kong</h3>
            <p>Lippo Centre, 89 Queensway,</p>
            <p>Admiralty, Hong Kong</p>
          </div>
        </div>
      </div>
    </div>
  </div>
) : (
  // 👇 Desktop View
  <div className="relative w-full">
    <div className="w-full h-[600px]">
      <iframe
        title="Google Map"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=..."
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div className="bg-[#0f1f3d] text-white px-8 py-10 absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[62%]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-left">
        {/* Time Working */}
        <div className="border-white/40 pr-4 sm:border-l sm:px-4">
          <div className="flex items-start gap-3">
            <SlCalender className="text-[#b79f7f] text-3xl mt-1 sm:text-6xl" />
            <div>
              <h3 className="text-xl font-serif font-semibold mb-2">Time Working</h3>
              <p><strong>Mon – Fri:</strong> 9.00 am to 6.00 pm</p>
              <p><strong>Sat – Sun:</strong> Closed</p>
              <p className="text-[#b79f7f] mt-2">+1 (307) 223-040</p>
            </div>
          </div>
        </div>

        {/* US Address */}
        <div className="sm:border-white/40 px-4 sm:border-l sm:px-4">
          <div className="flex items-start gap-3">
            <PiMapPinLineBold className="text-[#b79f7f] text-3xl mt-1 sm:text-6xl" />
            <div>
              <h3 className="text-xl font-serif font-semibold mb-2">United States</h3>
              <p>1309 Coffeen Avenue STE</p>
              <p>1200 Sheridan, Wyoming</p>
              <p>82801 USA</p>
            </div>
          </div>
        </div>

        {/* Hong Kong Address */}
        <div className="pl-4">
          <div className="flex items-start gap-3">
            <PiMapPinLineBold className="text-[#b79f7f] text-3xl mt-1 sm:text-6xl" />
            <div>
              <h3 className="text-xl font-serif font-semibold mb-2">Hong Kong</h3>
              <p>Lippo Centre, 89 Queensway,</p>
              <p>Admiralty, Hong Kong</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}



                <div className="flex flex-col items-center text-center py-16 px-4 mt-15 bg-white sm:mt-20">
                    <BsEnvelopePaper className="text-[#B28B4A] text-6xl mb-4 sm:mb-10 mt-3 transition-transform duration-500 md:hover:scale-110 sm:filter sepia sm:hue-rotate-[325deg] saturate-200" />
                    <h2 className="text-3xl md:text-[1.6vw] leading-12 font-serif text-[#0f1f3d] font-medium mb-4 sm:leading-10 mt-3">
                        You need help with legal matters,
                        <br />
                        <span className="text-[#0f1f3d]">Have a question or need more information? Just drop us a line!</span>
                    </h2>
                    <p className="text-[4.6vw] text-gray-600 sm:text-[0.84vw] sm:pt-5 sm:leading-6">
                        Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. <br /> We will be happy to answer your questions.
                    </p>
                </div>

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

export default Contactus;