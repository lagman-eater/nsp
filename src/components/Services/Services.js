import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import style from './Services.module.css'
import { useTranslation } from 'react-i18next'
import img1 from '../../images/services1.png'
import img2 from '../../images/services2.png'
import img3 from '../../images/services3.png'
import img4 from '../../images/services4.png'
import img5 from '../../images/services5.png'
import img6 from '../../images/services6.png'
import img7 from '../../images/services7.png'

export default function Services() {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <div className={style.cont}>
                <h1>{t('Services.Title')}</h1>
                <ul>
                    <li>
                        <div className={`${style.img} ${style.img1}`}><img src={img1}/></div>
                        <div className={style.text}>
                            <h2>{t('Services.List.Item1.Title')}</h2>
                            <p>{t('Services.List.Item1.Text')}</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.img} ${style.img2}`}><img src={img2}/></div>
                        <div className={style.text}>
                            <h2>{t('Services.List.Item2.Title')}</h2>
                            <p>{t('Services.List.Item2.Text')}</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.img} ${style.img3}`}><img src={img3}/></div>
                        <div className={style.text}>
                            <h2>{t('Services.List.Item3.Title')}</h2>
                            <p>{t('Services.List.Item3.Text')}</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.img} ${style.img4}`}><img src={img4}/></div>
                        <div className={style.text}>
                            <h2>{t('Services.List.Item4.Title')}</h2>
                            <p>{t('Services.List.Item4.Text')}</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.img} ${style.img5}`}><img src={img5}/></div>
                        <div className={style.text}>
                            <h2>{t('Services.List.Item5.Title')}</h2>
                            <p>{t('Services.List.Item5.Text')}</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.img} ${style.img6}`}><img src={img6}/></div>
                        <div className={style.text}>
                            <h2>{t('Services.List.Item6.Title')}</h2>
                            <p>{t('Services.List.Item6.Text')}</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${style.img} ${style.img7}`}><img src={img7}/></div>
                        <div className={style.text}>
                            <h2>{t('Services.List.Item7.Title')}</h2>
                            <p>{t('Services.List.Item7.Text')}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    )
}
