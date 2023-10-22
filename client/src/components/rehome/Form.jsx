import Button from "./Button";
import FormInput from "./FormInput";
import { useState } from "react";
import Select from "react-select";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [age, setAge] = useState(1);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [health, setHealth] = useState([]);
  const [otherInfo, setOtherInfo] = useState([]);
  const [photos, setPhotos] = useState([]);

  const breedOptions = [
    { value: "indie", label: "Indie" },
    { value: "labrador", label: "Labrador" },
    { value: "goldenretriever", label: "Golden Retriever" },
    { value: "germanshepherd", label: "German Shepherd" },
    { value: "beagle", label: "Beagle" },
    { value: "pug", label: "Pug" },
    { value: "pomeranian", label: "Pomeranian" },
    { value: "chihuahua", label: "Chihuahua" },
    { value: "shihtzu", label: "Shih Tzu" },
    { value: "poodle", label: "Poodle" },
  ];
  const cityOptions = [
    { value: "hyderabad", label: "Hyderabad" },
    { value: "bengalore", label: "Bengalore" },
    { value: "chennai", label: "Chennai" },
    { value: "newdelhi", label: "New Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "kolkata", label: "Kolkata" },
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "pune", label: "Pune" },
    { value: "surat", label: "Surat" },
    { value: "lucknow", label: "Lucknow" },
  ];
  const sexOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    data.set("photos", files);
    axios
      .post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data } = response;
      });
  }

  return (
    <div className="w-full lg:w-1/2 mt-2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="max-w-xl mx-4 mb-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            About the Dog
          </p>

          <FormInput
            inputLabel="Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="name"
            ariaLabelName="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div
            className=" bg-white text-black     
                         justify-center  
                         items-center  
                         w-full block mb-6"
          >
            <label
              htmlFor="breed"
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
            >
              Breed
            </label>
            <Select id="wotailwind" options={breedOptions} />
          </div>

          <FormInput
            inputLabel="Age (in months)"
            labelFor="age"
            inputType="number"
            inputId="age"
            inputName="age"
            placeholderText="age"
            ariaLabelName="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <div
            className=" bg-white text-black     
                         justify-center  
                         items-center  
                         w-full block mb-6"
          >
            <label
              htmlFor="breed"
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
            >
              City
            </label>
            <Select id="wotailwind" options={cityOptions} />
          </div>

          <div
            className=" bg-white text-black     
                         justify-center  
                         items-center  
                         w-full block mb-6"
          >
            <label
              htmlFor="breed"
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
            >
              Sex
            </label>
            <Select id="wotailwind" options={sexOptions} />
          </div>

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Health
            </label>

            <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
              <label className="border p-2 rounded-md">
                <input type="checkbox" />
                <span> Vaccinated</span>
              </label>
              <label className="border p-2 rounded-md">
                <input type="checkbox" />

                <span> Spay/Neuter</span>
              </label>
              <label className="border p-2 rounded-md">
                <input type="checkbox" />
                <span> Dewormed</span>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Other Info
            </label>

            <div className="grid gap-3 grid-cols-1 md:grid-cols-1">
              <label className="border p-2 rounded-md">
                <input type="checkbox" />
                <span> Good with other Dogs?</span>
              </label>
              <label className="border p-2 rounded-md">
                <input type="checkbox" />
                <span> Good with Cats?</span>
              </label>
              <label className="border p-2 rounded-md">
                <input type="checkbox" />
                <span> Good with Kids?</span>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Photos
            </label>
            <div className="grid">
              <label className="border font-semibold flex justify-center gap-1 border-gray-300 px-4 py-6 w-full  border-opacity-50 rounded-md shadow-sm text-2xl text-center text-gray-600 cursor-pointer">
                <input type="file" className="hidden"></input>
                <AiOutlineCloudUpload size="2rem" /> Upload
              </label>
            </div>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-black hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button title="Continue" type="submit" aria-label="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
