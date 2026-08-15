"use client";

import Landingpage from "./components/Landingpage";
import Practitioners from "@/app/practitioners/page";
import About from "@/app/about/page";
import Service from "@/app/services/page";
import Contact from "@/app/contact/page";
import Footer from "@/app/footer/page";

function Home() {
  return (
    <>
      <Landingpage />
      <About/>
      <Practitioners />
      <Service/>
      <Contact/>
      <Footer/>
      
    </>
  );
}
export default Home;
