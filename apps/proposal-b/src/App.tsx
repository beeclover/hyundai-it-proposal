import { useContext } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize, useLockBodyScroll, useToggle } from 'react-use';
import LogoAnimation from 'comp/logo-animation/logo-animation'
import Copyright from 'comp/logo-animation/copyright'
import { SceneContext } from 'comp/provider/scene';

function App() {
  const [locked, toggleLocked] = useToggle(true)
  const { width } = useWindowSize();
  const { scene, increment } = useContext(SceneContext);

  useLockBodyScroll(locked);

  const variants = {
    stop: {
      maxWidth: '1170px',
      height: '37vh'
    },
    full: {
      maxWidth: `${width}px`,
      height: '100vh'
    }
  }

  const copyVariants = {
    initial: {
      opacity: 0,
    },
    pin: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  }

  return (
    <>
      <div className="fixed w-full h-full flex justify-center items-center">
        <LogoAnimation />
      </div>
      <div className='pt-[300px]'></div>
      <div className="pb-[94px]"></div>
      <motion.div
        initial={'stop'}
        variants={variants}
        animate={scene >= 3 ? 'full' : 'stop'}
        transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
        onAnimationComplete={() => {
          if (scene >= 3) {
            increment();
          }
        }}
        className="fixed w-full left-1/2 bottom-0 -translate-x-1/2"
      >
        <img src="/img/it-td-01670022388.png" alt="" className='w-full h-full absolute object-cover' />
      </motion.div>
      <motion.div
        className="fixed w-full h-full flex justify-center items-center top-0"
        variants={copyVariants}
        initial={'initial'}
        animate={scene == 4 ? 'pin' : 'hide'}
      >
        <Copyright isDark={true} />
      </motion.div>
      <div className="pb-[1000px]"></div>
    </>
  )
}

export default App
