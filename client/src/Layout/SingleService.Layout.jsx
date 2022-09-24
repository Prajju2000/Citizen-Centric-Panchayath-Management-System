import React from "react";

import UserNavbar from "../Components/User/Navbar";
import SingleService from "../Components/User/Services/SingleService";
import Footer from "../Components/Footer/Footer";

const SingleServiceLayout = () => {
  return (
    <>
      <UserNavbar />
      <SingleService />
      <Footer />
    </>
  );
};

export default SingleServiceLayout;
