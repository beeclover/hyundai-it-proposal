import React, { useEffect, useRef, useState, useMemo } from 'react'
import styled from '@emotion/styled'
import Img from 'comp/img'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Section3 = () => {
  const GridDefaultTitleClassNames = `
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    text-[40px]
    font-bold
    font-[AppleSDGothicNeo]
    leading-none
    group-hover:opacity-0
    transition-all
  `;
  const aniGroup1 = [useRef(null), useRef(null), useRef(null)];
  const aniGroup2 = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(aniGroup1.map(a => a.current), {
        opacity: 1,
        transform: 'translateY(0)',
        ease: 'power4.inOut',
        delay: 0.3,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
          markers: process.env.NODE_ENV === 'development',
          trigger: aniGroup1[0].current,
          start: "top bottom",
          end: "bottom -50%",
          toggleActions: "play reset play reset"
        }
      });
      gsap.to(aniGroup2.map(a => a.current), {
        opacity: 1,
        transform: 'translateY(0)',
        ease: 'power4.inOut',
        delay: 0.3,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
          trigger: aniGroup2[1].current,
          start: "top bottom",
          end: "bottom -50%",
          toggleActions: "play reset play reset"
        }
      });
    });
    return () => ctx.revert();
  }, [])

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-[48px]" style={{ fontFamily: 'AppleSDGothicNeo' }}>OUR PRODUCTS</h2>
        <Grid1 className="mt-[48px] gap-[40px]">
          {/* {['스마트보드'].map((name, index) => {
            const id = index + 1;
            return (
              <div
                key={index}
                className="relative"
                style={{ gridArea: `l${id}`, opacity: 0 }}
                ref={id <= 3 ? aniGroup1[index] : aniGroup2[index - 3]}
              >
                <Img name={`s3-0${id}`} className="object-cover w-full h-full" />
                <span className={GridDefaultTitleClassNames}>{name}</span>
              </div>
            )
          })} */}
          <div
            className="relative group overflow-hidden"
            style={{ gridArea: 'l1', opacity: 0 }}
            ref={aniGroup1[0]}
          >
            <GridItem>
              <Img name="s3-01" className="object-cover w-full h-full" />
              <span className={GridDefaultTitleClassNames}>스마트보드</span>
            </GridItem>
          </div>
          <div
            className="relative group overflow-hidden"
            style={{ gridArea: 'l2', opacity: 0 }}
            ref={aniGroup1[2]}
          >
            <GridItem>
              <Img name="s3-02" className="object-cover w-full h-full" />
              <span className={GridDefaultTitleClassNames}>LED 사이니지</span>
            </GridItem>
          </div>
          <div
            className="relative group overflow-hidden"
            style={{ gridArea: 'l3', opacity: 0 }}
            ref={aniGroup1[1]}
          >
            <GridItem>
              <Img name="s3-03" className="object-cover w-full h-full" />
              <span className={GridDefaultTitleClassNames}>인도어 사이니지</span>
            </GridItem>
          </div>
          <div
            className="relative group overflow-hidden"
            style={{ gridArea: 'l4', opacity: 0 }}
            ref={aniGroup2[0]}
          >
            <GridItem>
              <Img name="s3-04" className="object-cover w-full h-full" />
              <span className={GridDefaultTitleClassNames}>전자교탁</span>
            </GridItem>
          </div>
          <div
            className="relative group overflow-hidden"
            style={{ gridArea: 'l5', opacity: 0 }}
            ref={aniGroup2[1]}
          >
            <GridItem>
              <Img name="s3-05" className="object-cover w-full h-full" />
              <span className={GridDefaultTitleClassNames}>조달제품</span>
            </GridItem>
          </div>
          <div
            className="relative group overflow-hidden"
            style={{ gridArea: 'l6', opacity: 0 }}
            ref={aniGroup2[2]}
          >
            <GridItem>
              <Img name="s3-06" className="object-cover w-full h-full" />
              <span className={GridDefaultTitleClassNames}>아웃도어 사이니지</span>
            </GridItem>
          </div>
        </Grid1>
      </div>
    </section>
  )
}

export default Section3

const Grid1 = styled.div`
  display: grid;
  grid-template:
    "l1 l1 z0"
    "l1 l1 z0"
    "l1 l1 z0"
    "l1 l1 z0"
    "l1 l1 l3"
    "l1 l1 l3"
    "l2 l2 l3"
    "l2 l2 l3"
    "l2 l2 l4"
    "l2 l2 l4"
    "l2 l2 l4"
    "l2 l2 l4"
    "l5 z1 z1"
    "l5 z1 z1"
    "l5 l6 l6"
    "l5 l6 l6"
    "z2 l6 l6"
    "z2 l6 l6"
    "z2 l6 l6"
    "z2 l6 l6"
`;

const GridItem = ({ children, ...props }: { children: React.ReactNode;[x: string]: any; }) => {
  const [isHover, setIsHover] = useState(false);
  return <div onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} {...props}>
    {children}
    <div
      className='absolute h-full right-0 top-0 bg-black bg-opacity-50 w-1/2 opacity-0 group-hover:opacity-100 z-20 transition-all duration-1000 flex justify-center items-center px-[40px]'
    >
      <Img name="s2-s11" />
    </div>
  </div>
}
const GridItemSidebar = ({ play }: { play: boolean }) => {
  const sideEl = useRef(null);
  const timeline = useMemo(() => gsap.timeline({
    paused: true,
    defaults: { duration: 0.4 }
  }), [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline.to(sideEl.current, {
        opacity: 1,
        delay: 0.3,
        ease: "power3.easeInOut"
      })
    });
    return () => ctx.revert();
  }, [timeline, play])

  useEffect(() => {
    if (play) {
      timeline.play()
    } else {
      timeline.reverse()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, timeline])

  return play ? <div
    ref={sideEl}
    className='absolute h-full right-0 top-0 bg-black bg-opacity-50 w-1/2 opacity-0'
  >
    test
  </div> : <></>;
}