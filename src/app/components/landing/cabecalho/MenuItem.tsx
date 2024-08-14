import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
    children: any
    url?: string
    onClick?: () => void
    className?: string
}

const MenuItem = (props: MenuItemProps) => {
    const renderizarBotao = () => {
        return (
          <div className={`
              flex justify-center items-center cursor-pointer
              text-zinc-300 m-2 p-4 rounded-md h-9
              ${props.className ?? ''}`}
              onClick={props.onClick} 
              >
            {props.children}
          </div>
        )
    }

    return props.url ? (
        <Link href={props.url ?? ''}>{renderizarBotao()}</Link>
    ) : renderizarBotao()

}

export default MenuItem
