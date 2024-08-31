const Cards = ({title, count, icon}) => {
  return (
    <div className='w-30 h-45 border rounded-md p-3 group hover:bg-designColor hover:text-white hover:border-white'>
        <div className='flex flex-col gap-4 group'>
            <span className='border border-designColor rounded-full p-4 m-auto mt-2 text-designColor group-hover:border-white group-hover:text-white'>
                {icon}
            </span>
            <h1 className='text-2xl text-center font-bold text-bodyFonts group-hover:text-white'>{title}</h1>
            <p className='text-xl text-center text-bodyFonts mb-3 group-hover:text-white'>{count}</p>
        </div>
    </div>

)}

export default Cards