import React from 'react'
import style from './Header.module.css'
import '../../index.css'
import logo from '../../images/logoHead.png'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hamburger from 'hamburger-react'
import {IoCall} from 'react-icons/io5'

export default function Header() {
  const { t, i18n } = useTranslation()
  function languageClick(lang) {
    i18n.changeLanguage(lang)
  }
  return (
    <header className={style.header}>
      <div className={style.upper}>
        <div className={style.logo}>
          <Link to='/'><img src={logo} alt='Logo' /></Link>
        </div>
        <div className={style.tel}>+996 (312) 97‒61‒58</div>
        <div className={style.call}>{t('Header.Tel')}</div>
        <div className={style.iconCont}><a href='javascript:void(0)'><IoCall className={style.icon}/></a></div>
      </div>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.listItem}><NavLink className={style.navLink} to='/header'>{t('Header.List.Item1')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item2')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item3')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item4')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item5')}</NavLink></li>
        </ul>
        <div className={style.burgerMenu}>
          <Hamburger
            onToggle={toggled => {
              if (toggled) {
                document.getElementById('burger-ul').classList.remove('burger-ul-animation__close')
                document.getElementById('burger-ul').classList.add('burger-ul-animation__open')
              } else {
                document.getElementById('burger-ul').classList.remove('burger-ul-animation__open')
                document.getElementById('burger-ul').classList.add('burger-ul-animation__close')
              }
            }}
            color='#fff'
            size={23}
            className='hamburger' />
        </div>
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
      {
        <ul className={style.burgerList} id='burger-ul'>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item1')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item2')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item3')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item4')}</NavLink></li>
          <li className={style.listItem}><NavLink className={style.navLink} to=''>{t('Header.List.Item5')}</NavLink></li>
        </ul>
      }
    </header>
  )
}
