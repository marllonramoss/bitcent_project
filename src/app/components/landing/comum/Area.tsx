import React from 'react'

interface AreaProps {
    children: any
    className?: string
    id?: string
}


const Area = (props: AreaProps) => {
  return (
    <div id={props.id ?? ''} className={`
    flex justify-center w-full 
    ${props.className ?? ''}
    `}>
        <div className={`
            px-7 xl:px-0 w-full xl:w-[1200px] 
            `}>
            {props.children}
        </div>
      
    </div>
  )
}

export default Area
