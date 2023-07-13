import {motion} from 'framer-motion'
import {styles} from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn,textVariant } from '../utils/motion';
import { testimonials } from '../constants';
const FeedbackCard=({index,testimonial,name,image,designation})=>{

 
  
  return (
<motion.div variants={fadeIn("","spring",0.5*index,0.75)}
className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
>
<p className="text-white font-black text-[48px]"> "  </p>
<div className="mt-1">
  <p className='text-white tracking-wider text-[18px]' id="iwant">{testimonial} {index===2?<p><br/><br/><br/></p>:""}</p>
  <div className="mt-7 flex justify-between items-center gap-1 " >
    <div className="flex-1 flex flex-end flex-col">
      <p className='text-white font-medium text-[16px]'>
        <span className='blue-text-gradient'>@</span> {name}

      </p>
      <p className='mt-1 text-secondary text-[12px]' >{designation}</p>
    </div>
    <img 
    src={image} alt={`quote-by-${name}`}
    className='w-10 h-10 rounded-full object-cover'
    />
  </div>
</div>
</motion.div>
  )
}
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>

<h2 className={`${styles.sectionHeadText}`}>Quotes I Like</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-40 flex flex-wrap gap-7`}>
{testimonials.map((testimonial,index)=>(
<FeedbackCard
key={testimonial.name}
index={index}
{...testimonial}
/>
))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")