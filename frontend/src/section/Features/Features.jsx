import Card from "../../components/Card/Card"
import Title from "../../components/Title/Title"
import { cardContent } from "../../utils/CardContent"

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
      <Title title="Features" des="what i do" />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        {
          cardContent.map((card) => (
            <Card 
              key={card.key}
              cardIcon={card.cardIcon}
              cardTitle={card.cardTitle}
              cardDesc={card.cardDesc}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Features