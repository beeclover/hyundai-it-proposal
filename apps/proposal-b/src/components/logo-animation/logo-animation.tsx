import { useContext, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { SceneContext } from 'comp/provider/scene';
import styled from '@emotion/styled'
import Copyright from './copyright';
import { useTimeoutFn } from 'react-use'

const LogoAnimation = ({ isDark = false }: { isDark?: boolean }) => {
  const { scene, increment } = useContext(SceneContext);

  const [isReady, cancel, reset] = useTimeoutFn(() => {
    scene === 2 && increment()
  }, 1000);
  const animationComplete = useCallback(() => {
    if (isReady() === false) {
      cancel();
    } else {
      reset();
    }
  }, []);

  return (
    <AnimatePresence>
      {
        scene == 1 && <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1.5
            }
          }}
          exit={{
            opacity: 0,
          }}
          onAnimationComplete={() => scene == 1 && increment()}
          className='flex'
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50.01" height="57.091" viewBox="0 0 50.01 57.091">
              <path d="M195.135 337.666v21.675H171.3v-21.675h-13.083v57.091H171.3v-22.97h23.834v22.97h13.092v-57.091h-13.091z" transform="translate(-158.217 -337.666)" style={{
                fill: isDark ? "#3c92ff" : "#00306d"
              }} />
            </svg>
          </div>
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: '370.1px',
              transition: {
                delay: 0.5
              }
            }}
            className="flex overflow-hidden"
          >
            <div className="ml-[5.3px] mr-[10.1px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="58.344" height="57.091" viewBox="0 0 58.344 57.091">
                <path d="m234.506 337.666-13.8 22.619-13.638-22.619h-15.455l22.527 37.32v19.771h13.1v-19.771l22.717-37.32h-15.451z" transform="translate(-191.613 -337.666)" style={{
                  fill: isDark ? "#3c92ff" : "#00306d"
                }} />
              </svg>
            </div>
            <div className='mr-[14.7px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="49.993" height="57.091" viewBox="0 0 49.993 57.091">
                <path d="M241.328 394.755a10.945 10.945 0 0 1-8.185-3.191 11.833 11.833 0 0 1-3.1-8.492v-45.408h13.097V379.5a2.879 2.879 0 0 0 2.913 2.813h17.983a2.876 2.876 0 0 0 2.921-2.813v-41.84h13.084v45.408a11.66 11.66 0 0 1-3.1 8.492 10.919 10.919 0 0 1-8.185 3.191z" transform="translate(-230.048 -337.664)" style={{
                  fill: isDark ? "#3c92ff" : "#00306d"
                }} />
              </svg>
            </div>
            <div className='mr-[14.7px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="49.977" height="57.107" viewBox="0 0 49.977 57.107">
                <path d="M317.608 337.655h-13.117v32.585a1 1 0 0 1-1.837.583l-18.107-28.905a9.214 9.214 0 0 0-7.7-4.263 9.4 9.4 0 0 0-9.211 9.581v47.527h13.076v-32.646a.991.991 0 0 1 .993-1.021.961.961 0 0 1 .844.48l18.124 28.914a9.158 9.158 0 0 0 7.7 4.271 9.411 9.411 0 0 0 9.244-9.564z" transform="translate(-267.631 -337.655)" style={{
                  fill: isDark ? "#3c92ff" : "#00306d"
                }} />
              </svg>
            </div>
            <div className='mr-[14.9px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="49.994" height="57.083" viewBox="0 0 49.994 57.083">
                <path d="M342.081 379.5a2.746 2.746 0 0 1-2.9 2.813h-20.9v-32.191h20.9a2.739 2.739 0 0 1 2.9 2.8zm10.005-38.624a10.9 10.9 0 0 0-8.176-3.208h-38.739v57.083h38.739a10.951 10.951 0 0 0 8.176-3.191 11.775 11.775 0 0 0 3.079-8.492V349.35a11.733 11.733 0 0 0-3.079-8.475" transform="translate(-305.171 -337.668)" style={{
                  fill: isDark ? "#3c92ff" : "#00306d"
                }} />
              </svg>
            </div>
            <div className="mr-[14.3px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="50.068" height="57.091" viewBox="0 0 50.068 57.091">
                <path d="M358.69 350.084a2.889 2.889 0 0 0-2.739 3v11.7h23.834v-11.947a2.683 2.683 0 0 0-2.955-2.727zm23.246-12.429c10.94 0 10.99 11.4 10.99 11.4v45.691h-13.141v-17.678h-23.834v17.678h-13.092v-45.263c0-11.9 10.833-11.828 10.833-11.828z" transform="translate(-342.859 -337.655)" style={{
                  fill: isDark ? "#3c92ff" : "#00306d"
                }} />
              </svg>
            </div>
            <div className='mr-[25.6px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="13.084" height="57.091" viewBox="0 0 13.084 57.091">
                <path style={{
                  fill: isDark ? "#3c92ff" : "#00306d"
                }} d="M0 0h13.084v57.091H0z" />
              </svg>
            </div>
          </motion.div>
          <div className='ml-[22.9px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="13.084" height="57.091" viewBox="0 0 13.084 57.091">
              <path style={{
                fill: isDark ? "#3c92ff" : "#00306d"
              }} d="M0 0h13.084v57.091H0z" />
            </svg>
          </div>
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: '49.845px',
              transition: {
                delay: 0.6
              }
            }}
            className="overflow-hidden ml-[9.6px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="49.845" height="57.107" viewBox="0 0 49.845 57.107">
              <path d="M479.043 337.655H429.2v12.411h18.389v44.7h13.1v-44.7h18.355z" transform="translate(-429.198 -337.655)" style={{
                fill: isDark ? "#3c92ff" : "#00306d"
              }} />
            </svg>
          </motion.div>
        </motion.div>
      }
      {
        scene == 2 && <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.3,
            }
          }}
          exit={{
            opacity: 0,
          }}
          onAnimationComplete={animationComplete}
        >
          <Copyright />
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default LogoAnimation

const TwistText = styled.div`
  mix-blend-mode: difference;
`;