import { useState, useRef, useMemo, useEffect } from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Controller } from "swiper";
import Img from 'comp/img'

const TextSlide = ({ play }: { play: boolean }) => {
  const el1 = useRef(null);
  const timeline1 = useMemo(() => gsap.timeline({
    paused: true,
    defaults: { duration: 0.4 }
  }), [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline1.to(el1.current, {
        transform: 'translateY(0)',
        opacity: 1,
        delay: 0.3,
        ease: "power3.easeInOut"
      })
    });
    return () => ctx.revert();
  }, [timeline1])

  useEffect(() => {
    if (play) {
      timeline1.play()
    } else {
      timeline1.reverse()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play])

  return <div className='w-full h-full flex justify-end items-center pr-[100px]'>
    <div ref={el1} style={{ opacity: 0, transform: 'translateY(30px)' }}>
      <Img name="124" style={{ height: '251px' }} />
    </div>
  </div>
}

const Section4 = () => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperCore>();
  const [secondSwiper, setSecondSwiper] = useState<SwiperCore>();
  return (
    <section>
      <div className="container mx-auto mt-[278px]">
        <h2 className="text-[48px]" style={{ fontFamily: 'AppleSDGothicNeo' }}>CASE STUDY</h2>
        <div className="mt-[34px] flex text-[22px] text-opacity-[0.4] text-white gap-x-[41px]">
          <div className="text-white relative after:block after:w-full after:h-[4px] after:bg-white">기업</div>
          <div>문화/스포츠</div>
          <div>리테일/프랜차이즈</div>
          <div>교통/운송</div>
          <div>정부공공기관</div>
          <div>교육/세미나</div>
          <div>헬스케어/호텔</div>
          <div>아웃도어</div>
        </div>
      </div>
      <div className='mt-[80px] relative mb-[268px]'>
        <Swiper
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={"auto"}
          spaceBetween={500}
          modules={[Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
        >
          {[...new Array(9)].map((_, index) =>
            <SwiperSlide key={index} style={{ width: '1200px', height: '580px' }}>
              <Img src={`https://source.unsplash.com/1200x580?${index}`} />
            </SwiperSlide>)}
        </Swiper>
        <div className='absolute top-0 left-0 w-full'>
          <div className="container mx-auto">
            <Swiper
              grabCursor={true}
              centeredSlides={false}
              slidesPerView={1}
              spaceBetween={500}
              effect={"fade"}
              modules={[EffectFade, Controller]}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
            >
              {[...new Array(9)].map((_, index) =>
                <SwiperSlide key={index} style={{ width: '100%', height: '580px' }}>
                  {({ isActive }) => <TextSlide play={isActive} />}
                </SwiperSlide>)}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4