import React from 'react'
import style from './Header.module.css'
import logo from '../../images/logoHead.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t, i18n } = useTranslation()
  function languageClick(lang) {
    i18n.changeLanguage(lang)
  }
  return (
    <header className={style.header}>
      <div className={style.upper}>
        <div className={style.logo}>
          <img src={logo} alt='Logo' />
        </div>
        <div className={style.tel}>+996 (312) 97‒61‒58</div>
        <div className={style.call}>{t('Header.Tel')}</div>
      </div>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item1')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item2')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item3')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item4')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item5')}</NavLink></li>
        </ul>
        <div className={style.language}>
          {
            i18n.language === 'ru'
              ?
              <button className={style.langBtn} onClick={() => {
                languageClick('en');
              }
              }>ENG</button>
              :
              <button className={style.langBtn} onClick={() => {
                languageClick('ru');
              }
              }>RU</button>
          }
        </div>
      </nav>
    </header>
  )
}
