import React from "react";
import Services from "../Components/User/Services";
import UserNavbar from "../Components/User/Navbar";
import Footer from "../Components/Footer/Footer";

const ServiceLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="flex flex-col gap-10 mx-32 my-10">
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default ServiceLayout;
