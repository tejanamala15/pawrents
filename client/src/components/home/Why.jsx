import { careTitle, careSubtitle, careList } from "../../data";
import FadeIn from "../FadeIn";
import Paw from "../../assets/paw.jpg";
import { IoMdPaw } from "react-icons/io";

const Why = () => {
  return (
    <div className="px-10 max-w-[1490px] mx-auto mb-[160px] ">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {careTitle}
        </h1>
      </FadeIn>

      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12">
          {careSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <div className="flex flex-col gap-8 items-start">
          {careList.map((item, i) => (
            <FadeIn key={i} delay={(i + 1) * 0.2} direction="left">
              <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                <IoMdPaw className="h-[60px] w-[60px] text-[#b45309]" />
                <div>
                  <h3 className="text-center xs:text-start mb-2 text-3xl lg:text-[28px] text-fontBlack font-medium">
                    {item.title}
                  </h3>
                  <h6 className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                    {item.subtitle}
                  </h6>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} direction="right">
          <img
            className="max-w-sm max-h-sm object-cover col-span-2 md:col-span-3 row-span-2 rounded-xl"
            src={Paw}
            alt="/"
          />
        </FadeIn>
      </div>
    </div>
  );
};

export default Why;
