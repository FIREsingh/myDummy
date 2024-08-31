import LeftBanner from "../../components/LeftBanner/LeftBanner"
import RightBanner from "../../components/RightBanner/RightBanner"



const Banner = () => {
    
  return (
    <section id='home' className='w-full pt-10 pb-20 flex flex-col gap-10 lgl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFonts border-b-black'>
        <div className="w-full lgl:w-1/2 flex flex-col gap-10">
            <LeftBanner />
        </div>
        <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
            <RightBanner />
        </div>
    </section>
  )
}

export default Banner