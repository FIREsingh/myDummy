import ContactSectonLeft from '../../components/ContactSectionLeft/ContactSectonLeft'
import ContactSectionRight from '../../components/ContactSectionRight/ContactSectionRight'
import Title from '../../components/Title/Title'
import { Toaster } from '../../utils/Toaster'

const Contact = () => {
  return (
    <>
        <Toaster />
        <section id='contact' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title title="CONTACT" des='CONTACT WITH ME' />
            </div>
            <div className='w-full'>
                <div className='w-full h-auto flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0'>
                    <ContactSectonLeft />
                    <ContactSectionRight />
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact