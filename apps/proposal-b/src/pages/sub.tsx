import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <img src={`${process.env.NEXT_PUBLIC_BASEPATH}/img/sub.jpg`} alt="" />
    </div>
  )
}

export default Home
