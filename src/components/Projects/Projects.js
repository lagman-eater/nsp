import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import style from './Projects.module.css'
import { useTranslation } from 'react-i18next'

export default function Projects() {
    const { t } = useTranslation()
  return (
    <>
    <Header/>
    <div className={style.cont}>
        <h1>{t('Projects.Title')}</h1>
    </div>
    <Footer/>
    </>
  )
}
