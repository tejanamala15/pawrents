import { motion } from "framer-motion";
import RehomeDetails from "../components/rehome/Details";
import RehomeForm from "../components/rehome/Form";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillPlusSquare } from "react-icons/ai";

const Contact = () => {
  const { action } = useParams();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/account/rehome/new");
  }
  return (
    <div>
      {action != "new" && (
        <div className="h-screen items-center flex flex-col">
          <button
            className="rounded-full border border-[#ef4444] border-x-2 border-y-2 hover:border-[#52525b] hover:text-[#52525b] font-semibold px-4 py-2 sm:w-auto mb-10 mt-3 flex-shrink-0 items-center  text-[#ef4444] mx-2 md:mx-4 gap-2 text-md lg:text-xl"
            onClick={handleClick}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <AiFillPlusSquare size="1.5rem" className="" />
            Add a dog in search of a new home
          </button>
        </div>
      )}

      {action === "new" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.1,
          }}
          className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
        >
          <RehomeForm />
          <RehomeDetails />
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
