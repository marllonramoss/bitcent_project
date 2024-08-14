import React from 'react'
import RedeSocial from './RedeSocial'
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react'

const RedesSociais = () => {
  return (
    <div className='flex'>
        <RedeSocial icone={IconBrandYoutube} url='https://www.youtube.com/'/>
        <RedeSocial icone={IconBrandInstagram} url='https://www.instagram.com/'/>
        <RedeSocial icone={IconBrandFacebook} url='https://www.facebook.com/'/>
        <RedeSocial icone={IconBrandGithub} url='https://github.com/marllonramoss'/>
    </div>
  )
}

export default RedesSociais
