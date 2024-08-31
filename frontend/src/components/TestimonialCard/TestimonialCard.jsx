import { testimonialOne, quote } from "../../utils/index.js";
import { RiStarFill } from "react-icons/ri";

const TestimonialCard = () => {
  return (
    <div className="w-full">
      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
          <img
            className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
            src={testimonialOne}
            alt="testimonialOne"
          />
          <div className="w-full flex flex-col justify-end">
            <p className="text-xs uppercase text-designColor tracking-wide mb-2">
              Bound - Trolola
            </p>
            <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
            <p className="text-base tracking-wide text-gray-500">
              Operation Officer
            </p>
          </div>
        </div>
        <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
          <img className="w-20 lgl:w-32" src={quote} alt="quote" />
          <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
            <div className="flex flex-col lgl:flex-row justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
              <div>
                <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                  Travel Mobile App Design.
                </h3>
                <p className="text-base text-gray-400 mt-3">
                  via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                </p>
              </div>
              <div className="text-yellow-500 flex gap-1">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
            </div>
            <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              dolorum, eos natus ipsum numquam veniam officia necessitatibus
              ratione quos debitis exercitationem repudiandae facilis id neque
              nihil accusantium perspiciatis repellat? Iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
