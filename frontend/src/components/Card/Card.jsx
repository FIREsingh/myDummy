import { HiArrowRight } from 'react-icons/hi';

const Card = ({cardIcon, cardTitle, cardDesc}) => {
  return (
    <div className='w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
      <div className='h-72 overflow-y-hidden'>
        <div className='flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500'>
          <div className='w-10 h-8 flex flex-col justify-between'>
            {
              cardIcon ? 
              <span className='text-5xl text-designColor'>{cardIcon}</span> : 
              (
                <>
                  <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                  <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                  <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                  <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                </>
              )
            }
          </div>
          <div className='flex flex-col gap-6'>
            <h2 className='text-xl md:text-2xl font-titleFonts font-bold text-gray-300'>
              {cardTitle}
            </h2>
            <p className='base'>
              {cardDesc}
            </p>
            <span className='text-2xl text-designColor'>
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card