/* eslint-disable @next/next/no-img-element */
const Img: React.FC<{
  name?: string;
  type?: 'png' | 'jpg' | 'webp' | 'svg';
  src?: string;
  [x: string]: any;
}> = ({ name, type = 'webp', src, ...props }) => {
  const path = process.env.NODE_ENV !== 'development' ? process.env.NEXT_PUBLIC_BASEPATH : ''
  if (!!src)
    return <img {...{ ...props, src }} alt="" />
  if (type === 'svg')
    return <img src={`${path}/img/${name}.${type}`} alt="" {...props} />
  return (
    <img src={`${path}/img/${name}.${type}`} srcSet={`${path}/img/${name}@2x.${type} 2x, ${path}/img/${name}@3x.${type} 3x`} alt="" {...props} />
  )
}

export default Img