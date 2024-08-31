import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaPython, FaNodeJs, FaAws, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    });
    return (
        <>
            <div className='flex flex-col gap-3'>
                    <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
                    <h1 className='text-6xl font-bold text-white'>
                        Hi, I'm {" "}
                        <span className='text-designColor capitalize'>
                            Harsh Solanki
                        </span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>
                        a <span>
                            {text}
                        </span>
                        <Cursor 
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#ff014f"
                        />
                    </h2>
                    <p className="text-base font-bodyFonts leading-6 tracking-wide">
                        I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.
                    </p>
                </div>
                <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between">
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4'>
                            FIND ME IN
                        </h2>
                        <div className='flex gap-4'>
                            <a href="https://github.com/legendajar" target="_blank">
                                <span className="bannerIcon">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="https://x.com/Harsh_Solanki98" target='_blank'>
                                <span className="bannerIcon">
                                    <FaXTwitter />
                                </span>
                            </a>
                            <a href="https://linkedin.com/in/solanki-harsh" target="_blank">
                                <span className="bannerIcon">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4'>
                            Best Skills At
                        </h2>
                        <div className='flex gap-4'>
                            <span className="bannerIcon">
                                <FaPython />
                            </span>
                            <span className="bannerIcon">
                                <FaNodeJs />
                            </span>
                            <span className="bannerIcon">
                                <FaAws />
                            </span>
                            <span className="bannerIcon">
                                <FaReact />
                            </span>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default LeftBanner