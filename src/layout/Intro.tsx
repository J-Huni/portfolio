import { useMemo } from 'react'
import Avatar from '../components/@base/Avatar'
import Contact from '../components/@base/Contact'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const Desc = ({ text }: { text: string }) => <p className='text-xl text-white my-3'>{text}</p>

const Intro = () => {
  const yearly: number = useMemo(
    () => new Date().getFullYear() - new Date('2019-11-18').getFullYear(),
    []
  )

  return (
    <div className='flex justify-start flex-col gap-4 max-w-xs w-full p-4 mt-5 max-xl:hidden'>
      <div className='flex gap-2'>
        <Avatar img='/assets/imgs/avatar.jpg' isIntro />
        <div className='flex flex-col gap-2 justify-center'>
          <p className='text-2xl text-white font-bold tracking-[-0.05em] mb-4 leading-tight'>
            이지훈 / {yearly}년차 <br />
            Front-End 개발자
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-start gap-3'>
        <Contact icon={<PhoneIcon className='w-10 h-10' />} text='010-5097-1412' />
        <Contact icon={<EnvelopeIcon className='w-10 h-10' />} text='biorope@naver.com' />
      </div>
      <div className='rounded-md mt-5 tracking-[-0.11em]'>
        <Desc text='현재 보시는 사이트는' />
        <Desc text='Typescript / Vite js / React js / Tailwind 등으로' />
        <Desc text='제작 하였습니다.' />
        <br />
        <Desc text='궁금하신 점이 있거나, 저에게 관심이 있으시다면' />
        <Desc text='email이나 핸드폰으로 연락 해주세요.' />
      </div>
    </div>
  )
}

export default Intro
