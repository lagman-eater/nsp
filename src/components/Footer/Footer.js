import React from 'react'
import style from './Footer.module.css'
import { useTranslation } from 'react-i18next'
import logo from '../../images/logoHead.png'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube } from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className={style.cont}>
      <div className={style.upper}>
        <div className={style.item}>
          <h5>{t('Footer.Contacts')}</h5>
          <ul>
            <li><a href='tel:+996(312)976-158'>{t('Footer.Tel')} </a>+996 (312) 976-158</li>
            <li><a href='tel:+996(312)976-958'>{t('Footer.Tel')} </a>+996 (312) 976-958</li>
            <li><a href='mailto:info@nsp.kg'>e-mail:</a>info@nsp.kg</li>
          </ul>
        </div>
        <div className={style.item}><img src={logo} /></div>
        <div className={style.item}>
          <h5>{t('Footer.Coor')}</h5>
          <ul>
            <li>{t('Footer.Adress1')}</li>
            <li>{t('Footer.Adress2')}</li>
          </ul>
        </div>
      </div>
      <div className={style.bot}>
        <div>©2008-2022 Copyright ОсОО “NSP”</div>
        <section>
          <div><a href='javascript:void(0)'><FaFacebookF classname={style.icon}/></a></div>
          <div><a href='javascript:void(0)'><BsTwitter classname={style.icon}/></a></div>
          <div><a href='javascript:void(0)'><BsYoutube classname={style.icon}/></a></div>
          <div><a href='javascript:void(0)'><FaInstagram className={style.icon}/></a></div>
        </section>
      </div>
    </footer>
  )
}
