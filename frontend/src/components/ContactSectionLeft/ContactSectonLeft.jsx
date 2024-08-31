import { contactImg } from '../../utils/index.js'
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const ContactSectonLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 ">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Contact Image"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Harsh Solanki</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer <br /> Software Developer
        </p>
        <p className="text-base text-gray-400 text-justify tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          obcaecati mollitia asperiores harum, doloribus quam.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8869074696</span>
        </p>
        <p className="text-base text-gray-400 flex flex-col lgl:flex-row items-start lgl:items-center gap-2">
          Email:
          <span className="text-lightText">harshsolanki9898@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          <span className="bannerIcon">
            <FaFacebook />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactSectonLeft;
