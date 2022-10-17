import type { NextPage } from 'next'
import { useEffect, useRef, useMemo } from 'react'
import Head from 'next/head'
import Img from 'comp/img'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap'

function S1({ play }: { play: boolean }) {
  const timeline = useMemo(() => gsap.timeline({
    paused: true,
    defaults: { duration: 0.4 }
  }), []);
  const el = useRef(null);
  const copyRef = useRef(null);
  const imgWrapRef = useRef(null);
  const logoRef = useRef(null);
  const slugRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(copyRef.current, {
        opacity: 0,
        ease: 'power4.inOut',
        delay: 0.3
      });
      timeline
        .to(imgWrapRef.current, {
          transform: 'translateY(0) scale(0.6)',
          ease: 'power1.easeInOut',
          delay: 0.3
        })
        .to(imgWrapRef.current, {
          clipPath: ((x, y): string => `polygon(
            ${50 - x / 2}% ${50 - y / 2}%,
            ${50 + x / 2}% ${50 - y / 2}%,
            ${50 + x / 2}% ${50 + y / 2}%,
            ${50 - x / 2}% ${50 + y / 2}%
          )`)(60, 5),
          transform: 'translateY(150px) scale(0.8)',
          ease: 'power1.easeInOut',
          delay: 0.5
        })
        .to([logoRef.current, slugRef.current], {
          transform: 'none',
          opacity: 1,
          ease: "power4.inOut",
          duration: 0.7,
          stagger: 0.2
        })
    });
    return () => ctx.revert();
  }, [timeline])

  useEffect(() => {
    play ? timeline.play() : timeline.reverse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play])

  return (
    <div className='w-full h-full relative' ref={el}>
      <div
        ref={imgWrapRef}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transform: 'translateY(0)' }}
        className="w-full h-full relative"
      >
        <Img name="s1-01" className="object-cover absolute w-full h-full" />
      </div>
      <div className="absolute inset-center" ref={copyRef}>
        <Img name="s1-02" />
      </div>
      <div className="absolute inset-center flex flex-col items-center translate-y-[-100%] -translate-x-1/2">
        <div ref={logoRef} className="opacity-0" style={{ transform: 'translateY(20px)' }}>
          <Img name="s1-03" />
        </div>
        <div ref={slugRef} className="opacity-0" style={{ transform: 'translateY(20px)' }}>
          <Img name="s1-04" />
        </div>
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>hyundai it - A안</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='fixed top-0 left-0 z-[90] w-full'>
        <Img name="navi" type="svg" className="w-full" />
      </header>
      <main>
        <section className='bg-black'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="relative h-[1080px]"
          >
            <SwiperSlide>
              <S1 play={true} />
            </SwiperSlide>
            <SwiperSlide>
              <Img name="s1-01" />
            </SwiperSlide>
            <div className='absolute bottom-[84px] left-1/2 -translate-x-1/2 container max-w-[1440px]'>
              <Img name="progress" />
            </div>
          </Swiper>
        </section>
      </main>
      <footer>
        <Img name="footer" />
      </footer>
    </>
  )
}

export default Home
