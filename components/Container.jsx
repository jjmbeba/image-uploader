import React from 'react'
import ChooseSection from './ChooseSection'
import DragSection from './DragSection'
import Header from './Header'

const Container = () => {
  return (
    <div className='px-[32px] py-[36px] rounded-[12px] shadow-container w-[402px] h-[469px] flex flex-col items-center justify-start'>
       <Header/>
       <DragSection/>
       <ChooseSection/>
    </div>
  )
}

export default Container