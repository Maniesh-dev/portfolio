import {AnimatePresence, motion} from 'framer-motion'

const MenuBtn = ({isActive, setIsActive} : 
  {isActive: boolean, setIsActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div onClick={() => {setIsActive(!isActive)}} className=' text-black border rounded-full uppercase font-semibold absolute top-0 right-0 border-none cursor-pointer w-[80px] h-[30px] overflow-hidden'>
      <AnimatePresence>
        <motion.div 
          initial={{top: '0%'}}
          animate={{top: isActive ? '-100%' : '0%'}}
          transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
          className='relative w-full h-full'
        >
          <div className='w-full h-full bg-[#EB5B00] flex items-center justify-center'>
            <PerspectiveText text='Menu'/>
          </div>
          <div className=' w-full h-full bg-black text-white absolute top-[100%] flex items-center justify-center'>
            <PerspectiveText text='Close'/>
          </div>  
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const PerspectiveText = ({text}: {text: string}) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <p>{text}</p>
      <p className='absolute'>{text}</p>
    </div>
  )
}

export default MenuBtn