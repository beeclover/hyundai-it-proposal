import type { NextPage } from 'next';
import LogoAnimation from 'comp/logo-animation/logo-animation'
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from 'react-use';
import SceneProvider from 'comp/provider/scene'

const Home: NextPage = () => {
  const { scrollY } = useScroll();
  const { width } = useWindowSize();
  const maxWidth1 = useTransform(scrollY, [0, 500], [1170, width]);
  const height = useTransform(scrollY, [0, 500], ['37vh', '100vh']);
  return (
    <SceneProvider>
      <div className="fixed w-full h-full flex justify-center items-center">
        <LogoAnimation />
      </div>
      <div className='pt-[300px]'></div>
      <div className="pb-[94px]"></div>
      <motion.div
        style={{
          maxWidth: maxWidth1,
          height: height
        }}
        className="fixed w-full left-1/2 bottom-0 -translate-x-1/2"
      >
        <img src="/img/it-td-01670022388.png" alt="" className='w-full h-full absolute object-cover' />
      </motion.div>
      <div className="pb-[1000px]"></div>
    </SceneProvider>
  )
}

export default Home
