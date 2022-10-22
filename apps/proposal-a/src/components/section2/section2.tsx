import { useState, useRef, useMemo, useEffect } from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from "swiper";
import Img from 'comp/img'


const Section2 = () => {
  return (
    <section>
      <div className="container xl:max-w-[2440px] mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          slideToClickedSlide={true}
          coverflowEffect={{
            rotate: 50,
            stretch: -160,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 3000,   // 시간 설정
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
          }}
          className="py-[323px]"
        >
          {[...new Array(3)].map((_, index) =>
            <SwiperSlide key={index} style={{ width: '1020px', height: '600px' }}>
              {({ isActive }) => (
                <>
                  <Img name={`s2-s${index + 1}`} />
                  <div className="absolute w-full h-full top-0 left-0 flex justify-center">
                    <div className='w-full h-full max-w-[1020px] max-h-[600px]'>
                      <TextSlide play={isActive} index={index + 1}>
                        <div className='w-full h-full flex justify-center items-center'>
                        </div>
                      </TextSlide>
                    </div>
                  </div>
                </>
              )}
            </SwiperSlide>)}
        </Swiper>
      </div>
    </section >
  )
}

export default Section2

const TextSlide = ({ play, children, index }: { play: boolean; children?: React.ReactNode; index: number }) => {
  const el1 = useRef(null);
  const el2 = useRef(null);

  const timeline1 = useMemo(() => gsap.timeline({
    paused: true,
    defaults: { duration: 0.4 }
  }), [])
  const timeline2 = useMemo(() => gsap.timeline({
    paused: true,
    defaults: { duration: 0.4 }
  }), [])
  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline1.to(el1.current, {
        transform: 'translateX(-170px) translateY(-80px)',
        opacity: 1,
        delay: 0.3,
        ease: "power3.easeInOut"
      })
      timeline2.to(el2.current, {
        transform: 'translateX(170px) translateY(80px)',
        opacity: 1,
        delay: 0.6,
        ease: "power3.easeInOut",
      })
    });
    return () => ctx.revert();
  }, [timeline1, timeline2])

  useEffect(() => {
    if (play) {
      timeline1.play()
      timeline2.play()
    } else {
      timeline1.reverse()
      timeline2.reverse()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play])

  return <div className='w-full h-full relative'>
    <div ref={el1} className="absolute top-0 left-0" style={{ transform: 'translateX(-170px) translateY(-50px)', opacity: 0 }}>
      <Img name={`s2-s${index}1`} />
    </div>
    {children}
    <div ref={el2} className="absolute bottom-0 right-0" style={{ transform: 'translateX(170px) translateY(110px)', opacity: 0 }}>
      <Img name={`s2-s${index}2`} />
    </div>
  </div>
}