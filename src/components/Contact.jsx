import { useState, useRef } from "react"
import { motion } from 'framer-motion';
import emailJs from '@emailjs/browser'
import { styles } from "../styles";
import { EarthCanvas } from './canvas'
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  )
  const [loading, setLoading] = useState(false)
  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //service_m2g7898
    //template_xnoog0i
    //CcHeC2AA5Hi005Nxn
    emailJs.send('service_m2g7898', 'template_xnoog0i', {
      from_name: form.name,
      to_name: 'Jainam',
      from_email: form.email,
      to_email: 'jainamsanghavi008@gmail.com',
      message: form.message,
    }, 'CcHeC2AA5Hi005Nxn').then(() => {
      setLoading(false)
      alert('Done !Sucess')
      setForm({ name: "", email: "", message: "" })
    }, (error) => {
      setLoading(false)
      alert('something went wrong')
    })

  }
  return (
    <div className="xl-mt-12 xl:flex-row flex-col-reverse flex gap-10 ">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 rounded-2x p-8">
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form action="" className="mt-12 flex flex-col gap-8" ref={formRef} onSubmit={
          handlesubmit
        }>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input type="text" className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none" onChange={handlechange} name="name" value={form.name} placeholder="Enter Your Name" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none" onChange={handlechange} name="email" value={form.email} placeholder="Enter Your Email" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7" className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none" onChange={handlechange} name="message" value={form.message} placeholder="Enter Your msg here" />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")