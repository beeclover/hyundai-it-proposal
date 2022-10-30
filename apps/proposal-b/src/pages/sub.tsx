import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="xl:max-w-[1920px] mx-auto">
      <img src={`${process.env.NODE_ENV !== 'development' ? process.env.NEXT_PUBLIC_BASEPATH : ''}/img/B_현대IT_sub.jpg`} alt="" />
    </div>
  )
}

export default Home
