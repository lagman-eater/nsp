import React from 'react'
import style from './Footer.module.css'
import { useTranslation } from 'react-i18next'
import logo from '../../images/logoHead.png'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className={style.cont}>
      <div className={style.upper}>
        <div className={style.item}>
          <h5>Контакты:</h5>
          <ul>
            <li><a href='tel:+996(312)976-158'>тел: </a>+996 (312) 976-158</li>
            <li><a href='tel:+996(312)976-958'>тел: </a>+996 (312) 976-958</li>
            <li><a href='mailto:info@nsp.kg'>e-mail:</a>info@nsp.kg</li>
          </ul>
        </div>
        <div className={style.item}><img src={logo} /></div>
        <div className={style.item}>
          <h5>Координаты:</h5>
          <ul>
            <li>Кыргызская Республика, Чуй,</li>
            <li>с. Лебединовка, Ленина 262</li>
          </ul>
        </div>
      </div>
      <div className={style.bot}>
        <div>©2008-2022 Copyright ОсОО “NSP”</div>
        <div>Icons</div>
      </div>
    </footer>
  )
}
