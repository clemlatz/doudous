import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Keyboard } from 'swiper';
import Page from './Page';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css'

SwiperCore.use([Navigation, Keyboard]);

export default function Book({ volume }) {
  const pagesArray = _createPagesArray(22);
  return <Swiper slidesPerView={1} navigation keyboard={{ enabled: true }}>
    {pagesArray.map(pageNum => (
      <SwiperSlide key={pageNum}>
        <Page bookVolume={volume} num={pageNum}/>
      </SwiperSlide>
    ))}
  </Swiper>;
}

function _createPagesArray(pageCount) {
  return Array.from({ length: pageCount }, (v, i) => i + 1)
}
