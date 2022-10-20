import { useState, useRef, useMemo, useEffect } from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Controller, EffectFade } from "swiper";
import Img from 'comp/img'

const TextSlide = ({ play, children }: { play: boolean; children?: React.ReactNode }) => {
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
      <Img name="s2-01-01" />
    </div>
    {children}
    <div ref={el2} className="absolute bottom-0 right-0" style={{ transform: 'translateX(170px) translateY(110px)', opacity: 0 }}>
      <Img name="s2-01-02" />
    </div>
  </div>
}

const Section2 = () => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperCore>();
  const [secondSwiper, setSecondSwiper] = useState<SwiperCore>();
  return (
    <section>
      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={2}
          coverflowEffect={{
            rotate: 50,
            stretch: -160,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Controller]}
          className="py-[323px]"
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
        >
          {[...new Array(9)].map((_, index) =>
            <SwiperSlide key={index} style={{ width: '1020px', height: '600px' }}>
              <Img src={`https://source.unsplash.com/1020x600?${index}`} />
            </SwiperSlide>)}
        </Swiper>
        <div className="absolute top-0 w-full h-full">
          <Swiper
            grabCursor={true}
            effect={"fade"}
            fadeEffect={{
              crossFade: true
            }}
            centeredSlides={true}
            slidesPerView={1}
            initialSlide={2}
            pagination={false}
            className="h-full"
            modules={[EffectFade, Controller]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
          >
            {[...new Array(9)].map((_, index) =>
              <SwiperSlide key={index} className={`w-full h-full flex justify-center items-center`}>
                {({ isActive }) => (
                  <div className='w-full h-full max-w-[1020px] max-h-[600px]'>
                    <TextSlide play={isActive}>
                      <div className='w-full h-full flex justify-center items-center'>
                        <h1 className='text-[100px] text-red-500'>{index}</h1>
                      </div>
                    </TextSlide>
                  </div>
                )}
              </SwiperSlide>)}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Section2