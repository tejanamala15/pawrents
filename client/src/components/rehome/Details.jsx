import rehome from "../../assets/rehome.jpg";

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="max-w-xl px-6">
        <h2 className="font-general-medium font-semibold text-3xl text-primary-dark mt-9 mb-8">
          Rehome a dog
        </h2>
        <h4 className="font-general-medium text-xl text-primary-dark mt-12 mb-8">
          Help us find a loving and caring home for your beloved pet. Our aim is
          to connect compassionate pet owners with enthusiastic individuals or
          families who are eager to provide a nurturing and affectionate home
          for your cherished companion. Please furnish us with the details about
          your pet!
        </h4>

        <div>
          <img
            src={rehome}
            alt="img"
            className="w-full  h-full rounded-md md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
