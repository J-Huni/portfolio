import { useCallback } from 'react'
import { useMemo } from 'react'
import Avatar from '../components/@base/Avatar'
import Contact from '../components/@base/Contact'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const Title = ({ text }: { text: string }) => (
  <p className='font-bold text-3xl text-white ml-4'>{text}</p>
)
const Desc = ({ text }: { text: string }) => <p className='text-xl text-white m-5'>{text}</p>

const Intro = () => {
  const yearly: number = useMemo(
    () => new Date().getFullYear() - new Date('2019-11-18').getFullYear(),
    []
  )

  const openGitHub = useCallback(() => {
    window.open('https://github.com/J-Huni')
  }, [])
  return (
    <div className='flex justify-center flex-col pl-4 gap-4'>
      <div className='flex gap-2'>
        <div className='pl-3'>
          <Avatar />
          <div
            className='cursor-pointer flex items-center text-white gap-4 justify-center'
            onClick={openGitHub}
          >
            <img src='/assets/imgs/github-mark-white.png' className='w-12 h-12 hover:scale-125' />
            <p className='text-2xl'>Daniel.Lee</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 justify-center'>
          <p className='text-7xl text-white font-bold tracking-[-0.1em] mb-4'>안녕하세요</p>
          <Title text={`한 걸음씩 성장하는 ${yearly}년차 개발자 이지훈 입니다.`} />
          <div className='flex '>
            <Contact icon={<PhoneIcon className='w-10 h-10' />} text='010-5097-1412' />
            <Contact icon={<EnvelopeIcon className='w-10 h-10' />} text='biorope@naver.com' />
          </div>
        </div>
      </div>
      <Desc text='현재 보시는 사이트는 React js / typescript / tailwind css 등으로 제작 하였습니다.' />
      <Desc text='궁금하신 점이 있거나, 저에게 관심이 있으시다면 email로 연락 해주세요.' />
    </div>
  )
}

export default Intro
