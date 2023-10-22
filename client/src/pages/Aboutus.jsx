import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img500300 from "../assets/500x300.jpg";
import img500301 from "../assets/500x301.jpg";
import img600360 from "../assets/600x360.jpg";
import img600361 from "../assets/600x361.jpg";
import img500303 from "../assets/500x303.jpg";
import img502302 from "../assets/502x302.jpg";

const Aboutus = () => {
  return (
    <div>
      <div>
        <Navbar />

        <section className="text-gray-700 body-font ">
          <div className="container px-5 py-24 mx-auto flex flex-wrap ">
            <div className="flex w-full mb-20 flex-wrap container mx-auto flex-col lg:flex-row py-5 lg:py-10 lg:mt-10 mt-12 ">
              <h1 className="sm:text-3xl  font-general-medium text-2xl font-semibold title-font text-primary-dark text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                About Pawrents <br /> & What We Do
              </h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed  font-general-medium text-xl text-primary-dark ">
                Welcome to Pawrents, our online dog adoption and rehoming
                organization. We are committed to finding loving homes for
                rescued dogs, ensuring they receive the care and attention they
                deserve. Our platform provides a simple, streamlined adoption
                process, connecting potential adopters with their perfect furry
                companion. We focus on responsible adoption practices. Join us
                in changing lives and creating a brighter future for dogs.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={img500300}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={img500301}
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={img600360}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={img600361}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={img500303}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={img502302}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
