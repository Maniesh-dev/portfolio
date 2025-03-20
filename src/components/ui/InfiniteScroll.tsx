import { PlusIcon } from 'lucide-react'
import React, { Fragment } from 'react'

const words = [ "Creative", "Designer", "Creator", "Founder", "Inventor"]
interface props {
  bgStyle: string
  textStyle: string
  iconStyle: string
  rowAnimation: string
}

const InfiniteScroll = ({bgStyle, textStyle, rowAnimation, iconStyle}: props) => {
  return (
    <div>
      <div className={`${bgStyle}  overflow-x-clip`}>
        <div className='flex items-center'>
          <div className={`${rowAnimation} flex flex-none gap-4 pr-4`}>
            {[...new Array(4).fill(0).map((_, i) => (
              <Fragment key={i}>
                {words.map(word => (
                  <div key={word} className='flex items-center gap-4 primaryFont py-[0px]'>
                    <span className={`${textStyle}`}>{word}</span>
                    <PlusIcon className={`${iconStyle} w-4 h-4`}/>
                  </div>
                ))}
              </Fragment>
            ))]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfiniteScroll