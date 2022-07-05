import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Keyboard, Navigation} from 'swiper';
import Page from './Page';
import Button from './Button';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css'

SwiperCore.use([Navigation, Keyboard]);

export default function Book({ volume }) {
  const pagesArray = _createPagesArray(22);
  return <>
    <Swiper slidesPerView={1} navigation keyboard={{enabled: true}}>
      {pagesArray.map(pageNum => (
        <SwiperSlide key={pageNum}>
          <Page bookVolume={volume} num={pageNum}/>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="button-row">
      <Button to="/">Retour</Button>
    </div>
  </>;
}

function _createPagesArray(pageCount) {
  return Array.from({ length: pageCount }, (v, i) => i + 1)
}
