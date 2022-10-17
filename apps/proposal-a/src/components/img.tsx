/* eslint-disable @next/next/no-img-element */
const Img: React.FC<{
  name: string;
  type?: 'png' | 'jpg' | 'webp' | 'svg';
  [x: string]: any;
}> = ({ name, type = 'webp', ...props }) => {
  if (type === 'svg')
    return <img src={`${process.env.NEXT_PUBLIC_BASEPATH}/img/${name}.${type}`} alt="" {...props} />
  return (
    <img src={`${process.env.NEXT_PUBLIC_BASEPATH}/img/${name}.${type}`} srcSet={`${process.env.NEXT_PUBLIC_BASEPATH}/img/${name}@2x.${type} 2x, ${process.env.NEXT_PUBLIC_BASEPATH}/img/${name}@3x.${type} 3x`} alt="" {...props} />
  )
}

export default Img