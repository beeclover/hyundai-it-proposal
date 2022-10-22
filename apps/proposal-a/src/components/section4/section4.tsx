import { useRef, useMemo, useEffect, useState } from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from 'comp/img';
import clsx from 'clsx'

const TextSlide = ({ play, name }: { play: boolean; name: string; }) => {
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

  return <div className='w-full h-full flex justify-end items-center'>
    <div ref={el1} className="px-[48px]" style={{ opacity: 0, transform: 'translateY(30px)' }}>
      <Img name={name} style={{ height: '251px' }} />
    </div>
  </div>
}

const Section4 = () => {
  const [slideActiveIndex, setSlideActiveIndex] = useState(0);

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
      <div className='mt-[80px] relative mb-[268px] container mx-auto xl:max-w-[2440px]'>
        <Swiper
          grabCursor={true}
          slidesPerView={"auto"}
          slideToClickedSlide={true}
          loop={true}
          onSlideChange={(swiper) => { setSlideActiveIndex(swiper.realIndex) }}
        >
          {[...new Array(3)].map((_, index) =>
            <SwiperSlide key={index} style={{ width: `${1920 - 240}px`, height: '580px' }} className={clsx({ 'z-20': slideActiveIndex == index })} >
              {({ isActive }) => <div className="container max-w-[calc(1920px-240px)] w-full flex">
                <div className="relative">
                  <Img name={`s4-s${index + 1}1`} className={clsx({ 'opacity-40': !isActive })} />
                  <div className={clsx(`absolute right-0 translate-x-full top-0 flex h-full items-center`, {
                    'z-20': isActive
                  })}>
                    <TextSlide play={isActive} name={`s4-s${index + 1}2`} />
                  </div>
                </div>
              </div>
              }
            </SwiperSlide>)}
        </Swiper>
      </div>
    </section>
  )
}

export default Section4