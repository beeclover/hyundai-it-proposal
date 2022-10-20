import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import Img from 'comp/img'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

const Section3 = () => {
  const GridDefaultTitleClassNames = `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] font-bold font-[AppleSDGothicNeo] leading-none`;
  const aniGroup1 = [useRef(null), useRef(null), useRef(null)];
  const aniGroup2 = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(aniGroup1.map(a => a.current), {
        opacity: 1,
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
          <div
            className="relative"
            style={{ gridArea: 'l1', opacity: 0 }}
            ref={aniGroup1[0]}
          >
            <Img name="s3-01" className="object-cover w-full h-full" />
            <span className={GridDefaultTitleClassNames}>스마트보드</span>
          </div>
          <div
            className="relative"
            style={{ gridArea: 'l2', opacity: 0 }}
            ref={aniGroup1[2]}
          >
            <Img name="s3-02" className="object-cover w-full h-full" />
            <span className={GridDefaultTitleClassNames}>LED 사이니지</span>
          </div>
          <div
            className="relative"
            style={{ gridArea: 'l3', opacity: 0 }}
            ref={aniGroup1[1]}
          >
            <Img name="s3-03" className="object-cover w-full h-full" />
            <span className={GridDefaultTitleClassNames}>인도어 사이니지</span>
          </div>
          <div
            className="relative"
            style={{ gridArea: 'l4', opacity: 0 }}
            ref={aniGroup2[0]}
          >
            <Img name="s3-04" className="object-cover w-full h-full" />
            <span className={GridDefaultTitleClassNames}>전자교탁</span>
          </div>
          <div
            className="relative"
            style={{ gridArea: 'l5', opacity: 0 }}
            ref={aniGroup2[1]}
          >
            <Img name="s3-05" className="object-cover w-full h-full" />
            <span className={GridDefaultTitleClassNames}>조달제품</span>
          </div>
          <div
            className="relative"
            style={{ gridArea: 'l6', opacity: 0 }}
            ref={aniGroup2[2]}
          >
            <Img name="s3-06" className="object-cover w-full h-full" />
            <span className={GridDefaultTitleClassNames}>아웃도어 사이니지</span>
          </div>
        </Grid1>
      </div>
    </section>
  )
}

export default Section3