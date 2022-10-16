import { useContext, useRef } from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useWindowSize, useLockBodyScroll, useToggle, useIntersection } from 'react-use';
import clsx from 'clsx'

import { SceneContext } from 'comp/provider/scene';
import LogoAnimation from 'comp/logo-animation/logo-animation'
import Copyright from 'comp/logo-animation/copyright'

function App() {
  const [locked, toggleLocked] = useToggle(true)
  const { width } = useWindowSize();
  const { scene, increment, } = useContext(SceneContext);
  const { scrollY } = useScroll();

  useLockBodyScroll(locked);

  return (
    <>
      {scene <= 4 && <div className="fixed w-full h-full flex justify-center items-center">
        <LogoAnimation />
      </div>}
      <motion.div
        className={clsx("relative pt-[2000px]")}
      >
        <motion.div
          layout
          initial={'stop'}
          variants={{
            stop: {
              maxWidth: '1170px',
              height: '37vh',
            },
            full: {
              maxWidth: `${width}px`,
              height: '100vh',
            },
          }}
          animate={scene < 3 ? 'stop' : 'full'}
          transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
          onAnimationComplete={() => {
            if (scene == 3) {
              increment();
            }
          }}
          className={clsx(`max-w-[100vw] overflow-hidden w-full`, {
            'relative': scene == 6,
            'fixed left-1/2 -translate-x-1/2 transition-all bottom-0': scene != 6,
          })}
        >
          <motion.img
            className='w-full h-full absolute bg-center object-cover'
            src="/img/it-td-01670022388.jpg"
            srcSet="/img/it-td-01670022388@2x.jpg 2x,
                /img/it-td-01670022388@3x.jpg 3x"
            alt=""
          />
          <motion.img
            layout
            className='w-full h-full absolute bg-center object-contain bg-black'
            style={{
              transform: useTransform(scrollY, [0, 250, 500], ['scale(1.1)', 'scale(1.3)', 'scale(1)']),
            }}
            variants={{
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  delay: 0.5
                }
              }
            }}
            initial={'initial'}
            animate={scene == 3 && 'animate'}
            src="/img/it-td-01670022388.jpg"
            srcSet="/img/it-td-01670022388@2x.jpg 2x,
                /img/it-td-01670022388@3x.jpg 3x"
            alt=""
          />
          <motion.img
            className='w-full h-full absolute object-cover'
            style={{ opacity: useTransform(scrollY, [0, 500], ['0', '1']) }}
            src="/img/adobe-stock-85597314.jpg"
            srcSet="/img/adobe-stock-85597314@2x.jpg 2x,
                /img/adobe-stock-85597314@3x.jpg 3x"
            alt=""
          />
          <motion.div
            className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 container flex justify-center items-center"
            variants={{
              initial: {
                opacity: 0,
              },
              pin: {
                opacity: 1,
              },
              hide: {
                opacity: 0,
              },
            }}
            initial={'initial'}
            animate={scene == 4 && 'pin'}
            onAnimationComplete={() => {
              toggleLocked(false);
              increment();
            }}
          >
            <Copyright isDark={true} />
          </motion.div>
        </motion.div>
        {/* {scene == 5 && <motion.div
          className='pb-[200px]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.01 }}
          onAnimationComplete={() => {
            increment();
          }}
          viewport={{ once: true, amount: 1 }}
        />} */}
      </motion.div>
    </>
  )
}

export default App
