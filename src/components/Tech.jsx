import { BallCanvas } from "./canvas"
import { useState } from "react"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { isMobile } from "react-device-detect";
const Tech = () => {
 
  const [count, setCount] = useState(5)
  const [count1, setCount1] = useState(0)
 const [click,setClick]=useState(true)
  const [check,setCheck]=useState(isMobile)
  if(!check){
setCount(12);
setCount1(0);
setCheck(!check)
  }
   const clicked=(e)=>{

  setCount(12);
  setCount1(6);

setClick(false)

}

  return (
   <div
      className="flex flex-row justify-center flex-wrap gap-10 "
    >
      {technologies.map((technologie, index) => {
        return (

          (index <= count && index >= count1) && <div className="w-28 h-28 " key={technologie?.name}><BallCanvas icon={technologie?.icon} />  </div>
        )
      }



      )}

{isMobile && click ?<button  className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" id="tech" onClick={clicked}>See More </button>:""}

    </div>
  )
}

export default SectionWrapper(Tech, "")