import Link from 'next/link'
import React, { ElementType } from 'react'

interface RedeSocialProps {
    icone: ElementType
    url: string
}

const RedeSocial = (props: RedeSocialProps) => {
  return (
    <Link href={props.url} target='_blank'>
        <div className='bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer'>
            <props.icone size={35} stroke={1} className="text-indigo-400"/>
        </div>
    </Link>
  )
}

export default RedeSocial
