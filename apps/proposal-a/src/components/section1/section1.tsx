import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from './slide1'
import Img from 'comp/img'

const Section1 = () => {
  return (
    <section className='bg-black'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        className="relative h-[1080px]"
      >
        <SwiperSlide>
          {({ isActive }) => <Slide1 play={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          <Img name="s1-01" />
        </SwiperSlide>
        <div className='absolute bottom-[84px] left-1/2 -translate-x-1/2 container max-w-[1440px]'>
          <Img name="progress" />
        </div>
      </Swiper>
    </section>
  )
}

export default Section1