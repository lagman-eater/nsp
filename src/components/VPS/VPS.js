import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import style from './VPS.module.css'
import { useTranslation } from 'react-i18next'

export default function VPS() {
    const { t } = useTranslation()
    return (
        <>
        <Header/>
        <div className={style.cont}>
            <div className={style.upper}>
                <h1>{t('VPS.title')}</h1>
                <div className={style.content}>
                    {/* <div><img src={}/></div> */}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
