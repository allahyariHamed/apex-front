"use client"
import React, { FC, useState } from 'react'
import CornerLines from './corner-lines'
import Button from './button'
import ContactWays from './contactWays'
import TalkAboutJobForm from './talkAboutJobForm'
import Back_botton from '@/components/ts/back-botton'

const Content: FC = () => {
    const [buttonState, setButtonState] = useState<number>(0)

    return (
        <div className='w-96 mx-auto'>
            
            <CornerLines className='w-full h-full rotate-180 show-lines' />

            <div className='grid grid-cols-2 gap-5 justify-between mt-3'>
                <Button className=' flex justify-center border border-transparent
                items-center text-center rounded-full px-3 py-2 text-yellow-500 cursor-pointer 
                transition hover-shadow w-full h-full z-10 bg-[#111]' text='button-1' setButtonState={setButtonState} value={1} />

                <Button className=' flex justify-center border border-transparent 
                items-center text-center rounded-full px-3 py-2 text-yellow-500 cursor-pointer hover-shadow
                transition w-full h-full z-10 bg-[#111]' text='button-2' setButtonState={setButtonState} value={2} />
            </div>

            {buttonState == 1 && <ContactWays />}
            {buttonState == 2 && <TalkAboutJobForm />}
        </div>
    )
}

export default Content