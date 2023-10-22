import { referenceTitle, referenceSubtitle } from "../../data";
import Homedog1 from "../../assets/homedog1.png";
import Homedog2 from "../../assets/homedog2.png";
import Homedog3 from "../../assets/homedog3.png";
import FadeIn from "../FadeIn";

const ActNow = () => {
  return (
    <div className="mb-[160px] px-10 max-w-[1490px] mx-auto">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack my-6 text-center">
          {referenceTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <img
              className="max-w-sm max-h-sm object-cover col-span-2 md:col-span-3 row-span-2 rounded-xl"
              src={Homedog1}
              alt="/"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="top">
          <div className="flex flex-col gap-8">
            <img
              className="max-w-sm max-h-sm object-cover col-span-2 md:col-span-3 row-span-2 rounded-xl"
              src={Homedog2}
              alt="/"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div className="flex flex-col gap-8">
            <img
              className="max-w-sm max-h-sm object-cover col-span-2 md:col-span-3 row-span-2 rounded-xl"
              src={Homedog3}
              alt="/"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ActNow;
