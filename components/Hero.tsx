import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Oi, Meu Nome é ${pageInfo?.name}`,
      "Cara-que-ama-café.tsx",
      "<EuAdoroCodificar />"
    ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        width={128}
        height={128}
        color="#000000"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Foto da logo" 
      />
      <div className='z-20'>
        <h2 className='text-[10px] sm:text-xs md:text-sm uppercase text-gray-500 pb-4 tracking-[10px] sm:tracking-[12px] md:tracking-[15px]' >{pageInfo?.role}</h2>
        <h1 className='text-1xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3 '>{text}</span>
          <Cursor cursorColor='#8257e5'/>
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#project">
            <button className='heroButton'>Project</button>
          </Link>
        </div>
      </div>
    </div>
  )
}