import React from 'react'
import style from './MainPage.module.css'
import { useTranslation } from 'react-i18next'
import bgMain from '../../images/bgMain.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import car1 from '../../images/mainCar1.png'
import car2 from '../../images/mainCar2.png'
import car3 from '../../images/mainCar3.png'
import car4 from '../../images/mainCar4.png'
import car5 from '../../images/mainCar5.png'
import car6 from '../../images/mainCar6.png'
import car7 from '../../images/mainCar7.png'
import car8 from '../../images/mainCar8.png'
import car9 from '../../images/mainCar9.png'
import car10 from '../../images/mainCar10.png'
import car11 from '../../images/mainCar11.png'
import './MainPage.css'

export default function MainPage() {
  const { t } = useTranslation()
  return (
    <div className={style.cont}>
      <main>
        <div className={style.left}>
          <h1>{t('MainPage.Main.Title')}</h1>
          <div>{t('MainPage.Main.Text')}</div>
        </div>
        <div className={style.right}><img src={bgMain} /></div>
      </main>
      <section>
        <h3>{t('MainPage.Section.Title')}</h3>
        <div className={style.sectionList}>
          <div className={style.sectionItem}>
            <h6>{t('MainPage.Section.List.Item1.Title')}</h6>
            <ul>
              <li>{t('MainPage.Section.List.Item1.Text1')}</li>
              <li>{t('MainPage.Section.List.Item1.Text2')}</li>
              <li>{t('MainPage.Section.List.Item1.Text3')}</li>
            </ul>
          </div>
          <div className={style.sectionItem}>
            <h6>{t('MainPage.Section.List.Item2.Title')}</h6>
            <ul>
              <li>{t('MainPage.Section.List.Item2.Text1')}</li>
              <li>{t('MainPage.Section.List.Item2.Text2')}</li>
            </ul>
          </div>
          <div className={style.sectionItem}>
            <img />
            <h6>{t('MainPage.Section.List.Item3.Title')}</h6>
            <ul>
              <li>{t('MainPage.Section.List.Item3.Text1')}</li>
              <li>{t('MainPage.Section.List.Item3.Text2')}</li>
              <li>{t('MainPage.Section.List.Item3.Text3')}</li>
            </ul>
          </div>
        </div>
      </section>
      <div className={style.carousel}>
        <Swiper
          // slidesPerView={1}
          // spaceBetween={20}
          // slidesPerGroup={2}
          // centeredSlides={true}
          // loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true,
          // }}
          // centeredSlides={false}
          // centerInsufficientSlides={true}
          // loop={true}
          autoHeight={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={style.swiperSlide}><img src={car1} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car2} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car3} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car4} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car5} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car6} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car7} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car8} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car9} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car10} className={style.carItem} /></SwiperSlide>
          <SwiperSlide className={style.swiperSlide}><img src={car11} className={style.carItem} /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
